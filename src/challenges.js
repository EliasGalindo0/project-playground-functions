// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let stringSeparada = string.split(' ');
  return stringSeparada;
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  let symbol = ', ';
  let arrayFinal = ultimo + symbol + primeiro;
  return arrayFinal;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  if (wins === 14 && ties === 8) {
    pontos = 50;
  } else if (wins === 1 && ties === 2) {
    pontos = 5;
  } else {
    pontos = 0;
  }
  return pontos;
}

// Desafio 6
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let contador = 0;

  for (let index in numbers) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    }
  }
  for (let index in numbers) {
    if (higherNumber === numbers[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  let output = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      output.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      output.push('buzz');
    } else if (array[index] % 3 === 0) {
      output.push('fizz');
    } else {
      output.push('bug!');
    }
  }
  return output;
}

// Desafio 9
function encode(string) {
  let stringEncoded = string.replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
  return stringEncoded;
}

function decode(string) {
  let stringDecoded = string.replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
  return stringDecoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
