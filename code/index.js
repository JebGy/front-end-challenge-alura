const input = document.getElementById("input");
const output = document.getElementById("output");
const outputItems = document.getElementsBy
const btnCopiar= document.getElementById("copiar");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");

//validamos que el input no esté vacío
const validarInput = (input) => {
  if (input === "") {
    return "No se aceptan campos vacíos";
  } else {
    output.classList.toggle("hidden-output");
    btnCopiar.classList.toggle("hidden-output");
    return input;
  }
};
//encriptador using hashmap para simplificar el codigo
const encriptador = (input) => {
  //validamos en busca de acentos
  if (/[áéíóú]/.test(input)) {
    return "No se aceptan acentos";
  } else {
    const map = new Map();
    map.set("a", "ai");
    map.set("e", "enter");
    map.set("i", "imes");
    map.set("o", "ober");
    map.set("u", "ufat");
    let output = "";
    for (let i = 0; i < input.length; i++) {
      if (map.has(input[i].toLowerCase())) {
        output += map.get(input[i].toLowerCase());
      } else {
        output += input[i];
      }
    }
    return output;
  }
};

//desencriptar mensaje sin map porque se complica
const descriptador = (input) => {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" && input[i + 1] === "i") {
      output += "a";
      i++;
    } else if (
      input[i] === "e" &&
      input[i + 1] === "n" &&
      input[i + 2] === "t" &&
      input[i + 3] === "e" &&
      input[i + 4] === "r"
    ) {
      output += "e";
      i += 4;
    } else if (
      input[i] === "i" &&
      input[i + 1] === "m" &&
      input[i + 2] === "e" &&
      input[i + 3] === "s"
    ) {
      output += "i";
      i += 3;
    } else if (
      input[i] === "o" &&
      input[i + 1] === "b" &&
      input[i + 2] === "e" &&
      input[i + 3] === "r"
    ) {
      output += "o";
      i += 3;
    } else if (
      input[i] === "u" &&
      input[i + 1] === "f" &&
      input[i + 2] === "a" &&
      input[i + 3] === "t"
    ) {
      output += "u";
      i += 3;
    } else {
      output += input[i];
    }
  }
  return output;
};

btnEncriptar.addEventListener("click", () => {
  let value = encriptador(validarInput(input.value));
  console.log(value);
});
