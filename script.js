document.addEventListener("DOMContentLoaded", function () {
    // Función para calcular el encogimiento de la tela y dibujar los cuadros
    function calculateAndDrawSquare() {
      var fabricType = document.getElementById("fabric").value;
      var washType = document.getElementById("WashType").value;
      var bwSquareWidth = parseFloat(document.getElementById("BWSquareWidth").value) || 0;
      var bwSquareLength = parseFloat(document.getElementById("BWSquareLength").value) || 0;
      var awSquareWidth = parseFloat(document.getElementById("AWSquareWidth").value) || 0;
      var awSquareLength = parseFloat(document.getElementById("AWSquareLength").value) || 0;

      var bwSquare = document.getElementById("BWSquare");
      bwSquare.style.width = bwSquareWidth + "px";
      bwSquare.style.height = bwSquareLength + "px";
      bwSquare.style.border = "2px solid blue"; // Borde azul
      bwSquare.style.backgroundColor = "transparent"; // Sin relleno

      var awSquare = document.getElementById("AWSquare");
      awSquare.style.width = awSquareWidth + "px";
      awSquare.style.height = awSquareLength + "px";
      awSquare.style.border = "2px solid red"; // Borde rojo
      awSquare.style.backgroundColor = "transparent"; // Sin relleno
    }

    // Manejador de evento para el botón de calcular
    document.querySelector("button[onclick='calculateAndDrawSquare()']").addEventListener("click", calculateAndDrawSquare);
  });