import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnteProyecto } from 'src/app/Modelos/AnteProyecto';
import { Item } from 'src/app/Modelos/Item';

@Injectable({
  providedIn: 'root'
})
export class EditService {
 
  Url = "http://localhost:3000/";

  constructor(private ruta: HttpClient) { }

  MostrarAnteProyecto(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'ante-proyectos');
  }

  EditarAnteProyecto(id: any, ante_proyecto: AnteProyecto): Observable<any>{
    return this.ruta.put<any[]>(this.Url+'ante-proyectos/'+id, ante_proyecto);
  }

  MostrarItem(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'items');
  }

  EditarItem(id: any, item: Item): Observable<any>{
    return this.ruta.put<any[]>(this.Url+'items/'+id, item);
  }
}
