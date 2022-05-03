import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciaRoutingModule } from './gerencia-routing.module';
import { GerenciaComponent } from './gerencia.component';
import { ControleComponent } from './controle/controle.component';
import { EstabelecimentosComponent } from './estabelecimentos/estabelecimentos.component';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    GerenciaComponent,
    ControleComponent,
    EstabelecimentosComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    GerenciaRoutingModule
  ],
  exports: [GerenciaComponent]
})
export class GerenciaModule { }
