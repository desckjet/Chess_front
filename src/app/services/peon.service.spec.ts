import { TestBed } from '@angular/core/testing';

import { PeonService } from './peon.service';

describe('PeonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeonService = TestBed.get(PeonService);
    expect(service).toBeTruthy();
  });
});
