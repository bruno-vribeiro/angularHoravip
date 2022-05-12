import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
=======
>>>>>>> e7190aaa2f16cf892ace09631d9294c3a4d02cbd

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
<<<<<<< HEAD
  user!: string;
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
    private authService: AutenticacaoService
  ) { }

  ngOnInit(): void {
    this.authService.getEstabelecimentos().subscribe((estabelecimentos) => {
      console.log(estabelecimentos);
      this.estabelecimentos = estabelecimentos;


    });
    this.user = this.authService.user;
=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> e7190aaa2f16cf892ace09631d9294c3a4d02cbd
  }

}
