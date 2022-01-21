

function cambiarMayPorMin(){
        if (confirm("Usted uso al menos una letra mayúscula, desea convertir el texto a solo minúsculas?") == true) {

            var textoEnMay = document.querySelector("#input-texto")
            var tMstr = textoEnMay.value.toString();
            document.querySelector("#input-texto").value = tMstr.toLowerCase();

                } 
        else {
            document.querySelector("#input-texto").value = "...";
                }

      }
