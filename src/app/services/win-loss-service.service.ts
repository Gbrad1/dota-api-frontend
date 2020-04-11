import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WinLossServiceService {
  public API = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  // This method is creating our postman query.
  getWinLoss(steamID: number): Observable<any> {
    return this.http.get(this.API + '/dotaFASE/' + steamID);
  }
}
