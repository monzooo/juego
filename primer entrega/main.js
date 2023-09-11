const playerChoiceText = document.getElementById("player-choice");
const computerChoiceText = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");
const winsText = document.getElementById("wins");
const lossesText = document.getElementById("losses");
const tiesText = document.getElementById("ties");
const resetButton = document.getElementById("reset");

let wins = 0;
let losses = 0;
let juegoTerminado = false;

function obtenerEleccionComputadora() {
    const opciones = ["🥌", "📄", "✂️"];
    const eleccionAleatoria = Math.floor(Math.random() * 3);
    return opciones[eleccionAleatoria];
}

function determinarResultado(eleccionJugador, eleccionComputadora) {
    if (eleccionJugador === eleccionComputadora) {
        return "Empate";
    } else if (
        (eleccionJugador === "🥌" && eleccionComputadora === "✂️") ||
        (eleccionJugador === "📄" && eleccionComputadora === "🥌") ||
        (eleccionJugador === "✂️" && eleccionComputadora === "📄")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}

function actualizarInterfaz(eleccionJugador, eleccionComputadora, resultado) {
    playerChoiceText.textContent = eleccionJugador;
    computerChoiceText.textContent = eleccionComputadora;
    resultText.textContent = resultado;

    if (resultado === "Ganaste") {
        wins += 1;
    } else if (resultado === "Perdiste") {
        losses += 1;
    } else {
        tiesText.textContent = parseInt(tiesText.textContent) + 1;
    }

    winsText.textContent = wins;
    lossesText.textContent = losses;

    if (wins === 3 || losses === 3) {
        juegoTerminado = true;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
}

function reiniciarJuego() {
    wins = 0;
    losses = 0;
    tiesText.textContent = "0";
    juegoTerminado = false;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    playerChoiceText.textContent = "";
    computerChoiceText.textContent = "";
    resultText.textContent = "";
    winsText.textContent = "0";
    lossesText.textContent = "0";
    
    // Ocultar los mensajes de ganaste y perdiste
    ocultarMensaje();
}

function ocultarMensaje() {
    const mensajeElement = document.getElementById("mensaje");
    mensajeElement.style.display = "none";
}


document.getElementById("rock").addEventListener("click", function () {
    if (!juegoTerminado) {
        const eleccionJugador = "🥌";
        const eleccionComputadora = obtenerEleccionComputadora();
        const resultado = determinarResultado(eleccionJugador, eleccionComputadora);
        actualizarInterfaz(eleccionJugador, eleccionComputadora, resultado);
    }
});

document.getElementById("paper").addEventListener("click", function () {
    if (!juegoTerminado) {
        const eleccionJugador = "📄";
        const eleccionComputadora = obtenerEleccionComputadora();
        const resultado = determinarResultado(eleccionJugador, eleccionComputadora);
        actualizarInterfaz(eleccionJugador, eleccionComputadora, resultado);
    }
});

document.getElementById("scissors").addEventListener("click", function () {
    if (!juegoTerminado) {
        const eleccionJugador = "✂️";
        const eleccionComputadora = obtenerEleccionComputadora();
        const resultado = determinarResultado(eleccionJugador, eleccionComputadora);
        actualizarInterfaz(eleccionJugador, eleccionComputadora, resultado);
    }
});

resetButton.addEventListener("click", reiniciarJuego);

function actualizarInterfaz(eleccionJugador, eleccionComputadora, resultado) {
    playerChoiceText.textContent = eleccionJugador;
    computerChoiceText.textContent = eleccionComputadora;
    resultText.textContent = resultado;

    if (resultado === "Ganaste") {
        wins += 1;
        if (wins === 3) {
            juegoTerminado = true;
            mostrarMensaje("¡Ganaste el juego!");
        }
    } else if (resultado === "Perdiste") {
        losses += 1;
        if (losses === 3) {
            juegoTerminado = true;
            mostrarMensaje("¡Perdiste el juego!");
        }
    } else {
        tiesText.textContent = parseInt(tiesText.textContent) + 1;
    }

    winsText.textContent = wins;
    lossesText.textContent = losses;
}

function mostrarMensaje(mensaje) {
    const mensajeElement = document.getElementById("mensaje");
    mensajeElement.textContent = mensaje;
    mensajeElement.style.display = "block";
}
