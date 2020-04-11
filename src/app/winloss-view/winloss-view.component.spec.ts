import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinlossViewComponent } from './winloss-view.component';

describe('WinlossViewComponent', () => {
  let component: WinlossViewComponent;
  let fixture: ComponentFixture<WinlossViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinlossViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinlossViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
