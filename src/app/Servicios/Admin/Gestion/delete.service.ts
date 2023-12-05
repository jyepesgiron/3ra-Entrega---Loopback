import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartado } from 'src/app/Modelos/Apartado';
import { Item } from 'src/app/Modelos/Item';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  Url = "http://localhost:3000/";

  constructor(private ruta: HttpClient) { }

  MostrarApartado(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'apartados');
  }

  EliminarApartado(id: any): Observable<any>{
    return this.ruta.delete<any[]>(this.Url+'apartados/'+id);
  }

  MostrarItem(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'items');
  }

  EliminarItem(id: any): Observable<any>{
    return this.ruta.delete<any[]>(this.Url+'items/'+id);
  }
  
}
