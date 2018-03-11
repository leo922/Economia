import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  
})

export class RegisterPage {
  @ViewChild('userName') user;
  @ViewChild('password') password;
  constructor(public firebaseauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  userRegister(){
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.user.value,this.password.value)
    .then(data=>{
      console.log("Usuario registrado con exito",data)
    }).catch(error =>{
      console.log("Error registrando usuario",error);
    });
    console.log(this.user.value);
  }

}
