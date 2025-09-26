export default class Tarea {
    id;
    titulo;
    completada;

    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
        this.completada = false;
    }

    toggleEstado() {
        this.completada = !this.completada;
    }
}