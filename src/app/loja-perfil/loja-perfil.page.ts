import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Loja } from '../model/loja';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-loja-perfil',
  templateUrl: './loja-perfil.page.html',
  styleUrls: ['./loja-perfil.page.scss'],
})
export class LojaPerfilPage implements OnInit {

  lojaPerfil : Loja[] = [];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};


  constructor(public router : Router,
    public loadingController: LoadingController,
    public toastController: ToastController) { }

 
  ngOnInit() {
    this.getList();
  }

  viewcliente(obj : Loja){
    this.router.navigate(['/loja-view', {loja: obj.id}]);
  }

  getList() {
    this.loading();

    var ref = firebase.firestore().collection("Loja");
    ref.get().then(query => {
        query.forEach(doc => {
            let c = new Loja();
            c.setDados(doc.data());
            c.id = doc.id;
            this.lojaPerfil.push(c);
        });
       
        this.loadingController.dismiss();
    });

  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }
}
