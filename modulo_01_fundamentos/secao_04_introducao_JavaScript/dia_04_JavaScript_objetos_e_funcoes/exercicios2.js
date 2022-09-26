// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

let palindromo = "anna";
let index = 0;
let invertedWord = "";

function verificaPalindrome (nome) {
  for (index = 1; index <= nome.length; index += 1) {
    invertedWord += nome[nome.length - index];
  }
  if (nome === invertedWord) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome(palindromo));



// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

let teste = [2, 3, 6, 7, 10, 1];
index = 1;

function verificaIndice(caixa) {
  let indiceMaior = 0;
  for (index = 1; index < caixa.length; index += 1) {
    if (caixa[index] > caixa[indiceMaior]) {
      indiceMaior = index;
    }
  }
  return indiceMaior;
}

console.log(verificaIndice(teste));



// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

let teste2 = [2, 4, 6, 7, 10, 0, -3];
index = 0;

function verificaIndice(caixa) {
  let indiceMenor = 0;
  for (index = 0; index < caixa.length; index += 1) {
    if (caixa[index] < caixa[indiceMenor]) {
      indiceMenor = index;
    }
  }
  return indiceMenor;
}

console.log(verificaIndice(teste2));



// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let teste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
index = 0;

function verificaNome(caixa) {
  let maiorNome = caixa[0];
  for (index = 0; index < caixa.length; index += 1) {
    if (caixa[index].length > maiorNome.length) {
      maiorNome = caixa[index];
    }
  }
  return maiorNome;
}

console.log(verificaNome(teste3));



// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

let test4 = [2, 3, 2, 5, 8, 2, 3];

function repetition (box) {
  let itemsArray = [];
  let frequencyArray = [];
  let contador = 0;
  let maiorFrequencia = 0;
  
  let orderedArray = test4.sort();
  
  orderedArray.unshift("a");
  
  for (let index = 1; index < orderedArray.length; index += 1) {
    if (orderedArray[index] !== orderedArray[index - 1]) {
      if (orderedArray[index] === orderedArray[index + 1]) {
        for (let index2 = index + 1; index2 < orderedArray.length; index2 += 1) {
          if (orderedArray[index] === orderedArray[index2]) {
            contador += 1;
          }
        }
        itemsArray.push(orderedArray[index]);
        frequencyArray.push(contador + 1);
        contador = 0;
      } else {
        itemsArray.push(orderedArray[index]);
        frequencyArray.push(1);
        contador = 0;
      }
    }
  }
  
  for (index = 1; index < frequencyArray.length; index += 1) {
    if (frequencyArray[index] > frequencyArray[maiorFrequencia]) {
      maiorFrequencia = frequencyArray[index];
    }
  }
  
  return itemsArray[maiorFrequencia];
  
}

console.log("O inteiro que mais se repete é o " + repetition(test4));




// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let test5 = 5;

function somatorio (a) {
  let soma = 0;
  for (index = 1; index <= a; index += 1) {
    soma += index;
  }
  return soma;
}

console.log(somatorio(test5));



// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

let word = "joaofernando";
let final = "fernan";

function verificaFimPalavra (a, z) {
  let verificacao = 0;
  for (index = 0; index < z.length; index += 1) {
    if (z[z.length - index - 1] !== a[a.length - index - 1]) {
      verificacao += 1;
    }
  }

  if (verificacao === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaFimPalavra(word, final));



