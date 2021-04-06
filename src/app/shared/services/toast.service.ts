
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(public toastController: ToastController) { }

    async success(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 1000,
            color: 'success',
            position: 'top'
        });
        toast.present();
    }

    async error(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 1000,
            color: 'danger',
            position: 'top'
        });
        toast.present();
    }

    async warning(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 1000,
            color: 'warning',
            position: 'top'
        });
        toast.present();
    }

}