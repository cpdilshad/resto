import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {LogoutPage} from  '../pages/logout/logout';
import { RegisterPage } from '../pages/register/register';

import { ProductsPage } from '../pages/products/products';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { CartPage } from '../pages/cart/cart';
import { OrdersPage } from '../pages/orders/orders';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BillingPage } from '../pages/billing/billing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';


import { HttpModule } from '@angular/http';
import { CardPage } from '../pages/card/card';
import { Stripe } from '@ionic-native/stripe';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,    
    ProductsPage,
    ProductDetailsPage,
    CartPage,
    OrdersPage,
    BillingPage,
    LogoutPage,
    CardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
    apiKey: "****",
    authDomain: "****",
    databaseURL: "****",
    projectId: "****",
    storageBucket: "",
    messagingSenderId: "223792511271"
    }),                                       
    AngularFireDatabaseModule,                
    AngularFireAuthModule,
    HttpModule                     
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,    
    ProductsPage,
    ProductDetailsPage,
    CartPage,
    OrdersPage,
    BillingPage,
    LogoutPage,
    CardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
