import { TestBed } from '@angular/core/testing';

import { EmployeeExo } from './employee-exo';

describe('EmployeeExo', () => {
  let service: EmployeeExo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeExo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
