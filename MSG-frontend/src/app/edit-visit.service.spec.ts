import { TestBed, inject } from '@angular/core/testing';

import { EditVisitService } from './edit-visit.service';

describe('EditVisitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditVisitService]
    });
  });

  it('should be created', inject([EditVisitService], (service: EditVisitService) => {
    expect(service).toBeTruthy();
  }));
});
