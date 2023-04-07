import { TestBed } from '@angular/core/testing';

import { FactureligneproduitService } from './factureligneproduit.service';

describe('FactureligneproduitService', () => {
  let service: FactureligneproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactureligneproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
