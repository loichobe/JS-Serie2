
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    return texte.charAt(4);
}
let afficher9Car =  (texte) => {
    return texte.substr(0,9);
}
let majusculeString =  (texte) => {
    let phraseM = "un autre excellent exercice";
    let caps = phraseM.toUpperCase();
    return caps;
}
let minusculeString =  (texte) => {
    let phrasem = "Celui ci aussi!";
    let lower = phrasem.toLowerCase();
    return lower;
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    (typeof value === "string");
    return true;
}

let AfficherExtensionString =  (texte) => {
        return texte.split(".").pop();
    }

let NombreEspaceString =  (texte) => {
    return texte.split(" ").length -1;
}
let InverseString =  (texte) => {
    return texte.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    for (let i=0; i<array.length; i++) {
        array[i] = Math.abs(array[i]);
    }
    return array;
}
let sufaceCercle = (rayon) => {
    let surface = rayon*rayon*Math.PI;
    return Math.round(surface);
    }

let hypothenuse =  (ab, ac) => {
return(Math.sqrt((ab * ab) + (ac * ac)));
}

let calculIMC =  (poids, taille) => {
    let imc = Number (poids/(taille*taille));
    return Math.round(imc*100)/100;
}
