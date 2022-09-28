import { TestBed } from '@angular/core/testing';

import { ClouthesService } from './clouthes.service';

describe('ClouthesService', () => {
  let service: ClouthesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClouthesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
