import { TestBed } from '@angular/core/testing';

import { ServizioProvaService } from './servizio-prova.service';

describe('ServizioProvaService', () => {
  let service: ServizioProvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioProvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
