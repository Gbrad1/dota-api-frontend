import { Component, OnInit } from '@angular/core';
import {WinLossServiceService} from '../services/win-loss-service.service';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-winloss-view',
  templateUrl: './winloss-view.component.html',
  styleUrls: ['./winloss-view.component.css']
})
export class WinlossViewComponent implements OnInit {

  record: any;
  searchControl: FormControl;
  debounce = 400;

  constructor(private winLossService: WinLossServiceService) { }

  ngOnInit() {
    this.winLossService.getWinLoss(0).subscribe(data => {
      this.record = data;
    });
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
        this.winLossService.getWinLoss(query).subscribe(data => {
          this.record = data;
        });
      });
  }

}
