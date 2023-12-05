import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SesionPageModule } from './sesion/sesion.module';
import { RegistroModule } from './registro/registro.module';
import { RegistroService } from 'src/app/Servicios/Estudiante/AnteProyecto/registro.service';

import { IonicModule } from '@ionic/angular';

import { EstudiantePageRoutingModule } from './estudiante-routing.module';

import { EstudiantePage } from './estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiantePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [EstudiantePage],
  providers: [ RegistroService ]
})
export class EstudiantePageModule {}
