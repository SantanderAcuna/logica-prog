let numero = prompt('ingresa un numero');
let resultado = '';

function tabla(numero) {
    console.log(`# Tabla de multiplicar del ${numero}\n`);

    for (let i = 1; i < 11; i++) {

        let multiplicacion = i * numero;

        resultado += `${i} x ${numero} = ${multiplicacion}\n`;

    }

    return resultado;
}

console.log(tabla(numero));