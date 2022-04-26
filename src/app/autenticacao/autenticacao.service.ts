import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  estabelecimento: any;
  constructor( private httpClient: HttpClient) { }

  autenticar(email: string, senha: string):Observable<any>{
    return this.httpClient.post(
    'https://api.horavip.exodus.eti.br/session/authenticate',
     {email: email, senha:senha}
     );
  }

  listar(){
    return this.httpClient.get<Object[]>('https://api.horavip.exodus.eti.br/estabelecimento').subscribe(estabelecimento =>{
      console.log(estabelecimento)
      this.estabelecimento = estabelecimento
    })
  }
}
