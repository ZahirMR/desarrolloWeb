function contarLetraO(frase) {
    let count = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'o') {
            count++;
        }
    }
    return count;
}

function obtenerVocales(frase) {
    let vocales = [];
    for (let i = 0; i < frase.length; i++) {
        let char = frase[i].toLowerCase();
        if ('aeiou'.includes(char) && !vocales.includes(char)) {
            vocales.push(char);
        }
    }
    return vocales;
}

function contarVocales(frase) {
    let count = {};
    for (let i = 0; i < frase.length; i++) {
        let char = frase[i].toLowerCase();
        if ('aeiou'.includes(char)) {
            if (count[char]) {
                count[char]++;
            } else {
                count[char] = 1;
            }
        }
    }
    return count;
}

function main() {
    let frase = prompt("Por favor, ingresa una frase:");
    let letraO = contarLetraO(frase);
    let vocales = obtenerVocales(frase);
    let conteoVocales = contarVocales(frase);

    console.log("Cantidad de veces que aparece la letra 'o':", letraO);

    console.log("Vocales que aparecen en la frase:", vocales.join(', '));

    let conteoVocalesString = Object.keys(conteoVocales).map(vocal => vocal + ": " + conteoVocales[vocal]).join(', ');
    console.log("Cantidad de veces que aparece cada vocal:", conteoVocalesString);
}

main();
