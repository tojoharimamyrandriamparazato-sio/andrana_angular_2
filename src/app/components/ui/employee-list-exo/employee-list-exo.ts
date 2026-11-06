import { Component, input, output } from '@angular/core';
import { IEmployee } from '../../../models/employee';

@Component({
  selector: 'app-employee-list-exo',
  imports: [],
  templateUrl: './employee-list-exo.html',
  styleUrl: './employee-list-exo.scss',
})
export class EmployeeListExo {
  employees_exo = input.required<IEmployee[]>();
  delete = output<number>();
  edit = output<number>();
  details = output<number>();
  onDelete(employee_id: number) {
    this.delete.emit(employee_id);
  }
  onEdit(employee_id: number) {
    this.edit.emit(employee_id);
  }
  onDetails(employee_id: number) {
    this.details.emit(employee_id);
  }
}
