import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeePage } from './add-employee-page';

describe('AddEmployeePage', () => {
  let component: AddEmployeePage;
  let fixture: ComponentFixture<AddEmployeePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployeePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEmployeePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
