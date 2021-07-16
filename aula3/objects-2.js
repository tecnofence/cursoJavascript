console.log("==================== OBJECTS ==================================");

/*

      ----------------------------------
      |                                |
      |        Pessoa                  |
      |                                |
      ----------------------------------



*/

// Sintaxe Literal

const pessoa = {};

// Dot Notation
//objecto.propriedade = valor

pessoa.altura = 1.88;
pessoa.peso = 60;
pessoa.nome = "Manuel";
pessoa.comer = function () {
  return "crac crac ...";
};

// Bracket Notation
pessoa["idade"] = 40;
pessoa["sexo"] = "M";

// OBJECTO [""]
pessoa["falar"] = function () {};

console.log(pessoa);

console.log(pessoa.nome, pessoa.idade, pessoa.comer());
