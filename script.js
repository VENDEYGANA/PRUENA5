function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('app-container').classList.remove('hidden');
        alert("¡Bienvenido!");
    } else {
        alert("Usuario o clave incorrecta.");
    }
}

function agregarPantalla() {
    var pantalla = document.getElementById('pantalla').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var agente = document.getElementById('agente').value;
    var estatus = document.getElementById('estatus').value;

    if (pantalla && fecha && hora && agente && estatus) {
        var tableBody = document.getElementById('pantallas-body');
        var row = document.createElement('tr');

        var cellPantalla = document.createElement('td');
        var cellFecha = document.createElement('td');
        var cellHora = document.createElement('td');
        var cellAgente = document.createElement('td');
        var cellEstatus = document.createElement('td');

        cellPantalla.textContent = pantalla;
        cellFecha.textContent = fecha;
        cellHora.textContent = hora;
        cellAgente.textContent = agente;
        cellEstatus.textContent = estatus;

        row.appendChild(cellPantalla);
        row.appendChild(cellFecha);
        row.appendChild(cellHora);
        row.appendChild(cellAgente);
        row.appendChild(cellEstatus);

        tableBody.appendChild(row);

        document.getElementById('pantalla').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('hora').value = '';
        document.getElementById('agente').value = '';
        document.getElementById('estatus').value = 'disponible';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function filtrarPantallas() {
    var filterDate = document.getElementById('filtrarFecha').value;
    var tableBody = document.getElementById('pantallas-body');
    var rows = tableBody.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var cellFecha = row.getElementsByTagName('td')[1];
        var fecha = cellFecha.textContent;

        if (fecha === filterDate || filterDate === '') {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}
