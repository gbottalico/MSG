import { TestBed, inject } from '@angular/core/testing';

import { NewVisitService } from './new-visit.service';

describe('NewVisitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewVisitService]
    });
  });

  it('should be created', inject([NewVisitService], (service: NewVisitService) => {
    expect(service).toBeTruthy();
  }));
});
