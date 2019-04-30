import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Mensagem } from '../model/mensagem';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lista-de-mensagem',
  templateUrl: './lista-de-mensagem.page.html',
  styleUrls: ['./lista-de-mensagem.page.scss'],
})
export class ListaDeMensagemPage implements OnInit {

  listaDeMensagem : Mensagem[] = [];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  constructor(public router : Router,
              public loadingController: LoadingController,
              public toastController: ToastController) { }

  ngOnInit() {
    this.getList();
  }

  viewMensagem(obj : Mensagem){
    this.router.navigate(['/mensagem-view', {mensagem: obj.id}]);
  }

  getList() {
    this.loading();

    var ref = firebase.firestore().collection("mensagem");
    ref.get().then(query => {
        query.forEach(doc => {
            let c = new Mensagem();
            c.setDados(doc.data());
            c.id = doc.id;
            this.listaDeMensagem.push(c);
        });
       
        this.loadingController.dismiss();
    });

  }

  remove(obj : Mensagem){
    var ref = firebase.firestore().collection("mensagem");
    ref.doc(obj.id).delete()
      .then(()=>{
        this.listaDeMensagem = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
      })
  }

  
    async loading() {
      const loading = await this.loadingController.create({
        message: 'Carregando',
        duration: 2000
      });
      await loading.present();
    }
    
}
