import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { obj } from '../../app/class';
import { ToastController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { LoadingController } from 'ionic-angular';
import { EulaPage } from '../eula/eula';
import { NgForm } from '@angular/forms';




@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  @ViewChild('input') myInput: ElementRef
  fName;
  email;
  password;
  obj = {} as obj;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider, public toastCtrl: ToastController, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signUp(fName, email, password) {
    if (
      this.fName == undefined,
      email == undefined || email == null,
      password == undefined || password == null) {
      const alert = this.alertCtrl.create({
        // title: "Oops! ",
        subTitle: "Please enter your name,email and password to login.",
        buttons: ['OK']
      });
      alert.present();
    }
    else if (email == undefined || email == null) {
      const alert = this.alertCtrl.create({
        // title: "No Email",
        subTitle: "It looks like you didn't enter your email address.",
        buttons: ['OK']
      });
      alert.present();
    }
    else if (password == undefined || password == null) {
      const alert = this.alertCtrl.create({
        // title: "No Password",
        subTitle: "You have not entered your password. Please enter your password",
        buttons: ['OK']
      });
      alert.present();
    }
    else if (name == undefined) {
      const alert = this.alertCtrl.create({
        // title: "No Name",
        subTitle: "It looks like you didn't enter your Name.",
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      this.art.register(email, password, fName).then(() => {
        const alert = this.alertCtrl.create({
          // title: "No Name",
          subTitle: "We have sent you a verification mail, Please activate your account with the link in the mail",
          cssClass: 'myAlert',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.art.sendVerificationLink();
                this.navCtrl.push(LoginPage)
              }
            },
          ]
        });
        alert.present();

      }, (error) => {
        console.log(error.message);
      })
    }
  }
  dismiss() {
    this.navCtrl.push(LoginPage)
  }
}