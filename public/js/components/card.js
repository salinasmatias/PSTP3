export const CardPelicula = (titulo, poster, sinopsis, trailer, peliculaId) => `
  <div class="card">
    <a href="../view/pelicula.html?peliId=${peliculaId}">
      <div class="img">
        <img src="${poster}">
      </div>
      <div class="card-title">
        <h5>${titulo}</h5>
      </div>
      </a>
  </div>
`
