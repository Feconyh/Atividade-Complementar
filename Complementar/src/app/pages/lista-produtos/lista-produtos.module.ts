import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProdutosPageRoutingModule } from './lista-produtos-routing.module';

import { ListaProdutosPage } from './lista-produtos.page';

import { SimpleMaskModule } from 'ngx-ion-simple-mask'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProdutosPageRoutingModule,
    SimpleMaskModule
  ],
  declarations: [ListaProdutosPage]
})
export class ListaProdutosPageModule {}
