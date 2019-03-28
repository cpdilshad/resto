import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { ProductsPage } from '../products/products';
import { RegisterPage } from '../register/register';


import {AuthService} from '../../providers/auth.service';
import {SharedService} from '../../providers/shared.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService,SharedService]
})
export class LoginPage {
  email : string; 
  password : string; 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authService: AuthService,
              public sharedService: SharedService,
              private loadingCtrl : LoadingController,
              private alertCtrl : AlertController
             ) {
        this.authService.logout();
  }

  ionViewDidLoad() {
    if(this.authService.isLoggedIn()){
      this.navCtrl.setRoot(ProductsPage);
    }
  }

  login(){
    const loading = this.loadingCtrl.create({ content: 'Signing you in...' });
    loading.present();
    this.authService.login(this.email, this.password)
    .then(data => { loading.dismiss();
      this.navCtrl.setRoot(ProductsPage);
    })
    
    
    .catch(error => { loading.dismiss()
      const alert = this.alertCtrl.create({ title:'SignIn failed!', message: error.message, buttons: ['Ok'] });
      alert.present();

    })
  }
  createAccount(): void{
    this.navCtrl.push(RegisterPage);
  }

  

}
