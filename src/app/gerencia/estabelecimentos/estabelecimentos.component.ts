import { HttpClient } from '@angular/common/http';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.component.html',
  styleUrls: ['./estabelecimentos.component.scss']
})
export class EstabelecimentosComponent implements OnInit {

  nome:any;
  status:any;
  pagamento:any;
  valor: any;

  constructor(
    private authService: AutenticacaoService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.authService.getEstabelecimentos().subscribe((estabelecimentos) => {
      console.log(estabelecimentos)
      this.nome = estabelecimentos[0].nome;
      this.status = estabelecimentos[0].status;
      this.pagamento = estabelecimentos[0].formasPagamento;
      this.valor = estabelecimentos[0].mediaNota
    })
  }

  consoleId(){
    console.log('oi')
  }
}
