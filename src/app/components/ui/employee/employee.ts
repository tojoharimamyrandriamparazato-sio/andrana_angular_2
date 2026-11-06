import { Component, input, output } from '@angular/core';
import { LevelPipe } from '../../../pipes/level-pipe';
import { IEmployee } from '../../../models/employee';

@Component({
  selector: 'app-employee',
  imports: [LevelPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee {
  employee = input.required<IEmployee>();
  nameClick = output<number>();
  onNameClick() {
    this.nameClick.emit(this.employee()._id);
  }
}
