import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MostrarService } from 'src/app/Servicios/Estudiante/Item/mostrar.service';
import { IngresarService } from 'src/app/Servicios/Estudiante/Item/ingresar.service';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule,
    HttpClientModule
  ],
  declarations: [CreatePage],
  providers: [ MostrarService, IngresarService ]
})
export class CreatePageModule {}
