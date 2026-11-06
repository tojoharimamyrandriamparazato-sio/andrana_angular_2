import { Routes } from '@angular/router';
import { EmployeeListPage } from './components/smart/employee-list-page/employee-list-page';
import { EmployeeEditPage } from './components/smart/employee-edit-page/employee-edit-page';
import { AddEmployeePage } from './components/smart/add-employee-page/add-employee-page';

export const routes: Routes = [
    {path: "employees", component: EmployeeListPage},
    {path: "employees/new", component: AddEmployeePage},
    {path: "employees/edit/:empId", component: EmployeeEditPage},
    {path: "", redirectTo: 'employees', pathMatch: "full"}
];
