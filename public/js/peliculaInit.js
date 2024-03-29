import { PeliculaRender } from "./container/pelicula.js";


const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var peliculaId = urlParams.get('peliId');

window.onload = () =>{
    if (urlParams.has('peliId')){
        console.log(peliculaId)
        PeliculaRender(peliculaId);
    }
    else{
        alert('Para ver informacion de una pelicula debes indicar su id. Sera redireccionado al inicio.');
        window.location.href = "../";
    }
}