import { TestBed } from '@angular/core/testing';

import { ScoreService } from './score.service';

describe('ScoreService', () => {
  let service: ScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
