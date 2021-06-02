import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosSeriePage } from './dados-serie.page';

const routes: Routes = [
  {
    path: '',
    component: DadosSeriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosSeriePageRoutingModule {}
