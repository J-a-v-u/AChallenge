
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
            return textoEncriptado;
            }

        if (currentValue == "i") {
            textoEncriptado.push("imes");
            return textoEncriptado;
             }


        if (currentValue == "a") {
            textoEncriptado.push("ai");
            return textoEncriptado;
             }



        if (currentValue == "o") {
            textoEncriptado.push("ober");
            return textoEncriptado;
            }



         if (currentValue == "u") {
            textoEncriptado.push("ufat");
            return textoEncriptado;
            }


        else{
            textoEncriptado.push(currentValue);
            return textoEncriptado;
        }


       


    });

   var textoEncriptadoMostrado = document.getElementById("msg");
    
    textoEncriptadoMostrado.value = textoEncriptado.join('');

    console.log(textoEncriptado.join(''))

//alert(textoEncriptado.join(''));



  //      return;
})










