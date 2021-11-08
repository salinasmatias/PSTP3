export const venta = (titulo, poster, sinopsis) => `
<div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3>
                            ${titulo}
                        </h3>
                        <div class="row">
                          <img alt="Bootstrap Image Preview" src="${poster}" id="imagen-pelicula" class="rounded mx-auto"/>
                        </div>
                        <div class="row">
                          <p>${sinopsis}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`
