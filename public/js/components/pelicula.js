export const Pelicula = (titulo, poster, sinopsis, trailer) => `
<div class="row">
    <div class="col-md-12">
        <h3 class="text-center" id="titulo-pelicula">
            ${titulo}
        </h3>
        <div class="row">
            <div class="col-md-6">
                <div class="ratio ratio-16x9">
                    <iframe width="560" height="315" src="${trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-12">
                        <img alt="Bootstrap Image Preview" src="${poster}" class="rounded" />
                    </div>
                    <div class="col-md-9">
                        <h2>
                            Sinopsis
                        </h2>
                        <p>${sinopsis}</p>
                        <button type="button" class="btn btn-success"><a class="text-decoration-none" style="color:white;" href="../view/funciones.html">
                            Ver funciones
                        </a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`