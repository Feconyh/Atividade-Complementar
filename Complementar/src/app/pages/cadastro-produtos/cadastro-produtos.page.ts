import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Produto } from '../../models/produto.model';
import { Guid } from 'guid-typescript';
import { ProdutosService } from '../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.page.html',
  styleUrls: ['./cadastro-produtos.page.scss'],
})

export class CadastroProdutosPage implements OnInit {

  private produto : Produto
  public userForm : FormGroup
  public editMode = false

  name : String
  value : number
  quantity : number

  constructor(
    private dataBuilder : FormBuilder,
    private objData : ProdutosService,
    private route : ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'No',
        },
        {
          text: 'Yes',

          handler: () =>{
            this.delete();
            this.router.navigate(['/','home']);
          }
        },
      ],
    });

    await alert.present();
  }

  delete(){
    const id : string = String(this.route.snapshot.paramMap.get('id'))
    this.objData.removeData(id)
  }

  enviar(){
    if (this.userForm.valid){
      this.objData.inserir(this.userForm.value)
      this.router.navigate(['/','home']);
    }
  }

  edit(){
    const id : string = String(this.route.snapshot.paramMap.get('id'))
    if(id == 'add'){
      this.editMode = true
    }
    if(id != "add"){
      this.objData.filterDataId(id).then(array => this.produto = array)
      this.editMode = false
    }
  }

  ngOnInit() {
    this.edit()
    this.produto = {id: Guid.createEmpty(), name:"", value:0, quantity:0}

    this.userForm = this.dataBuilder.group
    ({
      id : [this.produto.id],
      name : [this.produto.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      value : [this.produto.value, Validators.compose([Validators.required])],
      quantity : [this.produto.quantity],
    })
  }

}
