let tiempoRestante;
let temporizador;

function iniciarTemporizador() {
    const inputHours = parseInt(document.getElementById('inputHours').value) || 0;
    const inputMinutes = parseInt(document.getElementById('inputMinutes').value) || 0;
    const inputSeconds = parseInt(document.getElementById('inputSeconds').value) || 0;
    
    if (inputHours === 0 && inputMinutes === 0 && inputSeconds === 0) {
        alert('Por favor, ingresa un valor válido para el tiempo.');
        return;
    }

    tiempoRestante = (inputHours * 3600) + (inputMinutes * 60) + inputSeconds;
    actualizarContador();

    document.getElementById('inputHours').disabled = true;
    document.getElementById('inputMinutes').disabled = true;
    document.getElementById('inputSeconds').disabled = true;

    temporizador = setInterval(function() {
        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            document.getElementById('contador').innerHTML = '¡Tiempo agotado!';
            document.getElementById('inputHours').disabled = false;
            document.getElementById('inputMinutes').disabled = false;
            document.getElementById('inputSeconds').disabled = false;
        } else {
            actualizarContador();
            tiempoRestante--;
        }
    }, 1000);
}

function actualizarContador() {
    const horas = Math.floor(tiempoRestante / 3600);
    const minutos = Math.floor((tiempoRestante % 3600) / 60);
    const segundos = tiempoRestante % 60;

    const horasStr = horas < 10 ? `0${horas}` : horas;
    const minutosStr = minutos < 10 ? `0${minutos}` : minutos;
    const segundosStr = segundos < 10 ? `0${segundos}` : segundos;

    document.getElementById('contador').innerHTML = `${horasStr}:${minutosStr}:${segundosStr}`;
}
