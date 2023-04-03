
let frase = prompt("Ingrese una frase: ");
let fraseCentrada = "";

for (let i = 0; i < (20 - Math.floor(frase.length / 2)); i++) {
    fraseCentrada += " ";
}

console.log(fraseCentrada + frase);
