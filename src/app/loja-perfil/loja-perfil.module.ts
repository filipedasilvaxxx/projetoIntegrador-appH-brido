import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LojaPerfilPage } from './loja-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: LojaPerfilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LojaPerfilPage]
})
export class LojaPerfilPageModule {}
