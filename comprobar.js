

var textoValido = Boolean();
function comprobar(){
  //  var textoValido = true;

        if (document.getElementById("input-texto").value=="") {
            alert("Por favor, escriba un mensaje para encriptar/desencriptar!")
            textoValido=false;
            document.getElementById("msg").value= "..."
            return textoValido;
}
        
        var filtro1=/^[a-z\_\-\.\s\xF1\xD1]+$/;

            if (filtro1.test(document.getElementById("input-texto").value)){

                textoValido=true;
                return textoValido;
            }
            
        var filtro2=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
                if (filtro2.test(document.getElementById("input-texto").value)){
                //alert("Tiene mayusculas")
                textoValido=false;
                document.getElementById("msg").value = "..."
                cambiarMayPorMin();
                return textoValido;
            }

            
            
            else{
                alert("No se permiten numeros, caracteres especiales ni acentos!")
                textoValido=false;
                document.getElementById("msg").value= "..."
                return textoValido;
            }
}



