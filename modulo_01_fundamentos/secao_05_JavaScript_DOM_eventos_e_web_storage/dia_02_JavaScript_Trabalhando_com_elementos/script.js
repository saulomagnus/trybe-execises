// Acesse o elemento elementoOndeVoceEsta.

let element = document.getElementById("elementoOndeVoceEsta");
console.log(element);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

element.parentElement.style.color = "blue";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

element.firstElementChild.innerText = 'Olá! Sou o Primeiro Filho do Filho';

// Acesse o primeiroFilho a partir de pai.

let element2 = document.getElementById("pai");
console.log(element2.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

console.log(element.previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

console.log(element.nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(element.nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai.

console.log(element2.firstElementChild.nextElementSibling.nextElementSibling);

