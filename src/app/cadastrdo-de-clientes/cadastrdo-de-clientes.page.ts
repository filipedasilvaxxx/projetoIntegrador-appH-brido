import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
              public router : Router) {
    
    this.formGroup = this.formBuilder.group({
      nome : [''],
      telefone : [''],
      email : [''],
    })
   }

  ngOnInit() {
  }

  cadastrar(){
    let ref = this.firestore.collection('cliente')
    ref.add(this.formGroup.value)
      .then(() =>{
        console.log('Cadastrado com sucesso');
        this.router.navigate(['/list']);
      }).catch(()=>{
        console.log('Erro ao cadastrar');
      })
  }
}
