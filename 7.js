
console.log('escriba salir para terminar ocn sus oraciones')
let frases = [];
let c = 0;

while (true) {
    let frase = prompt('Ingresa una frase: ');
    
    if (frase === 'salir') {
        break;
    } else {
        frases.push(frase);
        c++;
    }
}

console.log(`Se han ingresado ${c} frases`);
