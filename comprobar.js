/*
let text;
if (confirm("Press a button!") == true) {
  text = "You pressed OK!";
} else {
  text = "You canceled!";
}

*/


var textoValido = Boolean();
function comprobar(){
  //  var textoValido = true;
        
        var filtro1=/^[a-z\_\-\.\s\xF1\xD1]+$/;

            if (filtro1.test(document.getElementById("input-texto").value)){
               // alert("Es puro texto")
                textoValido=true;
                return textoValido;
            }
            
        var filtro2=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
                if (filtro2.test(document.getElementById("input-texto").value)){
                alert("Tiene mayusculas")
                textoValido=false;
                document.getElementById("msg").value = "..."
                return textoValido;
            }
            
            else{
                alert("No es texto")
                textoValido=false;
                document.getElementById("msg").value= "..."
                return textoValido;
            }
}



