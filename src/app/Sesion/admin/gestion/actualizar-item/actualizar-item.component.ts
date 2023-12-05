import { Component, OnInit } from '@angular/core';
import { ActuallService } from 'src/app/Servicios/Admin/Gestion/actuall.service'; 
import { Apartado } from 'src/app/Modelos/Apartado';
import { Apartado_Aux } from 'src/app/Modelos/Apartado_Aux';
import { AlertController } from '@ionic/angular';
import { Item } from 'src/app/Modelos/Item';

@Component({
  selector: 'app-actualizar-item',
  templateUrl: './actualizar-item.component.html',
  styleUrls: ['./actualizar-item.component.scss'],
})
export class ActualizarItemComponent  implements OnInit {
 
  Datos_Apartado: Apartado[] = [];
  Apartado2: Apartado_Aux[] = [];
  Nombre_Seleccionado: string = '';
  Espacio: Apartado[] = [];
  Espacio2 = {
    Nombre: ''
  };
  Space: Item[] = [];
  Space2 = {
    Nombre: '',
    Contenido: '',
    ID_Estudiante: '',
    Correo_Estudiante: ''
  }
  //--------------------------------------

  constructor(public reload: ActuallService, private alerta: AlertController) { }

  ngOnInit(){
    this.Mostrar();
  } 

  Mostrar(){
    this.reload.MostrarApartado().subscribe((dato)=>{
      this.Datos_Apartado = dato;   
      for(let i=0; i<this.Datos_Apartado.length; i++){
        this.Apartado2[i] = new Apartado_Aux(this.Datos_Apartado[i].Nombre, false);
      } 
    })
  }

  //------------------------------------------------

  handleCheckboxChange(checked: boolean, selectedOption: any) {
    // Desmarca las otras opciones cuando se selecciona una
    if (checked) {
      for (const option of this.Apartado2) {
        if (option !== selectedOption) {
          option.isChecked = false;
        }else{
          this.Nombre_Seleccionado = option.Nombre;
        }
      }
    }
  }

  Actualizar(Nombre: string, Contenido: string){
    this.reload.MostrarApartado().subscribe((data)=>{
      this.Espacio = data;
      for(let x=0; x<this.Espacio.length; x++){
        if(this.Espacio[x].Nombre == Nombre){
          this.Espacio2.Nombre = Contenido;
          this.reload.EditarApartado(this.Espacio[x].id, this.Espacio2).subscribe(async (dato)=>{
            this.reload.MostrarItem().subscribe((data2)=>{
              this.Space = data2;
              for(let y=0; y<this.Space.length; y++){
                if(this.Space[y].Nombre == Nombre){
                  this.Space2 = this.Space[y];
                  this.Space2.Nombre = Contenido;
                  this.reload.EditarItem(this.Space[y].id, this.Space2).subscribe((dato2)=>{
                    console.log("Completado");
                  })
                }
              }
            })  
              const a = await this.alerta.create({
              header: 'Actualización',
              message: '¡Terminado!',
              buttons: ['¡Ok!']
            })
            await a.present();
          });
        }
      }
    })
  }

  async Action(){
    const alert = await this.alerta.create({
      header: 'Dato',
      message: this.Nombre_Seleccionado,
      inputs: [
        {
          name: 'Contenido',
          type: 'text',
          placeholder: 'Contenido'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: '¡Listo!',
          handler: (dato) =>{
            this.Actualizar(this.Nombre_Seleccionado, dato.Contenido);
          }
        }
      ]
    })

    await alert.present();
  }
}
