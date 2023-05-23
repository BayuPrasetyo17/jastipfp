import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}
  async yakin() { 
    const alert = await this.alertController.create({ 
      header: 'Konfirmasi', 
      message: 'Apakah anda yakin ingin mengantar pesanan ini?', 
      buttons: [ 
        { 
          text: 'Batal', 
          role: 'cancel', 
          cssClass: 'secondary', 
          handler: () => { 
            console.log('Dibatalkan'); 
          }, 
        }, 
        { 
          text: 'Ya', 
          handler: () => { 
            console.log('Diterima'); 
          }, 
        }, 
      ], 
    }); 
 
    await alert.present(); 
  } 
}

