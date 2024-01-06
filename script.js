function main() {
  const letras = {
    v: "#089C30",
    x: "#FF0000",
  };

  // Obtem todos os inputs e adiciona um event listener em cada um.
  for (input of document.getElementsByTagName("input")) {
    input.addEventListener("input", muestra_color);
  }

  function muestra_color(event) {
    const input = event.target; // Obtem o input correspondete ao evento.
    const valor = input.value.toLowerCase(); // Obtem o valor do input em lowercase.

    // Atualiza a cor do input caso o valor corresponda a um dos compos do objeto "letras".
    // Caso o valor nao corresponda a nenhuma letra, atualiza a cor para uma string vazia.
    input.style.color = letras[valor] ?? "";
  }
}

main();

