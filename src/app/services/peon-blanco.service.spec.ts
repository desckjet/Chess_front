import { TestBed } from '@angular/core/testing';

import { PeonBlancoService } from './peon-blanco.service';

describe('PeonBlancoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeonBlancoService = TestBed.get(PeonBlancoService);
    expect(service).toBeTruthy();
  });
});
