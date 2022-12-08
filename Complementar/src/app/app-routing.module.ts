import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-produtos/:id',
    loadChildren: () => import('./pages/cadastro-produtos/cadastro-produtos.module').then( m => m.CadastroProdutosPageModule)
  },
  {
    path: 'entrada-produtos',
    loadChildren: () => import('./pages/entrada-produtos/entrada-produtos.module').then( m => m.EntradaProdutosPageModule)
  },
  {
    path: 'saida-produtos',
    loadChildren: () => import('./pages/saida-produtos/saida-produtos.module').then( m => m.SaidaProdutosPageModule)
  },
  {
    path: 'lista-produtos/:id',
    loadChildren: () => import('./pages/lista-produtos/lista-produtos.module').then( m => m.ListaProdutosPageModule)
  },
  {
    path: 'detalhes-produtos',
    loadChildren: () => import('./pages/detalhes-produtos/detalhes-produtos.module').then( m => m.DetalhesProdutosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
