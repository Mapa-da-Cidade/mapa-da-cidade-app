import { ResetPasswordPage } from './pages/reset-password/reset-password.page';
import { RegisterPage } from './pages/register/register.page';
import { LoginPage } from './pages/login/login.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: LoginPage
    },
    {
        path: 'register',
        component: RegisterPage
    },
    {
        path: 'reset-password',
        component: ResetPasswordPage
    },
    {
        path: 'tabs',
        loadChildren: () => import('./../tabs/tabs.module').then(m => m.TabsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class AccountRoutingModule { }
