let CreationTableauLangages =  () => {
    let langages = ["Html","CSS","Java","PHP"];
    return langages;
}

let CreationTableauNombres =  () => {
    let nombres = [0,1,2,3,4,5];
    return nombres;
}

let RemplacementElement =  (langages) => {
    let remplacement = langages;
    langages[2] = "Javascript";
    return remplacement;
}

let AjoutElementLangages =  (langages) => {
    let ajout = langages.push("Ruby", "Python");
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    let ajout = nombres.unshift(-2, -1);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    let first = langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    let last = langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(",");
    return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
    let conversion = langages.join(",");
    return conversion;
}

let TriTableau =  (reseaux_sociaux) => {
    let sort = reseaux_sociaux.sort();
    return sort;
}

let InversionTableau =  (reseaux_sociaux) =>{
    let reverse = reseaux_sociaux.reverse();
    return reverse;
}
