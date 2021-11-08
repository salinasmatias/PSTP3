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
                    <div class="col-md-12">
                        <h3 class="text-center">
                            Comprar Tickets
                        </h3>
                        <div class="row justify-content-center">
                          <div class="input-group mb-3 w-50">
                            <span class="input-group-text justify-content-center" id="basic-addon1">Usuario</span>
                            <input type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1">
                            <span class="input-group-text justify-content-center" id="basic-addon1">Tickets</span>
                            <input type="text" class="form-control" placeholder="Cantidad" aria-label="Username" aria-describedby="basic-addon1">
                            <button type="button" class="btn btn-success mx-auto">
                              Comprar
                          </button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`