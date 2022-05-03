import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  token: any;

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
    this.token = retorno.token;
    return retorno;
  }

  getEstabelecimentos(): Observable<any> {
    return this.httpClient.get(
      'https://api.horavip.exodus.eti.br/estabelecimento/todos',
      this.getOptions()

    );
    

  }
}
