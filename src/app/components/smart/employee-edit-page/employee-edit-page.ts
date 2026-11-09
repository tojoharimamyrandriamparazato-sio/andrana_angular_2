import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { EmployeeExo } from '../../../services/employee-exo';
import { IEmployee } from '../../../models/employee';
import { Employee } from '../../ui/employee/employee';

@Component({
  selector: 'app-employee-edit-page',
  imports: [Employee],
  templateUrl: './employee-edit-page.html',
  styleUrl: './employee-edit-page.scss',
})
export class EmployeeEditPage {
  route = inject(ActivatedRoute);
  employeeService = inject(EmployeeExo);
  employee_exo: IEmployee | null = null;
  constructor() {
    this.route.params.pipe(
      map(
        (params) => {
          const paramId: number = parseInt(params["empId"]);
          return this.employeeService.getEmployee(paramId);
        }
      ),
      takeUntilDestroyed()
    ).subscribe({
      next: (employee) => {
        this.employee_exo = employee;
      },
      error : (err) => {
        this.employee_exo = null;
      }
    });
  }
}
