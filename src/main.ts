import "./style.css";

const numeroTurno = document.getElementById("numero-turno") as HTMLHeadingElement;
const siguienteTurno = document.getElementById("siguiente-turno") as HTMLButtonElement;
const anteriorTurno = document.getElementById("anterior-turno") as HTMLButtonElement;
const reiniciarTurno = document.getElementById("reiniciar-turno") as HTMLButtonElement;
const inputTurno = document.getElementById("input-turno") as HTMLInputElement;
const agregarTurno = document.getElementById("agregar-turno") as HTMLButtonElement;

let turno = 1;

// Función para actualizar el turno en la pantalla
const actualizarTurno = () => {
    if (numeroTurno) {
        numeroTurno.textContent = turno.toString().padStart(2, '0');
    }
};

// Manejo del botón siguiente
siguienteTurno.addEventListener("click", () => {
    turno++;
    actualizarTurno();
});

// Manejo del botón anterior
anteriorTurno.addEventListener("click", () => {
    if (turno > 1) {
        turno--;
        actualizarTurno();
    }
});

// Manejo del botón reiniciar
reiniciarTurno.addEventListener("click", () => {
    turno = 1;
    actualizarTurno();
});

// Manejo del botón para asignar un turno manualmente
agregarTurno.addEventListener("click", () => {
    const nuevoTurno = parseInt(inputTurno.value, 10);
    if (!isNaN(nuevoTurno) && nuevoTurno >= 1) {
        turno = nuevoTurno;
        actualizarTurno();
        inputTurno.value = "";
    }
});

// Inicializar el turno en pantalla
actualizarTurno();