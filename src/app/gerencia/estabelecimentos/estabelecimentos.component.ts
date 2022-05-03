
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit, NgModule } from '@angular/core';
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
      valor:""
    }
  ]

  constructor(
    private authService: AutenticacaoService) { }

  ngOnInit(): void {
    this.authService.getEstabelecimentos().subscribe((estabelecimentos) => {
      console.log(estabelecimentos);
      this.estabelecimentos = estabelecimentos;


    })
  }



}
