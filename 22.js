let frase = prompt("Ingrese una frase: ");
let desplazamiento = "";

for (let i = 0; i < 5; i++) {
    console.log(desplazamiento + frase);
    desplazamiento += "    ";
}
