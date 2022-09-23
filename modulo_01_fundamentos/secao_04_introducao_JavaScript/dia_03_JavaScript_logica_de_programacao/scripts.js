// Soma todos os números até 100

let sum = 0;

for (let index = 1; index <= 100; index += 1) {
  sum += index;
}

console.log(sum);



// Exibe o fatorial de 10

let fatorial = 1;

for (index = 1; index <= 10; index += 1) {
  fatorial *= index;
}

console.log(fatorial);



// Inverte as letras de uma palavra

let word = "tryber";
let wordInverted = "";

for (index = 0; index < word.length; index += 1) {
  wordInverted += word[word.length - 1 - index];
}

console.log(wordInverted);



// Retorna a maior palavra do array

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";

for (index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}

console.log(maiorPalavra);



// Retorna a menor palavra do array

let menorPalavra = array[0];

for (index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}

console.log(menorPalavra);



// Retorna o maior número primo entre 2 e 50

let divisores = 0;
let maiorPrimo = 0;

for (index = 2; index <= 50; index += 1) {
  for (let index2 = 1; index2 <= index; index2 +=1) {
    if (index % index2 == 0) {
      divisores += 1;
    }
  }
  if (divisores == 2) {
    maiorPrimo = index;
  }
  divisores = 0;
}

console.log(maiorPrimo);



// Retorna os números primos até um valor determinado

let divisores2 = 0;
let primos = [];
let teto = 50;

for (index = 2; index <= teto; index += 1) {
  for (index2 = 1; index2 <= index; index2 +=1) {
    if (index % index2 == 0) {
      divisores2 += 1;
    }
  }
  if (divisores2 == 2) {
    primos.push(index);
  }
  divisores2 = 0;
}

console.log(primos);



// Escreve quadrado de asteriscos a partir de um número dado

let lado = 5;
let asterisco = "";

for (index = 1; index <= lado; index += 1) {
  asterisco += "*";
}
for (index = 1; index <= lado; index +=1) {
  console.log(asterisco);
}



// Escreve um triângulo retângulo com base de um número dado

let base = 5;
let linha = "";

for (index = 1; index <= base; index += 1) {
  linha += "*";
  console.log(linha);
}



// Escreve um triâguo invertido

let chao = 5;
let space = "";
let asterisk = "";

for (index = 1; index <= chao; index += 1) {
  for (index2 = 1; index2 <= chao - index; index2 +=1) {
    space += " ";
  }
  for (index2 = space.length; index2 < chao; index2 +=1) {
    asterisk += "*";
  }
  console.log(space + asterisk);
  space = "";
  asterisk = "";
}



// Faz uma pirâmide com n asteriscos de base

let basis = 7;
let before = "";
let piramid = "";

let half = (basis - 1) / 2;

for (index = 1; index <= half; index += 1) {
  before += " ";
}
console.log(before + "*");
before = "";

for (index = 1; index <= half; index += 1) {
  for (index2 = 1; index2 <= half - index; index2 +=1) {
    before += " ";
  }
  for (index2 = before.length; index2 < half; index2 +=1) {
    piramid += "*";
  }
  console.log(before + piramid + "*" + piramid);
  before = "";
  piramid = "";
}




