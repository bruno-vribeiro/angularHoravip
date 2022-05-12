import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciaRoutingModule } from './gerencia-routing.module';
import { GerenciaComponent } from './gerencia.component';
import { ControleComponent } from './controle/controle.component';
import { EstabelecimentosComponent } from './estabelecimentos/estabelecimentos.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { AgendamentoComponent } from './agendamento/agendamento.component';


@NgModule({
  declarations: [
    GerenciaComponent,
    ControleComponent,
    EstabelecimentosComponent,
    ClienteComponent,
    AgendamentoComponent
  ],
  imports: [
    CommonModule,
    GerenciaRoutingModule,
    FormsModule,

  ],
  exports: [GerenciaComponent]

})
export class GerenciaModule { }
