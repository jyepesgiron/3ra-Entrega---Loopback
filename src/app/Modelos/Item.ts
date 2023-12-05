export class Item {
    id?: number;
    Nombre: string;
    Contenido: string;
    ID_Estudiante: string;
    Correo_Estudiante: string;

    constructor(Nombre: string, Contenido: string, ID_Estudiante: string, Correo_Estudiante: string){
        this.Nombre = Nombre;
        this.Contenido = Contenido;
        this.ID_Estudiante = ID_Estudiante;
        this.Correo_Estudiante = Correo_Estudiante;
    }
}