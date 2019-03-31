import { TestBed } from '@angular/core/testing';

import { DamaService } from './dama.service';

describe('DamaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DamaService = TestBed.get(DamaService);
    expect(service).toBeTruthy();
  });
});
