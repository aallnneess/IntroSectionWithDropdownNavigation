import { TestBed } from '@angular/core/testing';

import { MobilePanelService } from './mobile-panel.service';

describe('MobilePanelService', () => {
  let service: MobilePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
