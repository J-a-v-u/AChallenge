
/*
function cambiarTextoE(){
    var texVar = document.querySelector("#texto-variante");
    texVar.classList.add("fadeOut");
    setTimeout(function (){
       texVar.classList.add("fadeIn");
      document.getElementById("texto-variante").innerHTML = "Texto encriptado: <br>  <br>";
    },550);
   
}
*/


/*
function cambiarTextoE(){
  var texVar = document.querySelector("#texto-variante");
  //texVar.classList.add("fadeOut");
  texVar.classList.toggle("fadein", true);
  setTimeout(function (){
     texVar.classList.toggle("fadeIn", true);
    document.getElementById("texto-variante").innerHTML = "Texto encriptado: <br>  <br>";
  },550);
 
}


*/

function cambiarTextoE(){
  var texVar = document.querySelector("#texto-variante");
 texVar.classList.remove("fadeIn");
 texVar.classList.add("fadeOut");
  setTimeout(function (){
     texVar.classList.add("fadeIn");
    document.getElementById("texto-variante").innerHTML = "Texto encriptado: <br>  <br>";
  },500);
 
}

function cambiarTextoD(){
  var texVar = document.querySelector("#texto-variante");
  texVar.classList.remove("fadeIn");
  texVar.classList.add("fadeOut");
  setTimeout(function(){
      texVar.classList.add("fadeIn");
      document.getElementById("texto-variante").innerHTML = "Texto desencriptado: <br>  <br>";
       },500);

}
function cambiarTextoC(){
  var texVar = document.querySelector("#texto-variante");
  texVar.classList.remove("fadeIn");
  texVar.classList.add("fadeOut");
  setTimeout(function(){
      texVar.classList.add("fadeIn");
      document.getElementById("texto-variante").innerHTML = "Texto copiado! <br>  <br>";
       },500);

}