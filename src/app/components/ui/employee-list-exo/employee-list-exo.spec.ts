import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListExo } from './employee-list-exo';

describe('EmployeeListExo', () => {
  let component: EmployeeListExo;
  let fixture: ComponentFixture<EmployeeListExo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListExo],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeListExo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
