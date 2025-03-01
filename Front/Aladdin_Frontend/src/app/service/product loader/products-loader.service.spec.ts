import { TestBed } from '@angular/core/testing';

import { ProductsLoaderService } from './products-loader.service';

describe('ProductsLoaderService', () => {
  let service: ProductsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
