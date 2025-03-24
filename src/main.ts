import "./style.css";

const numeroTurno = document.getElementById("numero-turno");
const siguienteTurno = document.getElementById("siguiente-turno");
const anteriorTurno = document.getElementById("anterior-turno");
const reiniciarTurno = document.getElementById("reiniciar-turno");
const inputTurno = document.getElementById("input-turno");
const agregarTurno = document.getElementById("agregar-turno");

let turno = 1;

// Función para actualizar el turno en la pantalla
const actualizarTurno = () => {
    if (numeroTurno && numeroTurno instanceof HTMLHeadingElement) {
        numeroTurno.textContent = turno.toString().padStart(2, '0');
    }
};

// Botón siguiente
if (siguienteTurno !== null && siguienteTurno !== undefined && siguienteTurno instanceof HTMLButtonElement) {
    siguienteTurno.addEventListener("click", () => {
        turno++;
        actualizarTurno();
    });
}

// Botón anterior
if (anteriorTurno !== null && anteriorTurno !== undefined && anteriorTurno instanceof HTMLButtonElement) {
    anteriorTurno.addEventListener("click", () => {
        if (turno > 1) {
            turno--;
            actualizarTurno();
        }
    });
}

// Botón reiniciar
if(reiniciarTurno !== null && reiniciarTurno !== undefined && reiniciarTurno instanceof HTMLButtonElement) {
    reiniciarTurno.addEventListener("click", () => {
        turno = 1;
        actualizarTurno();
    });
}

// Botón para asignar un turno manualmente
if (agregarTurno  && agregarTurno instanceof HTMLButtonElement && inputTurno && inputTurno instanceof HTMLInputElement) {
    agregarTurno.addEventListener("click", () => {
        const nuevoTurno = parseInt(inputTurno.value, 10);
        if (!isNaN(nuevoTurno) && nuevoTurno >= 1) {
            turno = nuevoTurno;
            actualizarTurno();
            inputTurno.value = "";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el turno en pantalla
    actualizarTurno();
})