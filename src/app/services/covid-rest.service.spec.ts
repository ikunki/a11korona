import { TestBed } from '@angular/core/testing';

import { CovidRestService } from './covid-rest.service';

describe('CovidRestService', () => {
  let service: CovidRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
