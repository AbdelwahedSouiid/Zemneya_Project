import { TestBed } from '@angular/core/testing';

import { DetailPanierService } from './detail-panier.service';

describe('DetailPanierService', () => {
  let service: DetailPanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailPanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
