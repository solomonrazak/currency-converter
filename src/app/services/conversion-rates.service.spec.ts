import { TestBed } from '@angular/core/testing';

import { ConversionRatesService } from './conversion-rates.service';

describe('ConversionRatesService', () => {
  let service: ConversionRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
