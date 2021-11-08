import { VentaRender } from "./container/ticket.js";

const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var peliculaId = urlParams.get('peliculaId');

window.onload = () =>{
    if (urlParams.has('peliculaId')){
        console.log(peliculaId)
        VentaRender(peliculaId);
    }
    else{
        alert('Para ver informacion de una pelicula debes indicar su id. Sera redireccionado al inicio.');
        window.location.href = "../";
    }
}