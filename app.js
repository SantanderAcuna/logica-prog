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


/*
function invertirPalabra(palabra) {
    // Divide la palabra en un array de caracteres
    var caracteres = palabra.split('');
  
    // Invierte el orden de los caracteres
    var caracteresInvertidos = caracteres.reverse();
  
    // Une los caracteres invertidos para formar la palabra invertida
    var palabraInvertida = caracteresInvertidos.join('');
  
    return palabraInvertida;
  }
  
  var palabraOriginal = "ejemplo";
  var palabraInvertida = invertirPalabra(palabraOriginal);
  console.log(palabraInvertida); // Esto imprimirá "olpmuje"

  */