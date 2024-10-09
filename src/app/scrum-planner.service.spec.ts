import { TestBed } from '@angular/core/testing';

import { ScrumPlannerService } from './scrum-planner.service';

describe('ScrumPlannerService', () => {
  let service: ScrumPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrumPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
