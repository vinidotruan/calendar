import { TestBed } from '@angular/core/testing';

import { GoalsModalService } from './goals-modal.service';

describe('GoalsModalService', () => {
  let service: GoalsModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
