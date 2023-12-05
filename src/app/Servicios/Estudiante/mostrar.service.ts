import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnteProyecto } from 'src/app/Modelos/AnteProyecto';


@Injectable({
  providedIn: 'root'
})
export class MostrarService {
 
  Url = "http://localhost:3000";

  constructor(private ruta: HttpClient) { }

  Mostrar(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'/ante-proyectos');
  }
}
