function obtenerFechaActual() {
  const fecha = new Date();
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const diaSemana = dias[fecha.getDay()];
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const año = fecha.getFullYear();
  const fechaFormateada = `${diaSemana} ${dia} de ${mes} de ${año}`;

  return fechaFormateada;
}

function obtenerHoraActual() {
  const fecha = new Date();
  let horas = fecha.getHours();
  const minutos = String(fecha.getMinutes()).padStart(2, "0");
  const segundos = String(fecha.getSeconds()).padStart(2, "0");
  const ampm = horas >= 12 ? "PM" : "AM";

  horas = horas % 12;
  horas = horas ? horas : 12;

  const horaFormateada = `${String(horas).padStart(
    2,
    "0"
  )}:${minutos}:${segundos} ${ampm}`;

  return horaFormateada;
}

function mostrarFechaHoraActual() {
  const contenedorFechaActual = document.getElementById("fechaActual");
  const contenedorHoraActual = document.getElementById("horaActual");

  contenedorFechaActual.textContent = obtenerFechaActual();
  contenedorHoraActual.textContent = obtenerHoraActual();
}

function onMouseOver() {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    const original = img.getAttribute("data-src-original");
    const hover = img.getAttribute("data-src-hover");

    if (original && hover) {
      img.addEventListener("mouseover", () => {
        img.src = hover;
      });

      img.addEventListener("mouseout", () => {
        img.src = original;
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  onMouseOver();
  mostrarFechaHoraActual();

  setInterval(() => {
    mostrarFechaHoraActual();
  }, 1000);
});
