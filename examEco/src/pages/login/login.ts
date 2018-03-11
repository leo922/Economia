import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'
import { SocialPage } from '../social/social';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  @ViewChild('userName') user;
  @ViewChild('password') password;
  constructor(private firebaseAuth: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
userLogin(){
this.firebaseAuth.auth.signInWithEmailAndPassword(this.user.value,this.password.value)
.then(data =>{
  console.log("Bienvenido",this.firebaseAuth.auth.currentUser);
  this.navCtrl.push(SocialPage);
}).catch(error =>{
  console.log("error al ingresar",error);
})
}
}
