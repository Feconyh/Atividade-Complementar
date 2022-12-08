import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaidaProdutosPage } from './saida-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: SaidaProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaidaProdutosPageRoutingModule {}
