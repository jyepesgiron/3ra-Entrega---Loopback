import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/Servicios/Estudiante/AnteProyecto/registro.service'; 
import { LogueoService } from 'src/app/Servicios/logueo.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  Information: FormGroup;
  Token!: string | null;
  auxToken: String = "";

  constructor(public registrar: RegistroService, private fbuilder: FormBuilder, private alerta: AlertController, private ruta: Router, public Logueo: LogueoService) {
    this.Information = this.fbuilder.group({
      'Nombre': new FormControl("", Validators.required),
      'Descripcion': new FormControl("", Validators.required),
      'Estado': new FormControl("", Validators.required),
      'ID_Estudiante': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
    this.Token = localStorage.getItem('CapacitorStorage.token');
  }

  Registrar(){
    var datos = this.Information.value;
    datos.Estado = "Revisión";
    datos.ID_Estudiante = this.Decod(this.Token);
    console.log(datos);

    this.registrar.Añadir(datos).subscribe(async (dato)=>{
      console.log(dato);
      const alert = await this.alerta.create({
        header: 'OKAS',
        message: 'Ante-Proyecto Registrado',
        buttons: ['OK'],
      });
      await alert.present();
      this.ruta.navigate(["/Funcion/sesion"]);
    })
  }

  LogOut(){
    this.Logueo.LogOut();
  }

  Decod(token: String|null){
    const arrayT = token!.split('.');
    const tokenP = JSON.parse(atob(arrayT[1]));
    return tokenP.id;
  }

}
