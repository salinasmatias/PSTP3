import { RenderFunciones } from "../container/funciones.js";
import { getFunciones } from "../services/fetchServices.js";

document.getElementById("boton-busqueda").addEventListener("click", buscarFunciones);
function buscarFunciones() {
    debugger;
    let peliculaTitulo=document.getElementById("pelicula-selection")
    let titulo=peliculaTitulo.value
    let fecha=document.getElementById("fecha-pelicula").value

    RenderFunciones(fecha,titulo)
}