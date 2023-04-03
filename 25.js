
let num = +prompt("Ingrese un número menor a 5000: ");

if (num > 0 && num < 5000) {
    let numerosRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numRomano = "";

    for (let i = 0; i < valores.length; i++) {
        while (valores[i] <= num) {
            numRomano += numerosRomanos[i];
            num -= valores[i];
        }
    }
    console.log(`En número romano es: ${numRomano}`);
} else {
    console.log("El número ingresado no es válido");
}
