import { peliOption } from "../components/peliculaOption.js";
import { getPeliculas } from "../services/fetchServices.js";

const renderPeliculaOptions = (json) => {
    let _root = document.getElementById("pelicula-selection");

    json.forEach(pelicula => {
        _root.innerHTML+=(peliOption(pelicula.titulo));
    });
}

export const renderPage = () => {
    getPeliculas(renderPeliculaOptions);
}