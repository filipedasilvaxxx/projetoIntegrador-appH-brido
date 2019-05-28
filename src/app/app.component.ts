import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Logoff',
      url: '/logoff',
      icon: 'logoff'
    },
    {
    title: 'ListaDeClientes',
    url: '/lista-de-clientes',
    icon: 'body'
    },
    {
      title: 'Cadastro de Clientes',
      url: '/cadastrdo-de-clientes',
      icon: 'book'
    },
    {
      title: 'Lista de Mensagem',
      url: '/lista-de-mensagem',
      icon: 'book'
    },
    {
      title: 'Cadastro de Mensagem',
      url: '/cadastro-de-mensagem',
      icon: 'book'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseauth : AngularFireAuth,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    
  }
}
