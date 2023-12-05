import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/Servicios/Admin/Gestion/edit.service';
import { Item } from 'src/app/Modelos/Item';
import { AnteProyecto } from 'src/app/Modelos/AnteProyecto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.component.html',
  styleUrls: ['./editar-item.component.scss'],
})
export class EditarItemComponent  implements OnInit {

  Lista_Item: Item[] = [];
  Lista_Ap: AnteProyecto[] = [];
  id: any;
  Token: any;
  //---------------------------------
  Lista_Ap2: AnteProyecto[] = [];
  Lista_Item2: Item[] = [];
  Lista_Ap2_Aux = {
    Nombre: '',
    Descripcion: '',
    Estado: '',
    ID_Estudiante: ''
  };
  Lista_Item2_Aux = {
    Nombre: '',
    Contenido: '',
    ID_Estudiante: '',
    Correo_Estudiante: ''
  };

  constructor(public edit: EditService, private alerta: AlertController) { }

  ngOnInit() {
    this.Mostrar_AP();
    this.Mostrar_Item();
  }

  Mostrar_AP(){
    this.edit.MostrarAnteProyecto().subscribe((dato)=>{
      this.Lista_Ap = dato;
    })
  }

  Mostrar_Item(){
    this.edit.MostrarItem().subscribe((dato)=>{
      this.Lista_Item = dato;
    })
  }

  async Editar_AnteProyecto_Nombre(Nombre: string){
    const alert = await this.alerta.create({
      header: 'Editar Anteproyecto',
      inputs: [
        {
          name: 'Contenido',
          type: 'text',
          placeholder: Nombre
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Actualizar',
          handler: (dd) => {
            this.edit.MostrarAnteProyecto().subscribe((datx)=>{
              this.Lista_Ap2 = datx;
              for(let i=0; i<this.Lista_Ap2.length; i++){
                if(this.Lista_Ap2[i].Nombre == Nombre){
                  this.Lista_Ap2_Aux = this.Lista_Ap2[i];
                  this.Lista_Ap2_Aux.Nombre = dd.Contenido;
                  this.edit.EditarAnteProyecto(this.Lista_Ap2[i].id, this.Lista_Ap2_Aux).subscribe(async (datox)=>{
                    const ali = await this.alerta.create({
                      header: 'Listo',
                      message: 'Actualizado',
                      buttons: ['¡Listo!']
                    })

                    await ali.present();
                  })
                }
              }
            })
          }
        }
      ]
    })

    await alert.present();
  }

  async Editar_AnteProyecto_Cont(Nombre: string){
    const alert = await this.alerta.create({
      header: 'Editar Anteproyecto',
      inputs: [
        {
          name: 'Contenido',
          type: 'text',
          placeholder: Nombre
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Actualizar',
          handler: (dd) => {
            this.edit.MostrarAnteProyecto().subscribe((datx)=>{
              this.Lista_Ap2 = datx;
              for(let i=0; i<this.Lista_Ap2.length; i++){
                if(this.Lista_Ap2[i].Descripcion == Nombre){
                  this.Lista_Ap2_Aux = this.Lista_Ap2[i];
                  this.Lista_Ap2_Aux.Descripcion = dd.Contenido;
                  this.edit.EditarAnteProyecto(this.Lista_Ap2[i].id, this.Lista_Ap2_Aux).subscribe(async (datox)=>{
                    const ali = await this.alerta.create({
                      header: 'Listo',
                      message: 'Actualizado',
                      buttons: ['¡Listo!']
                    })

                    await ali.present();
                  })
                }
              }
            })
          }
        }
      ]
    })

    await alert.present();
  }

  async Editar_Item(Nombre: string, id: any){
    const aler = await this.alerta.create({
      header: 'Actualizar Item',
      inputs: [
        {
          name: 'Contenido',
          type: 'text',
          placeholder: Nombre
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Actualizar',
          handler: (dato) => {
            this.edit.MostrarItem().subscribe((daty) => {
              this.Lista_Item2 = daty;
              for (let i = 0; i < this.Lista_Item2.length; i++) {
                if ((this.Lista_Item2[i].ID_Estudiante == id) && (this.Lista_Item2[i].Nombre == Nombre)) {
                  this.Lista_Item2_Aux = this.Lista_Item2[i];
                  this.Lista_Item2_Aux.Contenido = dato.Contenido;
                  this.edit.EditarItem(this.Lista_Item2[i].id, this.Lista_Item2_Aux).subscribe(async (ter) => {
                    const alix = await this.alerta.create({
                      header: 'Listo',
                      message: 'Item Actualizado',
                      buttons: ['¡Listo!']
                    });

                    await alix.present();
                  });
                }
              }
            });
          }
        }
      ]
    })
    await aler.present();
  }

}
