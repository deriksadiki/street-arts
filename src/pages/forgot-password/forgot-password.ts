import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { obj } from '../../app/class';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var firebase;

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  obj = {} as obj;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController,public art: StreetartzProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  forgotpassword(email) {
    this.art.forgotpassword(email).then(() => {
      // this.navCtrl.setRoot(SignupPage);
    }, (error)=>{
      // alert(error)

      const alert = this.alertCtrl.create({
        title: "Oh no! ",
        subTitle: "Please enter your email and password to login.",
        buttons: ['OK'],
        cssClass: "myAlert",
      });
      alert.present();
    })     
    // this.obj.email ="";    
  }

}

