import "./style.css";

const numeroTurno = document.getElementById(".numero-turno") as HTMLHeadingElement;
const siguienteTurno = document.getElementById("siguiente-turno") as HTMLButtonElement;
const anteriorTurno = document.getElementById("anterior-turno") as HTMLButtonElement;
const reiniciarTurno = document.getElementById("reiniciar-turno") as HTMLButtonElement;
const inputTurno = document.getElementById("input-turno") as HTMLInputElement;
const agregarTurno = document.getElementById("agregar-turno") as HTMLButtonElement;

let turno = 1;
