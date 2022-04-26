import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

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

  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(()=>{
      this.router.navigate(['./gerencia/controle']);

    },
      (error)=>{
        alert('Usuario invalido');
        console.log(error);
        console.log(this.usuario, this.senha);
        console.log(this.authService.listar());


      }
    );
  }

}
