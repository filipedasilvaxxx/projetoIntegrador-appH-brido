import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrdo-de-clientes',
  templateUrl: './cadastrdo-de-clientes.page.html',
  styleUrls: ['./cadastrdo-de-clientes.page.scss'],
})
export class CadastrdoDeClientesPage implements OnInit {

  
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};
  formGroup : FormGroup;

  constructor(public formBuilder : FormBuilder,
              public router : Router,
              public loadingController: LoadingController,
              public toastController: ToastController) {
    
    this.formGroup = this.formBuilder.group({
      nome: [''],
      telefone: [''],
      email: [''],
    })
   }

  ngOnInit() {
  }

  cadastrar(){
    this.loading();

    let ref = this.firestore.collection('cliente')
    ref.add(this.formGroup.value)
      .then(() =>{
        console.log('Cadastrado com sucesso');
        this.router.navigate(['/lista-de-clientes']);
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

