const MIN = 0;
const MAX = 99999;

var cantidad = Math.round((prompt("¿Cuántos números quieres generar?")));

function generaAleatorio(MIN, MAX) {
  return Math.round((Math.random() * (MAX - MIN + 1) + MIN));
}

function generaNAleatorios(cantidad, MIN, MAX) {
  let miArray = new Array(cantidad);
  for (var i = 0; i < cantidad; i++) {
    miArray[i] = generaAleatorio(MIN, MAX);
  }

  let contador = 0;
  let premio = false;

  while(contador != 999999 && premio == false) {
    let entero = generaAleatorio(MIN, MAX);
    if(miArray.includes(entero)){
      premio = true;
    }
    contador++;
  }

  return "Número de veces: " + contador + " Array: " + miArray;
}

console.log(generaNAleatorios(cantidad, MIN, MAX));