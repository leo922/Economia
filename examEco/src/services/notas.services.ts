import {Injectable} from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class notasServices{
    constructor(public afDB:AngularFireDatabase){

    }
    notas= [];
      public getnotas(){
          return this.afDB.list('notas/');
      }
      public getnota(id){
         // return this.notas.filter(function(e,i){return e.id == id})[0] || {id:null,title:null,descripcion:null};
         return this.afDB.object('notas/'+id);
      }
      public createNota(nota){
       this.afDB.database.ref('notas/'+nota.id).set(nota);
       // this.notas.push(nota);
      }
      public editNota(nota){
       /* for(let i=0;i<this.notas.length;i++){
            if(this.notas[i]== nota.id){
                this.notas[i]=nota;
            }

        }*/
        this.afDB.database.ref('notas/'+nota.id).set(nota);
      }
      public eliminarNota(nota){
        this.afDB.database.ref('notas/'+nota.id).remove();
     /*   for(let i=0;i<this.notas.length;i++){
            if(this.notas[i]== nota.id){
                this.notas.splice(i,1);
            }
        }*/
      }
}