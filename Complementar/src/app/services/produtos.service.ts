import { Injectable } from '@angular/core';

import { Produto } from '../models/produto.model';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  constructor(
    private storage : Storage
  ) { }

  inserir(argumento : Produto){
  
    argumento.id = Guid.create()

    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  async listarTodos() {
    let arrayProduto: Produto [] = [];

    await this.storage.forEach((value: string) =>
    {const produto: Produto = JSON.parse(value); arrayProduto.push(produto)})
    
    return arrayProduto;
  }
  
  async filterDataId(id : string){
    return JSON.parse( await this.storage.get(id))
  }
  
  removeData(id : string){
    this.storage.remove(id)
  }

  atualizarContatoId(id: string, dadosRecebidos : Produto){
    dadosRecebidos.id = Guid.parse(id)
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }
}
