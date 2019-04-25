import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrdoDeClientesPage } from './cadastrdo-de-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrdoDeClientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrdoDeClientesPage]
})
export class CadastrdoDeClientesPageModule {}
