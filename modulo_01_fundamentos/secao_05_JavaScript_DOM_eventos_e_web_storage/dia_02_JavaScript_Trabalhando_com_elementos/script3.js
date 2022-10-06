// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

let pai = document.querySelector('#pai');
console.log(pai);

let filhos = pai.childNodes;
console.log(filhos);

for (let index = filhos.length - 1; index >= 0; index -= 1) {
  let filho = filhos[index];
  if (filho.id !== 'elementoOndeVoceEsta') {
    filho.remove();
  }
}
console.log(filhos);

let ultimaRemocao = document.querySelector('#segundoEUltimoFilhoDoFilho');
ultimaRemocao.remove();
console.log(document.querySelector('#elementoOndeVoceEsta'));
