import { Component, inject, output } from '@angular/core';
import { IEmployee } from '../../../models/employee';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm {
  private fb = inject(FormBuilder);
  addEmployee = output<IEmployee>();
  form = this.fb.group({
    _id: [0],
    name: ['', [
      Validators.required,
      Validators.maxLength(30)]],
    department: ['', Validators.required],
    level: ['', Validators.required]
  });
  /*
  form = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)]),
    department: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required)
  });
  */
  onSubmit() {
    // console.log(this.form.value);
    const { _id, name, department, level } = this.form.value;
    const employee = { _id, name, department, level };
    this.addEmployee.emit(employee as IEmployee);
  }
}
