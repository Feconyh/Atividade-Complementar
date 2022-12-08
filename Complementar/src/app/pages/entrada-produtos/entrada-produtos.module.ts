import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaProdutosPageRoutingModule } from './entrada-produtos-routing.module';

import { EntradaProdutosPage } from './entrada-produtos.page';

import { SimpleMaskModule } from 'ngx-ion-simple-mask'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaProdutosPageRoutingModule,
    ReactiveFormsModule,
    SimpleMaskModule
  ],
  declarations: [EntradaProdutosPage]
})
export class EntradaProdutosPageModule {}
