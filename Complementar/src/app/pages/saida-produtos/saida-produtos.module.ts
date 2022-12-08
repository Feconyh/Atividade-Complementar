import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaidaProdutosPageRoutingModule } from './saida-produtos-routing.module';

import { SaidaProdutosPage } from './saida-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaidaProdutosPageRoutingModule
  ],
  declarations: [SaidaProdutosPage]
})
export class SaidaProdutosPageModule {}
