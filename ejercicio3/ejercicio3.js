var equipos = [
  "Alavés",
  "Atl. Madrid",
  "Villareal",
  "Bacelona",
  "Real Madrid",
  "Getafe",
  "Espanyol",
  "Málaga",
  "Sevilla",
  "Levante",
  "Valencia",
  "Betis",
  "Celta",
  "Atl. Bilbao",
  "Real Sociedad",
  "Rayo Vallecano",
  "Osasuna",
  "Mallorca",
  "Cádiz",
  "Granada",
];

const SIMBOLO = ["1", "2", "x"];

var quiniela = [];
for (var i = 0; i < equipos.length; i++) {
  quiniela[i] = new Array(equipos.length);
}

function generaSimbolo() {
  return SIMBOLO[Math.round(Math.random() * (2 - 0) + 0)];
}

function muestraEquipos(equipos) {
  console.table(equipos);
}

muestraEquipos(equipos);

function generarResultados(quiniela) {
  for (var i = 0; i < quiniela.length; i++) {
    for (var j = 0; j < quiniela[i].length; j++) {
      if (i == j) {
        quiniela[i][j] = "-";
      } else {
        quiniela[i][j] = generaSimbolo();
      }
    }
  }
}

function quinielas(equipos) {
  generarResultados(quiniela);

  console.table(quiniela);
}

quinielas(equipos);

function muestraDatos(equipos, quiniela) {
  var equipoLocal = prompt("Introduce el nombre del equipo local");
  var equipoVisitante = prompt("Introduce el nombre del equipo visitante");
  do {
    if (!(equipos.includes(equipoLocal))) {
      equipoLocal = prompt("Introduce un equipo local válido");
    }
    if (!(equipos.includes(equipoVisitante))) {
      equipoVisitante = prompt("Introduce un equipo visitante válido");
    }
  } while (
    !(equipos.includes(equipoLocal)) ||
    !(equipos.includes(equipoVisitante))
  );

  console.log(
    "El resultado del partido entre el " +
      equipoLocal +
      " y el " +
      equipoVisitante +
      " es: " +
      quiniela[equipos.indexOf(equipoLocal)][equipos.indexOf(equipoVisitante)]
  );
}

muestraDatos(equipos, quiniela);
