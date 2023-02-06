const input="gato";

//encriptador using hashmap
const encriptador = (input) => {
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
};
console.log(encriptador(input));