import { TestBed } from '@angular/core/testing';

import { WinLossServiceService } from './win-loss-service.service';

describe('WinLossServiceService', () => {
  let service: WinLossServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinLossServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
