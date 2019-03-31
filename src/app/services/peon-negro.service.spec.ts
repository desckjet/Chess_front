import { TestBed } from '@angular/core/testing';

import { PeonNegroService } from './peon-negro.service';

describe('PeonNegroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeonNegroService = TestBed.get(PeonNegroService);
    expect(service).toBeTruthy();
  });
});
