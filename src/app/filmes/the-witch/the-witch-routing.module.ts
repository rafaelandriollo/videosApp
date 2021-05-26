import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheWitchPage } from './the-witch.page';

const routes: Routes = [
  {
    path: '',
    component: TheWitchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheWitchPageRoutingModule {}
