let frase = prompt('Escribe una frase');
let busqueda = prompt('Escribe la palabra a buscar en la frase');

function busquedaPalabra(frase, busqueda) {

    let regex = /[¿?=!\-¡"#$%,.+*\/]/g;

    let palabra = frase.toLowerCase().replace(regex, '');
    let prueba = palabra.split(' ').join('');

    return `Se encontro la palabra ${busqueda} ? : (${prueba === busqueda})`;
}


console.log(busquedaPalabra(frase, busqueda));