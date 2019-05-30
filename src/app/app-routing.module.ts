import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './service/auth2.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule', 
    canActivate: [Auth2Guard] 
  },
  { path: 'lista-de-clientes', 
  loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule',
  },
  { path: 'cadastrdo-de-clientes', 
  loadChildren: './cadastrdo-de-clientes/cadastrdo-de-clientes.module#CadastrdoDeClientesPageModule'
 },
  { path: 'cliente-view', 
  loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule' },
  
  { path: 'lista-de-mensagem', 
  loadChildren: './lista-de-mensagem/lista-de-mensagem.module#ListaDeMensagemPageModule' },
  
  { path: 'cadastro-de-mensagem', 
  loadChildren: './cadastro-de-mensagem/cadastro-de-mensagem.module#CadastroDeMensagemPageModule' },
  
  { path: 'mensagem-view', 
  loadChildren: './mensagem-view/mensagem-view.module#MensagemViewPageModule' },  { path: 'cadastro-loja', loadChildren: './cadastro-loja/cadastro-loja.module#CadastroLojaPageModule' }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
