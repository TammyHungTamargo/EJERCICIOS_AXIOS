document.addEventListener("DOMContentLoaded", function() {
    cargarTarjetas();
});

function cargarTarjetas() {
    axios.get('http://localhost:3000/tarjetas')
        .then(response => {
            const arrayTarjetas = response.data;

            let tabla = `
            <table id="dataTable" class="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Tarjeta</th>
                  <th>Propietario</th>
                </tr>
              </thead>
              <tbody>
            `;

            let filas = ``;

            arrayTarjetas.forEach(item => {
                filas += `
                <tr>
                  <td>${item.id}</td>
                  <td>${item.tarjeta}</td>
                  <td>${item.propietario}</td>
                </tr>
                `;
            });

            let finTabla = `
              </tbody>
            </table>
            `;

            document.getElementById('tabla-container').innerHTML = tabla + filas + finTabla;
        })
        .catch(error => console.error('Error:', error));
}
