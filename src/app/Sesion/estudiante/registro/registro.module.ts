import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RegistroService } from 'src/app/Servicios/Estudiante/AnteProyecto/registro.service';

import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';

@NgModule({
  declarations: [RegistroComponent],
  imports: [BrowserModule, IonicModule.forRoot(), RegistroRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, RegistroService],
  bootstrap: [RegistroComponent],
})
export class RegistroModule {}
