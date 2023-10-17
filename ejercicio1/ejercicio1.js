var texto = "Hola, me llamo Armando";

function separarPalabras (texto) {
    return array = texto.split(" ");
}

function girarPalabras (array) {
    var newTexto = "";
    for(var i = 0; i < array.length; i++) {
        var newPalabra = array[i].split("").reverse().join("");
        newTexto += newPalabra + " ";
    }

    return newTexto;
}

console.log(girarPalabras(separarPalabras(texto)));