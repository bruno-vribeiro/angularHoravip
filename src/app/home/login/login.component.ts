import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { Subscribable } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  usuario="";
  senha="";

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  async login(){
    let retorno = await this.authService.autenticar(this.usuario, this.senha)
    if(!retorno.token){
      alert('Usuario invalido');
        console.log(retorno);
    }
    else{
      this.router.navigate(['./gerencia/controle']);
    }
    // .subscribe(()=>{
      // this.router.navigate(['./gerencia/controle']);
    // },
    //   (error)=>{
    //     alert('Usuario invalido');
    //     console.log(error);
    //     console.log(this.usuario, this.senha);
      // }
    // );
  }

}
