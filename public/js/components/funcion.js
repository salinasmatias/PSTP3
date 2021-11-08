export const funcion = (peliculaId, funcionId, titulo, fecha, horario) => `
<tr><td>${titulo}</td><td>${fecha}</td><td>${horario}</td><td><button type="button" class="btn btn-success"><a class="text-decoration-none" style="color: white;" href="../view/tickets.html?peliculaId=${peliculaId}&funcionId=${funcionId}">Comprar entradas</a></button></td></tr>
`