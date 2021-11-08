import { peliOption } from "../components/peliculaOption.js";
import { getPeliculas } from "../services/fetchServices.js";
import { funcion } from "../components/funcion.js";
import { getFunciones, getFuncionesConTitulo } from "../services/fetchServices.js";

const renderPeliculaOptions = (json) => {
    let _root = document.getElementById("pelicula-selection");

    json.forEach(pelicula => {
        _root.innerHTML+=(peliOption(pelicula.titulo));
    });
}

const RenderFuncionConTitulo =(json) =>{
    let _root = document.getElementById("tabla-body")
    json.forEach(f => {
        _root.innerHTML+=(funcion(f.peliculaId, f.funcionId, f.titulo, f.fecha, f.horario));
    });
}

const FuncionesRender =(json)=>{
     let _root = document.getElementById("tabla-body")
     _root.innerHTML = "";
     getFuncionesConTitulo(json, RenderFuncionConTitulo);
 }

export const renderPage = () => {
    getPeliculas(renderPeliculaOptions);
}

export const RenderFunciones =(fecha,titulo) =>{
    getFunciones(fecha,titulo, FuncionesRender);
}