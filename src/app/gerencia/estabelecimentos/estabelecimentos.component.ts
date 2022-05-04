
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit, NgModule, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.component.html',
  styleUrls: ['./estabelecimentos.component.scss']
})
export class EstabelecimentosComponent implements OnInit {

  estabelecimentos=[
    {
      nome:"",
      status:"",
      formasPagamento:[],
      slogan:"",
      valor:"",
      _id:""
    }
  ]
 estado: boolean = false;
 id:string = "";
 bloquear(estado: boolean,id: string){
   estado = this.estado;
   id = this.id
  console.log(estado,id);
 }

 checkboxChange(event:any){
  this.estado=event.target.checked
  this.id=(event.target.id);
  this.bloquear(this.estado,this.id)


 }



  constructor(
    private authService: AutenticacaoService) {
    }

  ngOnInit(): void {
    this.authService.getEstabelecimentos().subscribe((estabelecimentos) => {
      console.log(estabelecimentos);


      this.estabelecimentos = estabelecimentos;



    })





  }





}
