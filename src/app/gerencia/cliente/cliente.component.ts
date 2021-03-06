import { Router } from '@angular/router';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  user!: string;
  clientes:any = [];
  nomes:any=[]
  estados: any = [];
  selecionado: any =[]
  status_m(num: any) {
    if (num == 0) {
      this.estados.push('bloquear');
      this.selecionado.push(false);
    } else {
      this.estados.push('liberar');
      this.selecionado.push(false);
    }
  }

  constructor(
    private authService: AutenticacaoService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.user = this.authService.user;
    console.log(this.user)
    if(!this.user){
     this.router.navigate(['home']);
     return

    }

    this.authService.getClientes().subscribe((clientes) => {

      for (let i = 8; i < clientes.length; i++) {
        this.status_m(clientes[i].status);
        this.clientes.push(clientes[i])

      }
      console.log(this.clientes)
      for (let i = 8; i < clientes.length; i++) {
        this.nomes.push(clientes[i].nome)
        // console.log(this.nomes)
      }

    });
    this.user = this.authService.user;
  }

  bloquear(){
    for (let i = 0;  i< this.estados.length; i++) {
      if(this.estados[i]=='liberar' && this.selecionado[i]==true)
        this.estados[i]='bloquear'
      else
      console.log('nao')
    }
  }
    liberar(){
      for (let i = 0;  i< this.estados.length; i++) {
        if(this.estados[i]=='bloquear' && this.selecionado[i]==true)
          this.estados[i]='liberar'
        else
        console.log('nao')
      }

    console.log(this.estados)
  }

  // Changes(event: any){
  //   let e= event.path[0].value

  //   console.log(this.clientes)
  // }

  teste(){
    alert('testado')
  }


}
