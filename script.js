import Tarea from "./Tarea.js";
import GestorTareas from "./GestorTareas.js";

const gestorTareas = new GestorTareas();

const FORM_AGREGAR_TAREA_EVENT_COMPONENT =
{
    ELEMENTS:
    {
        FORM: document.querySelector("#form_agregar_tarea"),
        INPUT_TITULO: document.querySelector("#input_titulo"),
        FORM_STATUS: document.querySelector('#form_agregar_status'),
        BUTTON_SUBMIT: document.querySelector("#boton_submit_agregar_tarea")
    }
}


function handleSubmitFormAgregar(event) {

    event.preventDefault();

    const titulo = event.target.input_titulo.value;


    const form_status = {
        ok: false,
        message: null
    }

    if (!titulo) {
        form_status.ok = false;
        form_status.message = 'Por favor, rellene el campo.';
    }
    else {
        form_status.ok = true;

        gestorTareas.agregarTarea(titulo);

        form_status.message = 'Tarea creada con éxito.';
        event.target.reset();
    }


    FORM_AGREGAR_TAREA_EVENT_COMPONENT.ELEMENTS.FORM_STATUS.innerText = form_status.message
}


FORM_AGREGAR_TAREA_EVENT_COMPONENT.ELEMENTS.FORM.addEventListener(
    'submit',
    handleSubmitFormAgregar
)

//_______________________________________________

document.querySelector("#boton_listar_tareas").addEventListener(
  "click",
  () => gestorTareas.listarTareas()
);

document.querySelector("#boton_listar_tareas_completadas").addEventListener(
  "click",
  () => gestorTareas.listarCompletadas()
);

document.querySelector("#boton_cargar_tareas").addEventListener(
  "click",
  () => gestorTareas.cargarTareas()
);
//_________________________________________________

const FORM_COMPLETAR_TAREA_EVENT_COMPONENT =
{
    ELEMENTS:
    {
        FORM: document.querySelector("#form_completar_tarea"),
        INPUT_ID: document.querySelector("#input_id"),
        FORM_STATUS: document.querySelector('#form_completar_status'),
        BUTTON_SUBMIT: document.querySelector("#boton_submit_completar_tarea")
    }
}

function handleSubmitFormCompletar(event) {

    event.preventDefault();

    const id = event.target.input_id.value;


    const form_status = {
        ok: false,
        message: null
    }

    if (!id) {
        form_status.ok = false;
        form_status.message = 'Por favor, rellene el campo.';
    }
    else {
        form_status.ok = true;

        const tareaCompletada =  gestorTareas.completarTarea(id);

        if(tareaCompletada)
        {
            form_status.message = 'Tarea completada con éxito.';

        }
        else
        {
            form_status.message = 'La tarea no existe.';

        }

        event.target.reset();
    }


    FORM_COMPLETAR_TAREA_EVENT_COMPONENT.ELEMENTS.FORM_STATUS.innerText = form_status.message
}

FORM_COMPLETAR_TAREA_EVENT_COMPONENT.ELEMENTS.FORM.addEventListener(
    'submit',
    handleSubmitFormCompletar
)

//_______________________________________________


const FORM_BUSCAR_TAREA_EVENT_COMPONENT =
{
    ELEMENTS:
    {
        FORM: document.querySelector("#form_buscar_tarea"),
        INPUT_ID: document.querySelector("#input_busqueda"),
        FORM_STATUS: document.querySelector('#form_buscar_status'),
        BUTTON_SUBMIT: document.querySelector("#boton_submit_buscar_tarea")
    }
}

function handleSubmitFormBuscar(event) {

    event.preventDefault();

    const titulo = event.target.input_busqueda.value;


    const form_status = {
        ok: false,
        message: null
    }

    if (!titulo) {
        form_status.ok = false;
        form_status.message = 'Por favor, rellene el campo.';
    }
    else {
        form_status.ok = true;
        const tareaEncontrada = gestorTareas.buscarPorTitulo(titulo);

        if (tareaEncontrada)
        {
            form_status.message = gestorTareas.tareaToString(tareaEncontrada);

        }
        else
        {
            form_status.message = 'No se encontro la tarea.';

        }

        event.target.reset();
    }


    FORM_BUSCAR_TAREA_EVENT_COMPONENT.ELEMENTS.FORM_STATUS.innerText = form_status.message
}

FORM_BUSCAR_TAREA_EVENT_COMPONENT.ELEMENTS.FORM.addEventListener(
    'submit',
    handleSubmitFormBuscar
)