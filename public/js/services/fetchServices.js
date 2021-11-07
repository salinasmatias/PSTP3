const UrlApiCineGba = "https://localhost:44355/api"


export const getFunciones = (callback)=>{
    fetch(`${UrlApiCineGba}/funcion`,{
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