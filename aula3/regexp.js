console.log("======= REGEXP =======");

/*
Expressões Regulares
Metacaracteres
________________

^ => Inicio da linha
$ => Fim da linha
[] => Lista permitida
[i-f] => Lista permitida(Intervalada)
{q} => Quantificador
\ => Escape
() => AGRUPADOR
\s => Espaço em branco
? Opcional
\d Apenas numeros
{min, max} Quantificador min e ma
\w

CEP_V1: ^[0-9]{5}[\-\s]?[0-9]{3}$
CEP_V2: ^\d{5}[\-1\s]?


*/

// Sintaxe Literal
const regexCep = /^[0-9]{5}[\-\s]?[0-9]{3}$/;

console.log(regexCep, regexCep.constructor);

console.log(regexCep.test("08200-190"));

// Sintaxe OOP

const emailUsuario = "ze@globo.com";
