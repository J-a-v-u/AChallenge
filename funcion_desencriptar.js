
function desencriptarLetra (regla, letra, texto) {
          var desencriptado = texto.replaceAll(regla, letra);
          return desencriptado;

}



function desencriptar (){ 
        event.preventDefault();
        cambiarTextoD();
        comprobar();
        var capturarTextoADesencriptar = document.querySelector("#input-texto");       

        if(textoValido){
                var desencriptadoA = desencriptarLetra('ai', 'a', capturarTextoADesencriptar.value);
                // console.log (capturarTextoADesencriptar.value)
                var desencriptadoE = desencriptarLetra('enter', 'e', desencriptadoA);
                var desencriptadoI = desencriptarLetra('imes', 'i', desencriptadoE);
                var desencriptadoO = desencriptarLetra('ober', 'o', desencriptadoI);
                var desencriptadoU = desencriptarLetra('ufat', 'u', desencriptadoO);
                console.log (desencriptadoU)
                
                var textoDesencriptadoMostrado = document.getElementById("msg");
                
                textoDesencriptadoMostrado.value = desencriptadoU;
        }
        else{}
    }

