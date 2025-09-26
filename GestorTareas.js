import Tarea from "./Tarea.js";

const listadoTareas = [
    new Tarea(1, "Primera tarea"),
    new Tarea(2, "Segunda tarea"),
    new Tarea(3, "Tercera tarea")
]


export default class GestorTareas {
    listaTareas = [];

    agregarTarea(titulo) {
        let tarea = new Tarea(this.listaTareas.length + 1, titulo);
        this.listaTareas.push(tarea);
    }

    tareaToString(tarea) {
        return (`Tarea número ${tarea.id} - "${tarea.titulo}" - ${tarea.completada ? "Completada" : "Pendiente"}`)
    }

    listarTareas() {
        this.listaTareas.forEach(tarea => {
            console.log(this.tareaToString(tarea));
        });
    }

    buscarPorTitulo(titulo) {
        return this.listaTareas.find((tarea) => tarea.titulo === titulo);
    }

    listarCompletadas() {
        const tareasFiltradas = this.listaTareas.filter((tarea) => tarea.completada === true);
        tareasFiltradas.forEach(tarea => {
            console.log(this.tareaToString(tarea));
        });
    }

    async cargarTareas() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.listaTareas.push(...listadoTareas);
                console.log("tareas cargadas");
                resolve(this.listaTareas);
            }, 2000);
        });
    }

    completarTarea(id) {
        const tareaEncontrada = this.listaTareas.find((tarea) => tarea.id === parseInt(id));

        if (tareaEncontrada) {
            tareaEncontrada.completada = true;
            return true
        }

        return false
    }
}