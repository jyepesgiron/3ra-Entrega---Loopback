import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartado } from 'src/app/Modelos/Apartado'; 
import { Item } from 'src/app/Modelos/Item';

@Injectable({
  providedIn: 'root'
})
export class ActuallService {
 
  Url = "http://localhost:3000/";

  constructor(private ruta: HttpClient) { }

  MostrarApartado(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'apartados');
  }

  EditarApartado(id: any, apartado: Apartado): Observable<any>{
    return this.ruta.put<any[]>(this.Url+'apartados/'+id, apartado);
  }

  MostrarItem(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'items');
  }

  EditarItem(id: any, item: Item): Observable<any>{
    return this.ruta.put<any[]>(this.Url+'items/'+id, item);
  }

}
