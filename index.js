function obterMedia() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;

  if (a === "" || b === "" || c === "") {
    alert("Preencha todos os campos!");
    return false;
  }

  if (a <= '0' || b <= '0' || c <= '0') {  
    alert("Numero invalido!");
    return false;
  }
  var media = (a + b + c) / 3;

  document.getElementById("resultado").innerHTML = "Resultado: " + media;
}
