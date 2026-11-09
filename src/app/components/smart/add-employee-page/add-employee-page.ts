import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IEmployee } from '../../../models/employee';
import { EmployeeForm } from '../../ui/employee-form/employee-form';
import { EmployeeExo } from '../../../services/employee-exo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-page',
  imports: [EmployeeForm],
  templateUrl: './add-employee-page.html',
  styleUrl: './add-employee-page.scss',
})
export class AddEmployeePage {
  employeeService = inject(EmployeeExo);
  router = inject(Router);
  onAddEmployee(employee: IEmployee) {
    this.employeeService.addEmployee(employee);
    this.router.navigate(['/employees']);
  }
}
