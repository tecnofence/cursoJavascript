console.log("***************** PARADIGM ***********")

// Sintaxe Literal
// Menos Descritiva
const empresa = "Alura"
const fundacao = 2005;
console.log(empresa, typeof empresa, empresa.constructor)
console.log("Fundação", fundacao)


// Sintaxe OOP = Programação Orientado a Objectos
// Mais Descritiva
const company =  new String("Alura")
console.log(company, typeof company)

const igualdade = company === empresa;
console.log(igualdade)

// API - Sao todos recursos que transformação o dado
// API String

console.dir(String.prototype)



// API Number

console.dir(Number.prototype)