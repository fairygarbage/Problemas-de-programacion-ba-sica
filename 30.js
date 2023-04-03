let num1 = +prompt("Ingrese un número: ");
let num2 = +prompt("Ingrese otro número: ");
let opcion = prompt("Ingrese la opción deseada: 1 para suma, 2 para resta, 3 para multiplicación o 4 para división: ");

switch (opcion) {
    case "1":
        console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`);
        break;
    case "2":
        console.log(`La resta de ${num1} y ${num2} es ${num1 - num2}`);
        break;
    case "3":
        console.log(`La multiplicación de ${num1} y ${num2} es ${num1 * num2}`);
        break;
    case "4":
        console.log(`La división de ${num1} y ${num2} es ${num1 / num2}`);
        break;
    default:
        console.log("Opción no válida");
}
