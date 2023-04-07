import { TestBed } from '@angular/core/testing';

import { HomeshopService } from './homeshop.service';

describe('HomeshopService', () => {
  let service: HomeshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
