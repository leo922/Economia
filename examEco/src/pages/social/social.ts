import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { notasServices } from '../../services/notas.services';
import { DetailsPage } from '../details/details';



/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {
  notas = [];
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase,
     public notasServices:notasServices) {
       notasServices.getnotas()
        .valueChanges().subscribe(notas =>{
          console.log(notas)
          this.notas=notas;
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialPage');
  }

  public goToDetails(id){
    this.navCtrl.push(DetailsPage,{id:id});
  }
  public getNotas(){

  }
  public createNota(){
    this.navCtrl.push(DetailsPage,{id:0});
    
  }
  public editNota(){

  }
  public deleteNota(){

  }


}
