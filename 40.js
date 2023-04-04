let ventas = [];
let total = {};

for (let i = 0; i < 3; i++) {
    let representante = i + 1;
    for (let j = 0; j < 12; j++) {
        let mes = j + 1;
        for (let k = 0; k < 4; k++) {
            let producto = k + 1;
            let venta = prompt(`Ingrese la venta del representante ${representante}, mes ${mes}, producto ${producto}: `);
            ventas.push({
                representante,
                mes,
                producto,
                venta
            });
            if (total[mes] == undefined) {
                total[mes] = {};
            }
            if (total[mes][producto] == undefined) {
                total[mes][producto] = 0;
            }
            total[mes][producto] += parseInt(venta);
        }
    }
}

console.log('Ventas:', ventas);
console.log('Total:', total);
