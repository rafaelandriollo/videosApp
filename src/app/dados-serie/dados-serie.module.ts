import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosSeriePageRoutingModule } from './dados-serie-routing.module';

import { DadosSeriePage } from './dados-serie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosSeriePageRoutingModule
  ],
  declarations: [DadosSeriePage]
})
export class DadosSeriePageModule {}
