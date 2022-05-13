import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  user!: string;
  estabelecimentos = [
    {
      nome: '',
      status: '',
      formasPagamento: [],
      slogan: '',
      valor: '',
    },
  ];
  estados: any = [];
  status_m(num: any) {
    if (num == 0) {
      this.estados.push('bloquear');
    } else {
      this.estados.push('liberar');
    }
  }

  constructor(private authService: AutenticacaoService) {}

  ngOnInit(): void {
    this.authService.getEstabelecimentos().subscribe((estabelecimentos) => {
      this.estabelecimentos = estabelecimentos;
      for (let i = 0; i < estabelecimentos.length; i++) {
        this.status_m(estabelecimentos[i].status);
      }
    });
    this.user = this.authService.user;
  }
}
