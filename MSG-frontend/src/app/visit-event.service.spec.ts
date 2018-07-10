import { TestBed, inject } from '@angular/core/testing';

import { VisitEventService } from './visit-event.service';

describe('VisitEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitEventService]
    });
  });

  it('should be created', inject([VisitEventService], (service: VisitEventService) => {
    expect(service).toBeTruthy();
  }));
});
