import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { Employee } from './components/ui/employee/employee';
import { CurrencyPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { ProductList } from './Product/product-list/product-list';
import { IEmployee } from './models/employee';
import { EmployeeListExo } from './components/ui/employee-list-exo/employee-list-exo';
import { EmployeeExo } from './services/employee-exo';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Employee, JsonPipe, DatePipe, CurrencyPipe, UpperCasePipe, ProductList, EmployeeListExo, FormsModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  usernameCtrl = new FormControl(
    "", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(50)
    ]
  );
  isMajorCtrl = new FormControl(false);
  form = new FormGroup({
    username: this.usernameCtrl,
    isMajor: this.isMajorCtrl
  });
  /*
  data = {
    username: "",
    isMajor: false
  }
  */
  /*
  employees: IEmployee[] = [
    {
      "_id": 1,
      "name": "Rakoto Jean",
      "department": "CMD",
      "level": "X"
    },
    {
      "_id": 2,
      "name": "Rabe Marie",
      "department": "SIO",
      "level": "Y"
    },
    {
      "_id": 3,
      "name": "Andry Paul",
      "department": "BF",
      "level": "Z"
    },
    {
      "_id": 4,
      "name": "Rasoa Hanta",
      "department": "MEGP",
      "level": "X"
    },
    {
      "_id": 5,
      "name": "Randria Michel",
      "department": "SIO",
      "level": "Y"
    },
    {
      "_id": 6,
      "name": "Nirina Fara",
      "department": "BF",
      "level": "Z"
    },
    {
      "_id": 7,
      "name": "Hery Toky",
      "department": "BF",
      "level": "X"
    },
    {
      "_id": 8,
      "name": "Miora Lala",
      "department": "SIO",
      "level": "Z"
    },
    {
      "_id": 9,
      "name": "Solo Harena",
      "department": "CMD",
      "level": "Y"
    },
    {
      "_id": 10,
      "name": "Fanja Tiana",
      "department": "SIO",
      "level": "X"
    }
  ];
  */
  employeeService_exo = inject(EmployeeExo);
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
    alert(employee_id);
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
