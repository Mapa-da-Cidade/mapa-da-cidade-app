import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseAuth: AngularFireAuth,
    private navigate: NavController
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.form.markAllAsTouched();

    if (this.form.invalid)
      return;

    let email = this.form.controls.email.value;
    let password = this.form.controls.password.value;

    this.firebaseAuth.signInWithEmailAndPassword(email, password).then(
      (data) => {
        console.log(data);
        this.navigate.navigateRoot('tabs');
      })
      .catch(() => { });
  }

}
