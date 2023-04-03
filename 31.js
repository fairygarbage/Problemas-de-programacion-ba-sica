let num = +prompt("Ingrese un número: ");
let opcion = prompt(`Ingrese una opción: 
    1 - comprobar si es primo
    2 - hallar su factorial
    3 - imprimir su tabla de multiplicar
    `);

switch (opcion) {
    case "1":
        if (esPrimo(num)) {
            console.log(`El número ${num} es primo`);
        } else {
            console.log(`El número ${num} no es primo`);
        }
        break;
    case "2":
        console.log(`El factorial de ${num} es ${factorial(num)}`);
        break;
    case "3":
        console.log(`Tabla de multiplicar del ${num}:`);
        tablaMultiplicar(num);
        break;
    default:
        console.log("Opción no válida");
        break;
}

function esPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function tablaMultiplicar(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
