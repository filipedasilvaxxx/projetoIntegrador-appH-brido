import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-loja',
  templateUrl: './cadastro-loja.page.html',
  styleUrls: ['./cadastro-loja.page.scss'],
})
export class CadastroLojaPage implements OnInit {

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
      cnpj: [''],
      endereco: [''],
    })
   }

  ngOnInit() {
  }

  cadastrar(){
    this.loading();

    let ref = this.firestore.collection('loja')
    ref.add(this.formGroup.value)
      .then(() =>{
        console.log('Cadastrado com sucesso');
        this.router.navigate(['/loja-perfil']);
        this.loadingController.dismiss();
        this.toast('Cadastrado com sucesso');
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

