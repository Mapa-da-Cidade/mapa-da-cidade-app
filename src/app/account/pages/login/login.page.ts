import { Security } from './../../../shared/security/token.security';
import { LoadingService } from './../../../shared/services/loading.service';
import { ToastService } from './../../../shared/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/shared/models/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseAuth: AngularFireAuth,
    private navigate: NavController,
    private toastService: ToastService,
    private loadingService: LoadingService
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

  async submit() {
    this.form.markAllAsTouched();

    if (this.form.invalid)
      return;

    let email = this.form.controls.email.value;
    let password = this.form.controls.password.value;

    await this.loadingService.present();
    this.firebaseAuth.signInWithEmailAndPassword(email, password).then(
      (response) => {
        this.loadingService.dismiss();
        Security.set(new User(response.user.uid, response.user.email), response.user.refreshToken);
        this.navigate.navigateRoot('tabs');
      })
      .catch(() => {
        this.loadingService.dismiss();
        this.toastService.error('E-mail ou Senha inválidos');
      });
  }

}
