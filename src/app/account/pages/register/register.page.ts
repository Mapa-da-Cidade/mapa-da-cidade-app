import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

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
      user: ['', Validators.required],
      email: ['', Validators.required],
      cellPhone: ['', Validators.required],
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
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        this.loadingService.dismiss();
        this.navigate.navigateRoot('tabs');
      })
      .catch(() => {
        this.loadingService.dismiss();
        this.toastService.error('Ocorreu um erro interno');
      });
  }

}
