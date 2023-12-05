import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { DeleteService } from 'src/app/Servicios/Admin/Gestion/delete.service';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { EliminarItemComponent } from './eliminar-item.component';
import { EliminarItemRoutingModule } from './eliminar-item-routing.module';

@NgModule({
  declarations: [EliminarItemComponent],
  imports: [BrowserModule, IonicModule.forRoot(), EliminarItemRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DeleteService],
  bootstrap: [EliminarItemComponent],
})
export class EliminarItemModule {}
