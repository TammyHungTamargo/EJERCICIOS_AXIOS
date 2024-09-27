document.addEventListener("DOMContentLoaded", function() {

    axios.get('http://localhost:3000/usuarios')
        .then(response => {
            const usuarios = response.data;
            const usuario = usuarios[0];

            let cardHeader = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${usuario.nombre} ${usuario.apellidos}</h5>
                        <h6>Direcciones</h6>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Calle</th>
                                    <th>Código Postal</th>
                                </tr>
                            </thead>
                            <tbody>
            `;

            let filasDirecciones = '';
            usuario.direcciones.forEach(direccion => {
                filasDirecciones += `
                    <tr>
                        <td>${direccion.direccion}</td>
                        <td>${direccion.cpostal}</td>
                    </tr>
                `;
            });

            let cardFooter = `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;

            document.getElementById('user-card').innerHTML = cardHeader + filasDirecciones + cardFooter;
        })
        .catch(error => {
            console.error('Error al obtener los usuarios:', error);
        });
});
