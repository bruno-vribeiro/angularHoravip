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
  estadosId:any=[];
  estados: any=[];
  selecionado:any=[];
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

  bloquear() {
    for (let i = 0; i < this.estadosId.length; i++) {
        console.log(' Bloquear:', this.estadosId);
    }
    for (let i = 0;  i< this.estados.length; i++) {
      if(this.estados[i]=='liberar' && this.selecionado[i]==true)
        this.estados[i]='bloquear'
      else
      console.log('nao')
    }

  }
  liberar() {
    for (let i = 0; i < this.estadosId.length; i++) {
      console.log(' Liberar:', this.estadosId);
    }
    for (let i = 0;  i< this.estados.length; i++) {
      if(this.estados[i]=='bloquear' && this.selecionado[i]==true)
        this.estados[i]='liberar'
      else
      console.log('nao')
    }

  console.log(this.estados)

  }
  checkboxChange(event: any) {
    let estado = event.target.checked;
    let id = event.target.id;
    if(estado==true && id !== this.estados.id){
    this.estadosId.push({ estado: estado, id: id });
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
      for (let i = 0; i < estabelecimentos.length; i++) {
        this.status_m(estabelecimentos[i].status)

      }
    });

    this.authService.estabelecimentos().subscribe((response)=>{
      console.log(response)
    })

  }

  status_m(num: any) {
    if (num == 0) {
      this.estados.push('bloquear');
      this.selecionado.push(false);
    } else {
      this.estados.push('liberar');
      this.selecionado.push(false);
    }
  }

  teste(){
    alert('testado')
  }
}
