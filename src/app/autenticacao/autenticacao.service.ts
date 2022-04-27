import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  token: any;


  private getOptions(){
    let header = new HttpHeaders;
     let headers = header.set('Autrorization', 'Bearer '+ this.token);
     const options = {headers};
     return options;
   }
  constructor( private httpClient: HttpClient) { }

  autenticar(email: string, senha: string):Observable<any>{
    return this.httpClient.post(
    'https://api.horavip.exodus.eti.br/session/authenticate',
     {email: email, senha:senha}
     ).pipe(
       tap((response: any) =>{
         console.log(response.token);
         this.token = response.token;



       })
     )
  }

  getEstabelecimetnos():Observable<any>{
    console.log(this.getOptions())
    return this.httpClient.get(
      'https://api.horavip.exodus.eti.br/estabelecimento/todos',this.getOptions()
    );

  // listar(){
  //   return this.httpClient.get<Object[]>('https://api.horavip.exodus.eti.br/estabelecimento').subscribe(estabelecimento =>{
  //     console.log(estabelecimento)
  //     this.estabelecimento = estabelecimento
  //   })
  // }
}}
