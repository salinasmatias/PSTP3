import { venta } from "../components/venta.js";
import { getPeliculaById } from "../services/fetchServices.js";

const RenderVenta = (json) =>{
    let _root = document.getElementById("venta");
    let titulo = json.titulo;
    let poster = json.poster;
    let sinopsis = json.sinopsis;
    let id = json.peliculaId;
    
    _root.innerHTML += venta(titulo, poster, sinopsis);
}

export const VentaRender = (id) =>{
    getPeliculaById(id,RenderVenta);
}