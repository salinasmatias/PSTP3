import { CardPelicula } from "../components/card.js";
import { getPeliculas, getFunciones, getTicketsDisponiblesByFuncionId } from "../services/fetchServices.js"


const PeliculasRender = (json) =>{
    let _root=document.getElementById("cartelera");
    Object.values(json).forEach(pelicula => {
        _root.innerHTML+=CardPelicula(pelicula.titulo, pelicula.poster, pelicula.sinopsis, pelicula.trailer, pelicula.peliculaId)
        
    });
}

export const IndexRender = () => {
    getPeliculas(PeliculasRender);
}