import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControleComponent } from './controle/controle.component';
import { EstabelecimentosComponent } from './estabelecimentos/estabelecimentos.component';
import { GerenciaComponent } from './gerencia.component';

const routes: Routes = [
  {
    path: '',
    component:GerenciaComponent,
    children: [
      {
        path: 'controle',
        component:ControleComponent
      },
      {
        path: 'estabelecimentos',
        component:EstabelecimentosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciaRoutingModule { }
