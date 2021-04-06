import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    isLoading = false;

    constructor(public loadingController: LoadingController) { }

    async present() {
        this.isLoading = true;
        return await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Carregando...',
        }).then(a => {
            a.present().then(() => { });
        });
    }

    async dismiss() {
        this.isLoading = false;
        return await this.loadingController.dismiss().then(() => { });
    }
}