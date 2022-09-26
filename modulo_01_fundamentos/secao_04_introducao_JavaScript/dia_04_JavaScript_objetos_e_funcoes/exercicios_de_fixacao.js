// Criar um variável player e atribua um objeto contendo as variáveis listadas abaixo:


let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

console.log(player);



// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names) {
  console.log("Olá " + names[index]);
}



// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (index in car) {
  console.log(index + ": " + car[index]);
}



// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let num1 = 10;
let num2 = 5;

function adicao (a, b) {
  return a + b;
}

function subtracao (a, b) {
  return a - b;
}

function multiplicacao (a, b) {
  return a * b;
}

function divisao (a, b) {
  return a / b;
}

function modulo (a, b) {
  return a % b;
}

console.log(adicao(num1, num2));
console.log(subtracao(num1, num2));
console.log(multiplicacao(num1, num2));
console.log(divisao(num1, num2));
console.log(modulo(num1, num2));



// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

let valor1 = 40;
let valor2 = 40;

function maiorValor (a, b) {
  if (a > b) {
    return "O maior valor é " + a;
  } else if (a < b) {
    return "O maior valor é " + b;
  } else {
    return "Os dois números são iguais";
  }
}

console.log(maiorValor(valor1, valor2));



// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

let numA = 11;
let numB = 11;
let numC = 11;

function maiorNumero (a, b, c) {
  if (a > b) {
    if (a > c) {
      return "O maior valor é " + a;
    } else if (a < c) {
      return "O maior valor é " + c;
    } else {
      return "O maior valor é " + a + ", representado em dois números";
    }
  } else if (a < b) {
    if (b > c) {
      return "O maior valor é " + b;
    } else if (b < c) {
      return "O maior valor é " + c;
    } else {
      return "O maior valor é " + b + ", representado em dois números";
    }
  } else {
    if (a > c) {
      return "O maior valor é " + a + ", representado em dois números";
    } else if (a < c) {
      return "O maior valor é " + c;
    } else {
      return "Os três valores são iguais";
    }
  }
}

console.log(maiorNumero(numA, numB, numC));



// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

let numero = 0;

function verificaPositivo (a) {
  if (a > 0) {
    return a + " é um número positivo";
  } else if (a < 0) {
    return a + " é um número negativo";
  } else {
    return a + " é zero";
  }
}

console.log(verificaPositivo(numero));



// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

const angulo1 = 45;
const angulo2 = 5;
const angulo3 = 90;

function verificaTriangulo (a, b, c) {
  if (a < 0 || b < 0 || c < 0 || a > 360 || b > 360 || c > 360) {
    return "Pelo menos um dos ângulos não é um ângulo válido. Por favor, verifique-os."
  } else if (a + b + c === 180) {
    return "É possível formar um triângulo a partir dos ângulos dados."
  } else {
    return "Não é possível formar um triângulo a partir dos ângulos dados."
  }
}

console.log(verificaTriangulo(angulo1, angulo2, angulo3));


