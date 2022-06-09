function obterMedia() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);


  var media = (a + b + c) / 3;
  
  document.getElementById("resultado").innerHTML = "Resultado: " + media;
   if (a,b,c == "" || a,b,c == null) {
    alert("Preencha todos os campos!");
    return false;
  }
 
}



