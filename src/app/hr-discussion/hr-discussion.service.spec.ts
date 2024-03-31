import { TestBed } from '@angular/core/testing';

import { HrDiscussionService } from './hr-discussion.service';

describe('HrDiscussionService', () => {
  let service: HrDiscussionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrDiscussionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
