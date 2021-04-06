import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      email: ['', Validators.required],
      cellPhone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.form.markAllAsTouched();
    
    if (this.form.invalid)
      return;
  }
  
}
