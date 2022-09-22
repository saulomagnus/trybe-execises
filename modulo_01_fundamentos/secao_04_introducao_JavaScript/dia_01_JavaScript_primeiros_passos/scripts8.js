// Questão 1 - Cinco programas com as cinco operações aritméticas

let a = 10;
let b = 2;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);



// Questão 2 - Retorna o maior valor entre dois números

let valorA = 25;
let valorB = 25;

if (valorA > valorB) {
  console.log(valorA);
} else if (valorA < valorB) {
  console.log(valorB);
} else {
  console.log("Ambos os valores são iguais");
}



// Questão 3 - Retorna o maior valor entre três números

let valorX = 8;
let valorY = 8;
let valorZ = 8;

if (valorX > valorY) {
  if (valorX > valorZ) {
    console.log(valorX);
  } else if (valorZ > valorX) {
    console.log(ValorZ);
  } else {
    console.log("Há dois números com o maior valor: ", valorX);
  }
} else if (valorY > valorX) {
  if (valorY > valorZ) {
    console.log(valorY);
  } else if (valorZ > valorY) {
    console.log(valorZ);
  } else {
    console.log("Há dois números com o maior valor: ", valorY);
  }
} else {
  if (valorZ > valorX) {
    console.log(valorZ);
  } else if (valorX > valorZ) {
    console.log("Há dois números com o maior valor: ", valorX);
  } else {
    console.log("Os três números são iguais");
  }
}



// Questão 4 - Identificando números positivos

let numPositivo = 0;

if (numPositivo > 0) {
  console.log("O número é positivo");
} else if (numPositivo < 0) {
  console.log("O número é negativo");
} else {
  console.log("O número é zero");
}



// Questão 5 - Identificando os ângulos de um triângulo

let angulo1 = 90;
let angulo2 = 45;
let angulo3 = 90;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Pelo menos um dos ângulos é inválido");
} else if (angulo1 + angulo2 + angulo3 === 180) {
  console.log("Os ângulos são válidos para formar um triângulo");
} else {
  console.log("Não é possível formar um triângulo a partir desses ângulos");
}



// Questão 6 - Identificando as peças do xadrez

let pecaDeXadrez = "Leaf";
pecaLowerCase = pecaDeXadrez.toLowerCase();

switch (pecaLowerCase) {
  case "king":
    console.log("king -> single square");
    break;
  case "queen":
    console.log("queen -> lines, columns or diagonals");
    break;
  case "rook":
    console.log("rook -> lines or columns");
    break;
  case "bishop":
    console.log("bishop -> diagonals");
    break;
  case "knight":
    console.log("knight -> three squares that do not form a line");
    break;
  case "pawn":
    console.log("pawn -> single square, straight ahead");
    break;
  default:
    console.log("that's not a valid piece");
}



// Questão 7 - Notas de conceito

notaAluno = 92;

if (notaAluno > 100 || notaAluno < 0) {
  console.log("A nota apresentada não é válida");
} else if (notaAluno >= 90) {
  console.log("O aluno apresenta conceito A");
} else if (notaAluno >= 80) {
  console.log("O aluno apresenta conceito B");
} else if (notaAluno >= 70) {
  console.log("O aluno apresenta conceito C");
} else if (notaAluno >= 60) {
  console.log("O aluno apresenta conceito D");
} else if (notaAluno >= 50) {
  console.log("O aluno apresenta conceito E");
} else {
  console.log("O aluno apresenta conceito F");
}



// Questão 8 - Há um par entre nós

const num1 = 50;
const num2 = 9;
const num3 = 13;

let verificacaoPar = (num1 % 2) + (num2 % 2) + (num3 % 2)

if (verificacaoPar < 3) {
  console.log("Há pelo menos um par entre nós");
} else {
  console.log("Não há números pares entre os citados");
}



// Questão 9 - Há um ímpar entre nós

const num4 = 218;
const num5 = 670;
const num6 = 10;

let verificacaoImpar = (num4 % 2) + (num5 % 2) + (num6 % 2)

if (verificacaoImpar == 0) {
  console.log("Não há números ímpares entre os citados");
} else {
  console.log("Há pelo menos um ímpar entre nós");
}



// Questão 10 - Programa de valores e produtos

const custo = 300;
const venda = 800;
const imposto = custo * 0.2;

let lucroMil = (venda - custo - imposto) * 1000;

if (custo < 0 || venda < 0) {
  console.log("Pelo menos um dos valores apresentados não é válido");
} else {
  console.log("O lucro em mil vendas é de ", lucroMil);
}



// Questão 11 - O líquido do salário

const salarioBruto = 10000;
let inss = 0;
let salarioBase = 0;
let ir = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.9;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}

salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase <= 2826.65) {
  ir = salarioBase * 0.075 - 142.80;
} else if (salarioBase <= 3751.05) {
  ir = salarioBase * 0.15 - 354.80;
} else if (salarioBase <= 4664.68) {
  ir = salarioBase * 0.225 - 636.13;
} else {
  ir = salarioBase * 0.275 - 869.36;
}

salarioLiquido = salarioBase - ir;

console.log(salarioLiquido);

