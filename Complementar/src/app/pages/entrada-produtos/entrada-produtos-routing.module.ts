import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradaProdutosPage } from './entrada-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: EntradaProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradaProdutosPageRoutingModule {}
