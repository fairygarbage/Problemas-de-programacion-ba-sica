for (let fila = 1; fila <= 10; fila++) {
    let numero = (fila - 1) * 10;
    let linea = "";
    for (let columna = 1; columna <= 10; columna++) {
        linea += `${numero} `;
        numero++;
    }
    console.log(linea);
}
