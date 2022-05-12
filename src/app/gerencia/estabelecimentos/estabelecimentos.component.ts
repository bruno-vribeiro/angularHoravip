import { Router} from '@angular/router';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import {
  Component,
  OnInit,
  NgModule,
  Input,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.component.html',
  styleUrls: ['./estabelecimentos.component.scss'],
})
export class EstabelecimentosComponent implements OnInit {
  estado1 ='oi';
  estado2 ='';
  user!: string;
  estabelecimentos = [
    {
      nome: '',
      status: '',
      formasPagamento: [],
      slogan: '',
      valor: '',
      _id: '',
    },
  ];
  estados:any = [];
  bloquear() {
    for (let i = 0; i < this.estados.length; i++) {
        console.log(' Bloquear:', this.estados);
    }

  }
  liberar() {
    for (let i = 0; i < this.estados.length; i++) {
      console.log(' Liberar:', this.estados);
    }
  }
  checkboxChange(event: any) {
    let estado = event.target.checked;
    let id = event.target.id;
    if(estado==true && id !== this.estados.id){
    this.estados.push({ estado: estado, id: id });
    }
  }
  constructor(
    private router : Router,
    private authService: AutenticacaoService) {}
  ngOnInit(): void {
    this.user = this.authService.user;
    console.log(this.user)
    if(!this.user){
     this.router.navigate(['home']);
     return

    }

    this.authService.getEstabelecimentos().subscribe((estabelecimentos) => {
      console.log(estabelecimentos);
      this.estabelecimentos = estabelecimentos;
    });

  }
}
