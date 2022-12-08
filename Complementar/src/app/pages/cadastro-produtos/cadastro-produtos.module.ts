import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroProdutosPageRoutingModule } from './cadastro-produtos-routing.module';
import { CadastroProdutosPage } from './cadastro-produtos.page';

import { SimpleMaskModule } from 'ngx-ion-simple-mask'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroProdutosPageRoutingModule,
    ReactiveFormsModule,
    SimpleMaskModule
  ],
  declarations: [CadastroProdutosPage]
})
export class CadastroProdutosPageModule {}
