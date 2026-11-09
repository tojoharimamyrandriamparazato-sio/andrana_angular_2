import { Injectable } from '@angular/core';
import { IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeExo {
  private employees: IEmployee[] = [
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
  constructor() {

  }
  getEmployee(id: number) {
    return this.employees.find(
      employee => employee._id === id
    ) || null;
  }
  deleteEmployee(id: number) {
    this.employees = this.employees.filter(
      employee => employee._id !== id
    );
  }
  getEmployees() {
    return this.employees;
  }
  addEmployee(employee: IEmployee) {
    employee._id = this.employees[this.employees.length - 1]._id + 1;
    this.employees.push(employee);
  }
}
