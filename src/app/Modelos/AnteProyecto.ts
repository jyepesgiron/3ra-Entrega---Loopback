export class AnteProyecto {
    id?: number;
    Nombre: string;
    Descripcion: string;
    Estado: string;
    ID_Estudiante: string;

    constructor(Nombre: string, Descripcion: string, Estado: string, ID_Estudiante: string){
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        this.Estado = Estado;
        this.ID_Estudiante = ID_Estudiante;
    }
}