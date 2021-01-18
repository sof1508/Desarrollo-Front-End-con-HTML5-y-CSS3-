const weekday = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");

function showValuation() {
    let valoracion = document.getElementById("valoracion").value;
    let message;
    if (valoracion == 1)
        message = " punto";
    else message = " puntos";

    alert(`Has valorado con ${valoracion + message}`);
}


function showAccount() {
    let pais = document.getElementById("pais").value;
    let iban = document.getElementById("iban").value;
    let entidad = document.getElementById("entidad").value;
    let sucursal = document.getElementById("sucursal").value;
    let dc = document.getElementById("dc").value;
    let cuenta = document.getElementById("cuenta").value;

    if (iban && entidad && sucursal && dc && cuenta)
        alert(`Le informamos que su cuenta bancaria es: ${pais + iban}-${entidad}-${sucursal}-${dc}-${cuenta}`);
    else
        alert("Rellene los campos de datos bancarios para poder mostrar la cuenta");
}

function showDayWeek() {
    let fecha = document.getElementById("fecha").value;
    let date = new Date(fecha);
    let day = weekday[date.getDay()];
    alert(`La fecha seleccionada en el elemento de fecha es un ${day}`);
}