function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return b !== 0 ? a / b : 'Divisão por zero não é permitida';
}

console.log("Soma:", soma(5, 3));
console.log("Subtração:", subtracao(10, 4));
console.log("Multiplicação:", multiplicacao(7, 6));
console.log("Divisão:", divisao(20, 5));