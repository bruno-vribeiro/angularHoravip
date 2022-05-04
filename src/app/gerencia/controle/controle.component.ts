import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.scss'],
})
export class ControleComponent implements OnInit {
  user!: string;
  logos:     Object[] = [];
  nomes:     Object[] = [];
  descricao: Object[] = [];
  constructor(
    private http: HttpClient,
    private authService: AutenticacaoService
  ) {}

  ngOnInit(): void {
    this.authService.getEstabelecimentos().subscribe((estabelecimentos) => {
      console.log(estabelecimentos)
      this.logos.push(estabelecimentos[0].logo);
      this.logos.push(estabelecimentos[1].logo);
      this.logos.push(estabelecimentos[2].logo);
      this.logos.push(estabelecimentos[3].logo);

      this.nomes.push(estabelecimentos[0].nome);
      this.nomes.push(estabelecimentos[1].nome);
      this.nomes.push(estabelecimentos[2].nome);
      this.nomes.push(estabelecimentos[3].nome);

      this.descricao.push(estabelecimentos[0].servicos[0].descricao);
      // this.descricao.push(estabelecimentos[1].servicos[0].descricao);
      // this.descricao.push(estabelecimentos[1].servicos[1].descricao);
      // this.descricao.push(estabelecimentos[2].servicos[2].descricao);
      // this.descricao.push(estabelecimentos[3].servicos[3].descricao);
      // console.log(this.descricao)
    });
    this.user = this.authService.user;
    
  }
}
