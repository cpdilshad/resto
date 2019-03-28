import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { ProductsPage } from '../products/products';
import { LoginPage } from '../login/login';

import {AuthService} from '../../providers/auth.service';
import {SharedService} from '../../providers/shared.service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AuthService,SharedService]
})
export class RegisterPage {
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


  register(){
    
    const loading = this.loadingCtrl.create({
      content : 'Signing you up...'
    });

    loading.present();
    this.authService.signup(this.email, this.password)
    .then(data =>{
      loading.dismiss();
    })
    .catch(error =>{
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'SignUp failed!',
        message: error.message,
        buttons: ['ok']
      });
      alert.present();
  });
}



}
