import { TestBed } from '@angular/core/testing';

import { CaballoService } from './caballo.service';

describe('CaballoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaballoService = TestBed.get(CaballoService);
    expect(service).toBeTruthy();
  });
});
