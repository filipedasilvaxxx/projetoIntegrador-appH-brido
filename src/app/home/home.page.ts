import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('email') email;
  @ViewChild('senha') senha;


    constructor(public router : Router,
                public fire : AngularFireAuth ){

    }

    logar(){
      this.fire.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then(()=>{
        console.log('Logado com sucesso')
        this.router.navigate(['/list']);
      })
      .catch(()=>{
        console.log('Login Inválido');
      })
    }

  cadastrar(){

    this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.senha.value)
    .then(()=> {
      console.log("Cadastrado com sucesso!");
    }).catch(()=>{
      console.log("Usuário inválido");
    })

  }

  cadastrarLoja(){
  this.router.navigate(['/cadastro-loja']);

  }
}