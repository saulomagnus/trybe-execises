// Exercícios do Dia 4.2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



// Percorra o array imprimindo todos os valores contidos

for (let numero of numbers) {
  console.log(numero);
}



// Some todos os valores contidos no array e imprima o resultado

let soma = 0;

for (numero of numbers) {
  soma = soma + numero;
}

console.log(soma);



// Calcula a média aritmética dos elementos do array

let media = soma / numbers.length;

console.log(media);



// Verifica se a média é maior ou menor do que 20

if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}



// Verifica qual o maior valor contido no array

let maiorValor = 0;

for (numero of numbers) {
  if (numero > maiorValor) {
    maiorValor = numero
  }
}
console.log(maiorValor);



// Verifica quantos valores ímpares existem no array

let impares = 0;

for (numero of numbers) {
  if (numero % 2 == 1) {
    impares += 1;
  }
}

if (impares == 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log("Existem " , impares , " números ímpares");
}



// Descobre o menor valor contido no array

let menorValor = numbers[0];

for (numero of numbers) {
  if (menorValor > numero) {
    menorValor = numero;
  }
}

console.log(menorValor);



// Utilizando for, criar um array que vá de 1 a 25

let newArray = [];

for (let index = 0; index < 25; index += 1) {
  newArray.push(index + 1);
}

console.log(newArray);



// Divide cada elemento do array anterior por 2

for (numero of newArray) {
  console.log(numero / 2);
}



// Ordenar um array

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let position;

for (let primeiroIndex = 1; primeiroIndex < numbers2.length; primeiroIndex += 1) {
  for (let segundoIndex = 0; segundoIndex < primeiroIndex; segundoIndex += 1) {
    if (numbers2[segundoIndex] > numbers2[primeiroIndex]) {
      position = numbers2[segundoIndex];
      numbers2[segundoIndex] = numbers2[primeiroIndex];
      numbers2[primeiroIndex] = position;
    }
  }
}

console.log(numbers2);



// Ordena o array em ordem decrescente

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let primeiroIndex = 1; primeiroIndex < numbers3.length; primeiroIndex += 1) {
  for (let segundoIndex = 0; segundoIndex < primeiroIndex; segundoIndex += 1) {
    if (numbers3[segundoIndex] < numbers3[primeiroIndex]) {
      position = numbers3[segundoIndex];
      numbers3[segundoIndex] = numbers3[primeiroIndex];
      numbers3[primeiroIndex] = position;
    }
  }
}

console.log(numbers3);



// Criar um array a partir da multiplicação dos elementos de outro array

let paraOrdenar = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let ordenado = [];

for (let indice = 0; indice < paraOrdenar.length - 1; indice += 1) {
  ordenado.push(paraOrdenar[indice] * paraOrdenar[indice + 1]);
}

ordenado.push(paraOrdenar[paraOrdenar.length - 1] * 2);

console.log(ordenado);


