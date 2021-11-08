const UrlApiCineGba = "https://localhost:44355/api"
const urlFuncion ="https://localhost:44355/api/funcion"
const urlPelicula ="https://localhost:44355/api/pelicula"
const urlBaseTickets = "https://localhost:44355/api/tickets"


export const getFunciones = (fecha, titulo, callback)=>{
    let urlBusqueda=`${urlFuncion}?fecha=${fecha}&titulo=${titulo}`
    fetch(urlBusqueda,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body)
    })
}

export const getPeliculas = (callback)=>{
    let url = `${UrlApiCineGba}/pelicula`;
    fetch(`${UrlApiCineGba}/pelicula`,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}

export const getPeliculaById =(peliculaId,callback)=>{
    fetch(`${UrlApiCineGba}/pelicula/${peliculaId}`,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        console.log(body)
        callback(body);
    })
}

export const getTicketsDisponiblesByFuncionId =(funcionId,callback)=>{
    fetch(`${UrlApiCineGba}/funcion/${funcionId}/tickets`,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        console.log(body)
        callback(body);
    })
}

export const getFuncionesConTitulo = (funciones, callback) =>{
    let url=`${urlPelicula}`
    fetch(url,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok){
            return httpResponse.json()
        }    
    })
    .then(body => {
        funciones.forEach(funcion => {
            let peliculaBuscada = funcion.peliculaId
            for (let i = 0; i < Object.keys(body).length; i++) {
                if(body[i].peliculaId==peliculaBuscada){
                    funcion.titulo=body[i].titulo
                }
            }
        })
        callback(funciones)
    })
}

export const postTickets=(funcionId,user,cantidad, callback)=>{
    let jsonBody={
        "funcionId": funcionId,
        "usuario": user,
        "cantidad": cantidad
    }
    fetch(`${urlBaseTickets}`,{
        method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonBody)
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
        console.log(body);
    })
}

export const getPelicula = (id,callback) =>{
    fetch(`${urlBasePeliId}/${id}`,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}