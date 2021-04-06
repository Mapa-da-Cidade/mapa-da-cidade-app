import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';
import { RegisterPage } from './pages/register/register.page';
import { LoginPage } from './pages/login/login.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  declarations: [LoginPage, RegisterPage, ResetPasswordPage]
})
export class AccountModule { }
