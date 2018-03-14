import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { notasServices } from '../../services/notas.services';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
nota= {id:null, title:null, descripcion:null}
id=null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notasServices: notasServices) {
    this.id = navParams.get('id');
    if(this.id != 0){
    notasServices.getnota(this.id)
    .valueChanges().subscribe(nota =>{
      console.log(nota)
      this.nota = nota
    });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  agregarNota(){
    if(this.id != 0){
      //estamos editando
      this.notasServices.editNota(this.nota);
      alert('Editada con exito');
      this.navCtrl.pop();
    }else{
      this.nota.id = Date.now();
      this.notasServices.createNota(this.nota);
      alert('creada con exito');
      this.navCtrl.pop();
    }
   
  }
  eliminarNota(){
    this.notasServices.eliminarNota(this.nota);
    alert('eliminada con exito');
    this.navCtrl.pop();
  }

}
