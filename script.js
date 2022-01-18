
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/



var botonEncriptar = document.querySelector("#btn-encriptar");
//console.log (textoAEncriptar)

botonEncriptar.addEventListener("click",function(event){
 //  
    var capturarTextoAEncriptar = document.querySelector("#input-texto");

    var textoAEncriptar= capturarTextoAEncriptar.value;
    let letras = textoAEncriptar.split('')
    var textoEncriptado = []
   // console.log(letras);
    event.preventDefault();

    letras.forEach(function(currentValue){
        if (currentValue == "e") {
            textoEncriptado.push("enter");
            }
        else{
            textoEncriptado.push(currentValue);
  
        }
        console.log(textoEncriptado.join(''));

        return textoEncriptado;


    });

alert(textoEncriptado.join(''));

//


  //      return;
})










