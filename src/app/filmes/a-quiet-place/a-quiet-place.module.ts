import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AQuietPlacePageRoutingModule } from './a-quiet-place-routing.module';

import { AQuietPlacePage } from './a-quiet-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AQuietPlacePageRoutingModule
  ],
  declarations: [AQuietPlacePage]
})
export class AQuietPlacePageModule {}
