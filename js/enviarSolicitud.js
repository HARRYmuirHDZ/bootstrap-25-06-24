document.getElementById('formularioSolicitud').addEventListener('submit', enviarSolicitud);

function enviarSolicitud(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    const copia = document.getElementById('copia').value;
    

    let resultado = `<br> Nombre: ${nombre}<br> Correo Electrónico: ${email}<br> Asunto: ${asunto}<br> Mensaje: ${mensaje}<br>`;
    
    if (copia === 'si') {
        resultado += `<br> Si, se enviará una copia de la solicitud a su correo electrónico.`;
    } else {
        resultado += `Copia: No`;
    }

    document.getElementById('resultado').innerHTML = resultado;
}
