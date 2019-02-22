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

  btn: any;
  @ViewChild('input') myInput: ElementRef
  fName;
  email;
  password;
  obj = {} as obj;

  pass = 0
  usrn = 0
  mail = 0

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider, public toastCtrl: ToastController, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {
   this.btn =  <HTMLInputElement>document.getElementById('btSubmit');
   this.btn.disabled=true
   console.log( this.btn);
   
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
    this.navCtrl.setRoot(LoginPage)
    window.location.reload();
  }

  getEmail(email) {

    console.log(email, this.usrn, this.pass);

    console.log(email);
    //var element = <HTMLInputElement>document.getElementById("btnExcel");
    if (email == "" && this.usrn == 1 && this.pass == 1) {
      this.btn.disabled = true;
      this.mail = 0
      console.log("disabled = true");
      console.log(this.mail);
    } else if (email == "" && this.usrn == 0 && this.pass == 1) {
      this.mail = 0
      console.log("disabled = true");
      this.btn.disabled = true;
      console.log(this.mail);
    } else if (email == "" && this.usrn == 1 && this.pass == 0) {
      this.mail = 0
      console.log("disabled = true");
      console.log(this.mail);
    } else if (email != "" && this.usrn == 1 && this.pass == 1) {
      this.mail = 1
      console.log("disabled = false");
      this.btn.disabled = false;
      console.log(this.mail);
    } else if (email != "" && this.usrn == 1 && this.pass == 0) {
      this.mail = 1
      this.btn.disabled = true;
      console.log("disabled = true");
      console.log(this.mail);
    } else if (email != "" && this.usrn == 0 && this.pass == 1) {
      this.mail = 1
      this.btn.disabled = true;
      console.log("disabled = true");
      console.log(this.mail);
    } else if (email != "" && this.usrn == 0 && this.pass == 0) {
      this.mail = 1
      this.btn.disabled = true;
      console.log("disabled = true");
      console.log(this.mail);
    } else {
      console.log("disabled = true @ else email");
      this.btn.disabled = true;
    }
  }
  getPassword(password) {
    console.log(password);
    // var element = <HTMLInputElement>document.getElementById("btnExcel");
    console.log(this.mail, this.usrn, password);
    if (password == "" && this.usrn == 1 && this.mail == 1) {
      this.btn.disabled = true;
      this.pass = 0
      console.log("disabled = true");
    } else if (password == "" && this.usrn == 0 && this.mail == 1) {
      this.pass = 0
      this.btn.disabled = true;
      console.log("disabled = true");
    } else if (password == "" && this.usrn == 1 && this.mail == 0) {
      this.pass = 0
      this.btn.disabled = true;
      console.log("disabled = true");
    } else if (password != "" && this.usrn == 1 && this.mail == 1) {
      this.pass = 1
      this.btn.disabled = false;
      console.log("disabled = false");
    } else if (password != "" && this.usrn == 1 && this.mail == 0) {
      this.pass = 1
      this.btn.disabled = true;
      console.log("disabled = true");
    } else if (password != "" && this.usrn == 0 && this.mail == 1) {
      this.pass = 1
      this.btn.disabled = true;
      console.log("disabled = true");
    } else if (password != "" && this.usrn == 0 && this.mail == 0) {
      this.pass = 1
      this.btn.disabled = true;
      console.log("disabled = true");
    } else {
      console.log("disabled = true @ else password");
      this.btn.disabled = true;
    }

  }

  getUsername(username) {
    //var element = <HTMLInputElement>document.getElementById("btnExcel");
    //puppies = reg and kittens = log
    console.log(this.mail, username, this.pass);
    if (username == "" && this.pass == 1 && this.mail == 1) {
      this.btn.disabled = true;
      this.usrn = 0
      console.log("disabled = true");
      console.log(this.usrn);
    } else if (username == "" && this.pass == 0 && this.mail == 1) {
      this.usrn = 0
      this.btn.disabled = true;
      console.log("disabled = true");
      console.log(this.usrn);
    } else if (username == "" && this.pass == 1 && this.mail == 0) {
      this.usrn = 0
      this.btn.disabled = true;
      console.log("disabled = true");
      console.log(this.usrn);
    } else if (username != "" && this.pass == 1 && this.mail == 1) {
      this.usrn = 1
      this.btn.disabled = false;
      console.log("disabled = false");
      console.log(this.usrn);
    } else if (username != "" && this.pass == 1 && this.mail == 0) {
      this.usrn = 1
      this.btn.disabled = true;
      console.log("disabled = true");
      console.log(this.usrn);
    } else if (username != "" && this.pass == 0 && this.mail == 1) {
      this.usrn = 1
      this.btn.disabled = true;
      console.log("disabled = true");
      console.log(this.usrn);
    } else if (username != "" && this.pass == 0 && this.mail == 0) {
      this.usrn = 1
      this.btn.disabled = true;
      console.log("disabled = true");
      console.log(this.usrn);
    } else {
      console.log("disabled = true @ else username");
      this.btn.disabled = true;
    }


  }
}