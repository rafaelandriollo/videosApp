import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AQuietPlacePage } from './a-quiet-place.page';

const routes: Routes = [
  {
    path: '',
    component: AQuietPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AQuietPlacePageRoutingModule {}
