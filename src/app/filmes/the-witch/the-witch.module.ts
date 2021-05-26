import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheWitchPageRoutingModule } from './the-witch-routing.module';

import { TheWitchPage } from './the-witch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheWitchPageRoutingModule
  ],
  declarations: [TheWitchPage]
})
export class TheWitchPageModule {}
