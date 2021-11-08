import { venta } from "../components/venta.js";
import { getPeliculaById } from "../services/fetchServices.js";
import { postTickets } from "../services/fetchServices.js";
import { ventaSuccess, ventaError} from "../components/ventaMensajes.js";


const RenderVenta = (json) =>{
    let _root = document.getElementById("venta");
    let titulo = json.titulo;
    let poster = json.poster;
    let sinopsis = json.sinopsis;
    let id = json.peliculaId;
    _root.innerHTML += venta(titulo, poster, sinopsis);
}

const RenderMensajes=(json)=>{
    let _rootMain=document.getElementById("mensaje")
    _rootMain.innerHTML=""
    if (json.status) {
        _rootMain.innerHTML+=ventaError();
    }
    else{
        _rootMain.innerHTML+=ventaSuccess();
        
    };      
}

export const VentaRender = (id) =>{
    getPeliculaById(id,RenderVenta);
}

export const GenerarTickets =(usuario,cantidad,funcionId)=>{
    postTickets(funcionId,usuario,cantidad,RenderMensajes)
}