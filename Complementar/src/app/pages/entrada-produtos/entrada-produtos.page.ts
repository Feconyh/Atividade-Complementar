import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-entrada-produtos',
  templateUrl: './entrada-produtos.page.html',
  styleUrls: ['./entrada-produtos.page.scss'],
})
export class EntradaProdutosPage implements OnInit {

  public arrayProduto : any
  public pro : any

  public userForm : FormGroup
  public quantidade : number
  
  constructor(
    private objData : ProdutosService,
    private route : ActivatedRoute,
  ) {  }

  novo(){
    const id : string = String(this.route.snapshot.paramMap.get('id'))
    console.log(this.arrayProduto)
    this.objData.atualizarContatoId(id, this.arrayProduto.quantity)
  }

  ngOnInit() {

    this.objData.listarTodos().then(arrayProduto => {this.arrayProduto = arrayProduto})
  }


}
