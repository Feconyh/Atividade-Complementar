import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit {

  public arrayProduto : any

  constructor(
    private objData : ProdutosService,
  ) {  }
  
  ngOnInit() {

    this.objData.listarTodos().then(arrayProduto => {this.arrayProduto = arrayProduto})
  }

}