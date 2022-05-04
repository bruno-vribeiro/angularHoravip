import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import {
  Component,
  OnInit,
  NgModule,
  Input,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.component.html',
  styleUrls: ['./estabelecimentos.component.scss'],
})
export class EstabelecimentosComponent implements OnInit {
  estabelecimentos = [
    {
      nome: '',
      status: '',
      formasPagamento: [],
      slogan: '',
      valor: '',
      _id: '',
    },
  ];
  estados = [{ estado: false, id:'' }];
  bloquear() {
    for (let i = 0; i < this.estados.length; i++) {
      console.log(' Bloquear:', this.estados);
    }
  }
  checkboxChange(event: any) {
    let estado = event.target.checked;
    let id = event.target.id;
    if(estado==true)
    this.estados.push({ estado: estado, id: id });
  }
  constructor(private authService: AutenticacaoService) {}
  ngOnInit(): void {
    this.authService.getEstabelecimentos().subscribe((estabelecimentos) => {
      console.log(estabelecimentos);
      this.estabelecimentos = estabelecimentos;
    });
  }
}
