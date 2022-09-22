// Exercício 01 - Obter o valor "Serviços"

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);



// Exercício 02 - Procurar o índice de "Portfólio"

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);



// Exercício 03 - Adicionar o valor "Contato" ao final do menu

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push("Contato");

console.log(menu);



// Exercício 04 - Utilizando o for

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}



// Exercício 05 - Utilizando for of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let elements of names) {
  console.log(elements);
}
