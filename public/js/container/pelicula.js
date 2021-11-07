import { Pelicula } from "../components/pelicula.js";
import { getPeliculaById } from "../services/fetchServices.js";


debugger;
const RenderMovie = (json) =>{
    let _root = document.getElementById("movie-content");
    let titulo = json.titulo;
    let imagen = json.poster;
    let sinopsis = json.sinopsis;
    let trailer = json.trailer;
    let id = json.peliculaId;
    
    _root.innerHTML += Pelicula(titulo, imagen, sinopsis, trailer);
}

export const PeliculaRender = (id) =>{
    getPeliculaById(id,RenderMovie);
}