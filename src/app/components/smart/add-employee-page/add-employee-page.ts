import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee-page',
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee-page.html',
  styleUrl: './add-employee-page.scss',
})
export class AddEmployeePage {
  form = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)]),
    department: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required)
  });
}
