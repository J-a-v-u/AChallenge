
 function copy() {
    cambiarTextoC()
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
    
  }

  document.querySelector("#botonCopiar").addEventListener("click", copy);


  function paste() {
    var pasteText = document.querySelector("#msg").value;
    console.log(pasteText);
    document.querySelector("#input-texto").value = pasteText;
  }
  
  document.querySelector("#botonPegar").addEventListener("click", paste);





