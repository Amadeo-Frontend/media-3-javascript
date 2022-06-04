function obterMedia() {
    var c = parseInt(document.getElementById("c").value);
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    var media = (a + b + c) / 3;

    document.getElementById("resultado").innerHTML = "Resultado: " + media;
  }