import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cadastro-de-mensagem',
  templateUrl: './cadastro-de-mensagem.page.html',
  styleUrls: ['./cadastro-de-mensagem.page.scss'],
})
export class CadastroDeMensagemPage implements OnInit {

  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};
  formGroup : FormGroup;
  
  constructor(public formBuilder : FormBuilder,
              public router : Router,
              public loadingController: LoadingController,
              public toastController: ToastController) { 
                this.formGroup = this.formBuilder.group({
                  titulo: [''],
                  texto: [''],
                  data: [''],
                })                
}

  ngOnInit() {
  }

  cadastrar(){
    this.loading();

    let ref = this.firestore.collection('mensagem')
    ref.add(this.formGroup.value)
      .then(() =>{
        console.log('Cadastrado com sucesso');
        this.router.navigate(['/lista-de-mensagem']);
        this.loadingController.dismiss();
        this.toast('Atualizado com sucesso');
      }).catch(()=>{
        console.log('Erro ao cadastrar');
        this.loadingController.dismiss();
        this.toast('Erro ao cadastrar');
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
      message: 'Cadastrado com sucesso!',
      duration: 2000
    });
    toast.present();
  }
}
