import { TestBed } from '@angular/core/testing';

import { ReyService } from './rey.service';

describe('ReyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReyService = TestBed.get(ReyService);
    expect(service).toBeTruthy();
  });
});
