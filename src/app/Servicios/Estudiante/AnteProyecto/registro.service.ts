import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnteProyecto } from 'src/app/Modelos/AnteProyecto';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
 
  Url = "http://localhost:3000";

  constructor(private ruta: HttpClient) { }

  Añadir(info: AnteProyecto): Observable<any>{
    return this.ruta.post<any[]>(this.Url+'/ante-proyectos', info);
  }

}
