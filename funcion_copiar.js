
 function copy() {
    cambiarTextoC()
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
  }
    
  document.querySelector("#botonCopiar").addEventListener("click", copy);


