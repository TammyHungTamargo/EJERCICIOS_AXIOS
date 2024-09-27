document.addEventListener("DOMContentLoaded", function() {

    axios.get('http://localhost:3000/usuarios')
        .then(response => {
            const usuarios = response.data;
            const usuario = usuarios[0];

            let cardHTML = `
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

            usuario.direcciones.forEach(direccion => {
                cardHTML += `
                    <tr>
                        <td>${direccion.direccion}</td>
                        <td>${direccion.cpostal}</td>
                    </tr>
                `;
            });

            cardHTML += `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;

            document.getElementById('user-card').innerHTML = cardHTML;
        })
        .catch(error => {
            console.error('Error al obtener los usuarios:', error);
        });
});
