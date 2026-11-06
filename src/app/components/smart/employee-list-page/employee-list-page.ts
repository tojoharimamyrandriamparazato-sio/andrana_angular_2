import { Component, inject, input, output } from '@angular/core';
import { EmployeeListExo } from '../../ui/employee-list-exo/employee-list-exo';
import { IEmployee } from '../../../models/employee';
import { Employee } from '../../ui/employee/employee';
import { EmployeeExo } from '../../../services/employee-exo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeListExo, Employee],
  templateUrl: './employee-list-page.html',
  styleUrl: './employee-list-page.scss',
})
export class EmployeeListPage {
  employeeService_exo = inject(EmployeeExo);
  router = inject(Router);
  employees: IEmployee[] = [];
  employee_exo: IEmployee | null = null;

  constructor() {
    this.employees = this.employeeService_exo.getEmployees();
  }

  showDetails_exo(employee_id: number) {
    /*
    this.employee_exo = this.employees.find(
      employee => employee._id === employee_id
    ) || null;
     */
    this.employee_exo = this.employeeService_exo.getEmployee(employee_id);
  }
  onDelete_exo(employee_id: number) {
    this.employee_exo = null;
    /*
    this.employees = this.employees.filter(
      employee => employee._id !== employee_id
    );
    */
    this.employeeService_exo.deleteEmployee(employee_id);
    this.employees = this.employeeService_exo.getEmployees();
  }
  onEdit_exo(employee_id: number) {
    // alert(employee_id);
    this.router.navigate(["employees/edit", employee_id]);
  }

  employee: IEmployee = {
    "_id": 1,
    "name": "Tojo be tay",
    "department": "SIO",
    "level": "X"
  }

  onNameClick(employee_id: number) {
    alert(employee_id);
  }

  title = 'Ma première application Angular';
  age = 31;
  counter = 0;
  theValue = "";
  messageClass: 'success' | 'error' = 'success';
  inputType: 'text' | 'password' = 'password';

  now = new Date();
  amount = 20.3;
  curr = 'EUR';

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  onEdit(value: string) {
    this.theValue = value;
  }
  changeColor(style: 'success' | 'error') {
    this.messageClass = style;
  }
  toggleInputType() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
