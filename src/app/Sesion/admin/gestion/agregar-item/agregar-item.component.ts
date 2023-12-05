import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AddService } from 'src/app/Servicios/Admin/Gestion/add.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.component.html',
  styleUrls: ['./agregar-item.component.scss'],
})
export class AgregarItemComponent  implements OnInit {

  Data: FormGroup;

  constructor(public aderir: AddService, private fbuilder: FormBuilder, private alerta: AlertController, private ruta: Router){
    this.Data = this.fbuilder.group({
      'Nombre': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {}

  Anexar(){
    var datos = this.Data.value;
    
    this.aderir.AñadirItem(datos).subscribe(async (dato)=>{
      console.log(dato);
      const alert = await this.alerta.create({
        header: 'OKAS',
        message: 'Apartado Registrado',
        buttons: ['OK'],
      });
      await alert.present();
    })
  }

}
