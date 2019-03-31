import { TestBed } from '@angular/core/testing';

import { AlfilService } from './alfil.service';

describe('AlfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlfilService = TestBed.get(AlfilService);
    expect(service).toBeTruthy();
  });
});
