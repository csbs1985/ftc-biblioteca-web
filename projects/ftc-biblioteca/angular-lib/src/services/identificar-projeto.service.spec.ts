import { TestBed } from '@angular/core/testing';

import { IdentificarProjetoService } from './identificar-projeto.service';

describe('IdentificarProjetoService', () => {
  let service: IdentificarProjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificarProjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
