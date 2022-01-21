

function encriptar (){
        event.preventDefault();
        cambiarTextoE(); 
        comprobar();
         var capturarTextoAEncriptar = document.querySelector("#input-texto");

        if(textoValido){
                    var textoAEncriptar= capturarTextoAEncriptar.value;
                    let letras = textoAEncriptar.split('')
                    var textoEncriptado = []
                    // console.log(letras);
                // event.preventDefault;

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
          
                }
        else{};

     }