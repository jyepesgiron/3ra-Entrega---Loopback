import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnteProyecto } from 'src/app/Modelos/AnteProyecto';

@Injectable({
  providedIn: 'root'
})
export class ModService {
 
  Url = "http://localhost:3000/";

  constructor(private ruta: HttpClient) { }

  Ver_AP(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'ante-proyectos');
  }

  Actualizar_AP(id: any, AP: AnteProyecto): Observable<any>{
    return this.ruta.put<any[]>(this.Url+'ante-proyectos/'+id, AP);
  }
}
