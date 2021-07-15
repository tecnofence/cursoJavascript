console.log("***************** Array ***********")

// Sintaxe Lateral

const carros = ['Gol', 'Fox', 'Up']
console.log(carros, carros.length, carros.constructor);

// Sintaxe OOP

let cars = new Array('Palio', 'Uno', 'Strada');
console.log(cars, cars.length, cars.constructor);


// Utizando a API

cars.push('Fusca'); // Adiciona item no final do Array
cars.unshift('Celta'); // Adiciona item no começo do Array
cars.splice(3, 0, 'Corsa'); // add item na posição X
cars.splice(0, 1, 'Kombi'); // Substitui item na posição X
cars.sort();// Ordena os valors do Array
cars.reverse(); //inverte os valores do array
cars.pop(); // remove ultimo item do array
cars.shift(); // remove primeiro item do array
cars = cars.concat(carros); // Junta 2 ou mais Arays
cars = cars.join("|"); // Transforma o Arra nouma String
cars = cars.split("|"); //transforma string num array

// Estrutura de Repetição
for (let i = 0; i < cars.length; i++) {
  
  console.log(cars[i]);
}
console.log(cars);

// API Array cars.forEach

cars.forEach(function(model, teste){
  // console.log("funciona?", arguments[0], arguments[1])
  console.log(model,teste);
})

// Api (Função Nomeada)
function getCar(model){
  console.log('Funciona?', model);
}
cars.forEach(getCar)