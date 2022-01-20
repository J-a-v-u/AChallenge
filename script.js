
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

function cambiarTextoE(){
      var texVar = document.querySelector("#texto-variante");
      texVar.classList.add("fadeOut");
      setTimeout(function (){
         texVar.classList.add("fadeIn");
        document.getElementById("texto-variante").innerHTML = "Texto encriptado: <br>  <br>";
      },500);
     
}



function cambiarTextoD(){
    var texVar = document.querySelector("#texto-variante");
    texVar.classList.add("fadeOut");
    setTimeout(function(){
        texVar.classList.add("fadeIn");
        document.getElementById("texto-variante").innerHTML = "Texto desencriptado: <br>  <br>";
         },500);
 
}


//FFFFFFFFFFFFFFFFFFFFFFFFFFFFFUNCION PARA ENCRIPTAR

var botonEncriptar = document.querySelector("#btn-encriptar");
//console.log (textoAEncriptar)

botonEncriptar.addEventListener("click",function(event){
    cambiarTextoE(); 
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
    return textoEncriptadoMostrado;
// var textoEncriptadoFinal = textoEncriptado.join('');















})






//FFFFFFFFFFFFFFFFFFFFFFFFFFFUNCION PARA COPIAR






   
 function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
  }
  
  
  document.querySelector("#botonCopiar").addEventListener("click", copy);








// FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFUNCION PARA DESENCRIPTAR

//var textoEncriptadoFinal = textoEncriptado.join('');
var botonDesencriptar = document.querySelector("#btn-desencriptar");

function desencriptarLetra (regla, letra, texto) {

  //  var text = texto;
    var desencriptado = texto.replaceAll(regla, letra);
    return desencriptado;

}

botonDesencriptar.addEventListener("click",function(event){

   


    event.preventDefault();
   cambiarTextoD();
    var capturarTextoADesencriptar = document.querySelector("#input-texto");

                
    var desencriptadoA = desencriptarLetra('ai', 'a', capturarTextoADesencriptar.value);
    // console.log (capturarTextoADesencriptar.value)
      
      var desencriptadoE = desencriptarLetra('enter', 'e', desencriptadoA);
      var desencriptadoI = desencriptarLetra('imes', 'i', desencriptadoE);
      var desencriptadoO = desencriptarLetra('ober', 'o', desencriptadoI);
      var desencriptadoU = desencriptarLetra('ufat', 'u', desencriptadoO);
console.log (desencriptadoU)
    
var textoDesencriptadoMostrado = document.getElementById("msg");
    
textoDesencriptadoMostrado.value = desencriptadoU;

    


})






