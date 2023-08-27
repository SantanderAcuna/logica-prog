let texto = prompt('ingresa un nombre');


function polindromo(texto) {

    let palabra = texto.split('');
    console.log('split '+ palabra);    

    let palabraInv = palabra.reverse();
    console.log('reverse '+palabraInv);

    let palabraUnida = palabraInv.join('');
    console.log('join '+palabraUnida);


    return (palabraUnida === texto);

}

console.log(polindromo(texto));

