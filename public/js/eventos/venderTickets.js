import { GenerarTickets } from "../container/ticket.js";


document.getElementById("boton-compra").addEventListener("click", comprarTickets);

const valores = window.location.search;
const url = new URLSearchParams(valores);
var funcionId = url.get('funcionId');

function comprarTickets(){
    document.getElementById("mensaje").style.visibility = "visible";
    let usuario=document.getElementById("usuario").value
    let cantidad=document.getElementById("cantidad").value
    if (usuario!="" && cantidad!="") {
        GenerarTickets(usuario,cantidad,funcionId)
    }
    else{
        alert('Estos valores no pueden ser nulos')
    }
}