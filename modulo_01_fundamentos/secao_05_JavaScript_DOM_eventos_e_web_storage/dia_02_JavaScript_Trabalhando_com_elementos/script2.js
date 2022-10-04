// Crie um irmão para elementoOndeVoceEsta.

let elementPai = document.querySelector('#pai');
console.log(elementPai);

let newElement = document.createElement('section');
newElement.id = 'irmaoElementoOndeVoceEsta';
console.log(newElement);

elementPai.appendChild(newElement);
console.log(elementPai);

// Crie um filho para elementoOndeVoceEsta.

let beElement = document.querySelector('#elementoOndeVoceEsta');
console.log(beElement);

let newChild = document.createElement('section');
newChild.id = 'filhoElementoOndeVoceEsta';
console.log(newChild);

beElement.appendChild(newChild);
console.log(beElement);

// Crie um filho para primeiroFilhoDoFilho.

let firstSonOfSon = document.querySelector('#primeiroFilhoDoFilho');
console.log(firstSonOfSon);

let sonFirstSonOfSon = document.createElement('section');
sonFirstSonOfSon.id = 'filhoDoPrimeiroFilhoDoFilho';
console.log(sonFirstSonOfSon);

firstSonOfSon.appendChild(sonFirstSonOfSon);
console.log(firstSonOfSon);

// A partir desse filho criado, acesse terceiroFilho.

let acesso = sonFirstSonOfSon.parentElement.parentElement.nextElementSibling;
console.log(acesso);
