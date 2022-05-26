import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
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
    private authService: AutenticacaoService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    console.log(this.user)
    if(!this.user){
     this.router.navigate(['home']);
     return

    }

    this.authService.getEstabelecimentos().subscribe((estabelecimentos) => {
      console.log(estabelecimentos);
      this.estabelecimentos = estabelecimentos;


    });
    this.user = this.authService.user;
  }

}
