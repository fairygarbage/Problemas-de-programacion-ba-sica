
let frase = prompt("Ingrese una frase: ");
let letraIngresada = prompt("Ingrese una letra a buscar en la frase ingresada: ");
let contadorLetras = 0;

for (let i = 0; i < frase.length; i++) {
    if (letraIngresada == frase[i]) {
        contadorLetras++;
    }
}

console.log(`La letra ${letraIngresada} aparece ${contadorLetras} veces en la frase ingresada`);
