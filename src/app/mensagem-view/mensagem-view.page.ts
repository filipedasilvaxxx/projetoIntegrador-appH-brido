import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { Mensagem } from '../model/mensagem';

@Component({
  selector: 'app-mensagem-view',
  templateUrl: './mensagem-view.page.html',
  styleUrls: ['./mensagem-view.page.scss'],
})
export class MensagemViewPage implements OnInit {

  mensagem: Mensagem = new Mensagem();
  id: string;
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true }

  formGroup : FormGroup;

  constructor(public activatedRoute: ActivatedRoute, 
              public formBuilder : FormBuilder,
              public router : Router,
              public loadingController: LoadingController,
              public toastController: ToastController ) {
   this.id = this.activatedRoute.snapshot.paramMap.get('mensagem');
    this.form(); 
}

  form(){
    this.formGroup = this.formBuilder.group({
      titulo: [this.mensagem.titulo],
      texto: [this.mensagem.texto],
      data: [this.mensagem.data],
    });
  }

  ngOnInit() {
    this.obterMensagem();
  }

  obterMensagem() {

    var ref = firebase.firestore().collection("mensagem").doc(this.id);

    ref.get().then(doc => {
      this.mensagem.setDados(doc.data());
      this.form();
    }).catch(function (error) {
      console.log("Error getting document:", error);
    

    });
  }

  atualizar(){
    this.loading();

    let ref = this.firestore.collection('mensagem')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() =>{
        console.log('Atualizado com sucesso');
        this.router.navigate(['/lista-de-mensagem'])
        this.loadingController.dismiss();
        this.toast('Atualizado com sucesso');
      }).catch(()=>{
        console.log('Erro ao Atualizar');
        this.loadingController.dismiss();
        this.toast('Erro ao atualizar');
      })
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }

  async toast(msg : string) {
    const toast = await this.toastController.create({
      message: 'Atualizado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

}
