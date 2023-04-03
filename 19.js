
let hora = +prompt("Ingrese la hora (formato 24h): ");
let minutos = +prompt("Ingrese los minutos: ");
let segundos = +prompt("Ingrese los segundos: ");

if (hora >= 0 && hora < 24 && minutos >= 0 && minutos < 60 && segundos >= 0 && segundos < 60) {
    let tiempo = setInterval(reloj, 1000);
    function reloj() {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                hora++;
                if (hora === 24) {
                    hora = 0;
                }
            }
        }
        console.log(`${hora}:${minutos}:${segundos}`);
    }
} else {
    console.log("Los valores ingresados no son válidos");
}
