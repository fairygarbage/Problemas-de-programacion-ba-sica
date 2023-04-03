let numero = +prompt("Ingrese un número del 0 al 10: ");

if (numero >= 0 && numero <= 10) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("El número ingresado no es válido");
}
