import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditService } from 'src/app/Servicios/Admin/Gestion/edit.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { EditarItemComponent } from './editar-item.component';
import { EditarItemRoutingModule } from './editar-item-routing.module';

@NgModule({
  declarations: [EditarItemComponent],
  imports: [BrowserModule, IonicModule.forRoot(), EditarItemRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, EditService],
  bootstrap: [EditarItemComponent],
})
export class EditarItemModule {}
