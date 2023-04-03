function factorial(num) {
    if (num === 0) {
        return 1;
    }

    return num * factorial(num - 1);
}
let numero = +prompt("Ingrese un numero: ");
console.log("El factorial es " + factorial(4)); 
