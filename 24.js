let num = +prompt("Ingrese un número: ");
let esPrimo = true;

if (num >= 1) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(`${num} es un número primo`);
    } else {
        console.log(`${num} no es un número primo`);
    }
} else {
    console.log("El número ingresado no es válido");
}
