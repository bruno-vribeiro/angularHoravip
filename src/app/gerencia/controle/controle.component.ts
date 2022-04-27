import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.scss']
})
export class ControleComponent implements OnInit {
 nome:any;
  constructor(
    private http: HttpClient,
    private authService: AutenticacaoService
    ) { }

  ngOnInit(): void {
    this.nome = this.authService.getEstabelecimetnos().pipe(
      tap(data => JSON.stringify(data)),


    );
    console.log(this.nome);


}

}
