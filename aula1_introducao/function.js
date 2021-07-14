console.log("***************** Functions ***********")

// Camada de Armazenamento
// Sintase
/*
instrucao();

*/

// prompt();
// prompt("Qual o seu nome?");
// prompt("Qual a sua idade?", "Qual o seu apelido")

//Declaração de Função Nomeada

function multiplicar(a=0, b=0) {
 const result = a * b;
 return result;
}

//Executar a função
console.log(multiplicar(5));
console.log(multiplicar(5, 4));

// Declaração de Funcão Anônima

const multiply = function (x =0, y=0) {
  return x*y;

}

console.log(multiply());
console.log(multiply(5));
console.log(multiply(5, 4));
