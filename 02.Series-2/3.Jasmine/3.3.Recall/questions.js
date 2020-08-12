let selectElementsStartingWithA = (array) => {
    return array = array.filter(item => item.startsWith("a"));
}

let selectElementsStartingWithVowel = (array) => {
    return array = array.filter(item => ((item.startsWith("a")) || (item.startsWith("e")) || (item.startsWith("i")) || (item.startsWith("o")) || (item.startsWith("u"))));
}

let removeNullElements = (array) => {
    return array = array.filter(item => item != null);
}

let removeNullAndFalseElements = (array) => {
    return array = array.filter(item => ((item !== null) && (item !== false)));
}

let reverseWordsInArray = (array) => {
    return array.map(item => item.split("").reverse().join(""));
}

let everyPossiblePair = (array) => {
    array.sort();
    let pair = [];
    for (let i = 0; i < array.length -1; i++) {
        for (let j = i +1; j < array.length; j++) {
            pair.push([array[i], array[j]]);
        }
    }
    return pair;
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a,b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1));
}

let getFirstHalf = (string) => {
    return string.slice(0, Math.round(string.length/2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let count = 0;
    for (item of array) {
        if (item.split("").reverse().join("") === item) {
            count++;
        }
    }
    return count;
}

let shortestWord = (array) => {
    let word = array[0];
    for (element of array) {
        if (element.length < word.length) {
            word = element;
        }
    }
    return word;
}

let longestWord = (array) => {
    let word = array[0];
    for (element of array) {
        if (element.length > word.length) {
            word = element;
        }
    }
    return word;
}

let sumNumbers = (array) => {
    return array.reduce((a,b) => (a + b));
}

let repeatElements = (array) => {
    array.push(...array);
    return array;
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((a,b) => (a + b)) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0,6);
}

let convertArrayToObject = (array) => {
    let object = {};
    for (let i = 0; i < array.length; i = i + 2) {
        object[array[i]] = array[i+1];
    }
    return object;
}

let getAllLetters = (array) => {
    let all = [];
    array.forEach((element) => {
        for (let i = 0; i < element.length; i++) {
            !all.includes(element[i]) && all.push(element[i]);
        }
    })
    all.sort();
    return all;
}

let swapKeysAndValues = (object) => {
    let item = {};
    Object.keys(object).forEach(key => {
        item[object[key]] = key;
    })
    return item;
}

let sumKeysAndValues = (object) => {
    let key = Object.keys(object).reduce((a,b) => Number(a) + Number(b));
    let value = Object.values(object).reduce((a,b) => a + b);
    return key + value;
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, "");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let day = date.getDate();
    let month = (date.getMonth() +1);
    let year = date.getFullYear();
    return [day, month, year].map(n => n < 10 ? `0${n}` : `${n}`).join('/');
}

let getDomainName = (string) => {
    let url = string.split("@").pop();
    let domain = url.split(".com").shift();
    return domain;
}

let titleize = (string) => {
    let titleize = string.split(" ");
    for (let i = 0; i < titleize.length; i++) {
        if(titleize[i].length > 3 || i === 0 || titleize [i - 1].indexOf(".") > 0) {
            titleize[i] = titleize[i].charAt(0).toUpperCase() + titleize[i].substr(1);
        }
    }
    return titleize.join(" ");
}

let checkForSpecialCharacters = (string) => {
    return /\W/g.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    if(number == 0 || number == 1) {
        return 1;
    } else {
        return number * factorial(number -1);
    }
}

let findAnagrams = (string) => {
    if (string.length < 2) {
        return [string];
    } else {
        let array = [];
        for (let i = 0; i < string.length; i++) {
            let letter = string[i];
            let short = string.substr(0,i) + string.substr(i + 1, string.length - 1);
            let shortarray = findAnagrams(short);
            for (let j = 0; j < shortarray.length; j++) {
                array.push(letter + shortarray[j]);
            }
        }
        return array;
    }
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * (5/9));
}

let letterPosition = (array) => {
    return array.map(letter => (letter.toLowerCase().charCodeAt() -96));
}
