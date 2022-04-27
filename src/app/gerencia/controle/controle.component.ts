import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.scss']
})
export class ControleComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private authService: AutenticacaoService
    ) { }

  ngOnInit(): void {
    this.authService.getEstabelecimetnos();


  }

}
