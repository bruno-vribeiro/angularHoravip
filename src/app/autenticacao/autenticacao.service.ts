import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  token: any;
  user!: string;

  private getOptions() {
    let header = new HttpHeaders();
    let headers = header.set('Authorization', 'Bearer ' + this.token);
    const options = { headers };
    return options;
  }
  constructor(private httpClient: HttpClient) {}

  async autenticar(email: string, senha: string) {
    let retorno = await firstValueFrom(
      this.httpClient.post<any>(
        'https://api.horavip.exodus.eti.br/session/authenticate',
        { email: email, senha: senha }
      )
    );
    console.log(retorno);
    console.log(retorno.user.nome)
    this.token = retorno.token;
    this.user = retorno.user.nome;
    return retorno;
  }

  getEstabelecimentos(): Observable<any> {
    return this.httpClient.get(
      'https://api.horavip.exodus.eti.br/estabelecimento/todos',
      this.getOptions()

    );
  }
  getClientes(): Observable<any> {
    return this.httpClient.get(
      'https://api.horavip.exodus.eti.br/session/list-users',
      this.getOptions()

    );
  }
  estabelecimentos(){
    return this.httpClient.get(
      'https://api.horavip.exodus.eti.br/estabelecimento/'
    )
    }
  }

