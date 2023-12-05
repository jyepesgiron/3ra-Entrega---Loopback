import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/Modelos/Item';

@Injectable({
  providedIn: 'root'
})
export class IngresarService {

  Url = "http://localhost:3000";

  constructor(private ruta: HttpClient) { }

  Ingresar(dato: Item): Observable<any>{
    return this.ruta.post<any[]>(this.Url+'/items', dato);
  }

  Mostrar(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'/items');
  }

  MostrarAnteproyecto(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'/ante-proyectos');
  }

  Actualizar(id: string, dato: Item): Observable<any>{
    return this.ruta.put<any[]>(this.Url+'/items/'+id, dato);
  }

  MostrarApartado(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'/apartados');
  }
}
