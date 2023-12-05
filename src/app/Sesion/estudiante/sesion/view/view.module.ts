import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MostrarService } from 'src/app/Servicios/Estudiante/Item/mostrar.service'; 

import { IonicModule } from '@ionic/angular';

import { ViewPageRoutingModule } from './view-routing.module';

import { ViewPage } from './view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ViewPage],
  providers: [ MostrarService ]
})
export class ViewPageModule {}
