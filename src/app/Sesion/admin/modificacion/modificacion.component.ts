import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModService } from 'src/app/Servicios/Admin/Modificacion/mod.service';
import { AnteProyecto } from 'src/app/Modelos/AnteProyecto';

@Component({
  selector: 'app-modificacion',
  templateUrl: './modificacion.component.html',
  styleUrls: ['./modificacion.component.scss'],
})
export class ModificacionComponent  implements OnInit {

  Listado: AnteProyecto[] = [];
  List: AnteProyecto[] = [];
  List_Aux: AnteProyecto[] = [];

  constructor(private alerta: AlertController, public AP: ModService) { }

  ngOnInit() {
    this.AnteProyectos();
  }

  AnteProyectos(){
    this.AP.Ver_AP().subscribe((dato)=>{
      this.Listado = dato;
    })
  }

  async op(id: any){
    const alert = await this.alerta.create({
      header: 'Rango',
      message: 'Seleccione el estado del AnteProyecto',
      buttons: [
        {
          text: 'Pendiente',
          handler: () => {
            this.AP.Ver_AP().subscribe((datos)=>{
              this.List = datos;
              for(let i=0; i<this.List.length; i++){
                if(this.List[i].id == id){
                  this.List[i].Estado = "Pendiente";
                  this.AP.Actualizar_AP(id, this.List[i]).subscribe(async (data)=>{
                    const info = await this.alerta.create({
                      header: 'Vale',
                      message: 'Actualizado a -Pendiente-',
                      buttons: ['¡Listo!']
                    })

                    await info.present();
                  })
                }
              }
            })
          }
        },
        {
          text: 'Revisado',
          handler: () => {
            this.AP.Ver_AP().subscribe((datos)=>{
              this.List = datos;
              for(let i=0; i<this.List.length; i++){
                if(this.List[i].id == id){
                  this.List[i].Estado = "Revisado";
                  this.AP.Actualizar_AP(id, this.List[i]).subscribe(async(data)=>{
                    const info = await this.alerta.create({
                      header: 'Vale',
                      message: 'Actualizado a -Revisado-',
                      buttons: ['¡Listo!']
                    })

                    await info.present();
                  })
                }
              }
            })
          }
        },
        {
          text: 'Aprovado',
          handler: () => {
            this.AP.Ver_AP().subscribe((datos)=>{
              this.List = datos;
              for(let i=0; i<this.List.length; i++){
                if(this.List[i].id == id){
                  this.List[i].Estado = "Aprovado";
                  this.AP.Actualizar_AP(id, this.List[i]).subscribe(async (data)=>{
                    const info = await this.alerta.create({
                      header: 'Vale',
                      message: 'Actualizado a -Aprovado-',
                      buttons: ['¡Listo!']
                    })

                    await info.present();
                  })
                }
              }
            })
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });
  
    await alert.present();
  }

}
