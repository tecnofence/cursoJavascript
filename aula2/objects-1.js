console.log(' ==================== OBJECTS =================');

              /*
              -------------------------------
              |            OBJECTO          |
              -------------------------------
              /                            \
      CARACTERISTICAS                      AÇÕES


              -------------------------------
              |            CARRO          |
              -------------------------------
              /                            \
      CARACTERISTICAS                      AÇÕES
         -> Modelo                     -> ligar()
         -> Ano                        -> desligar()
         -> Km                         -> acelerar()
         -> Motor                      -> freiar()
         -> Cor                        -> darSeta
         -> Placas
         -> Rodas
         -> Combustiveis
         -> Fabricante
         ->

*/

// Sintaxe Literal
const ano = 2020;
const carro = {
 
 modelo: 'Fox',
 ano: ano,
 km: 32000,
 motor: 1.5,
 cor: 'Vermelho',
 placas: 'ABC-1234',
 fabricante: {
   sigla: 'VW',
   nome: 'Volkswagem'
 },
 acessorios: ["ar condicionado", 'multimidia', 
 ' ABS', 'Travas na porta'],
 ligar: function(){
   return 'ON';
 },
 desligar: function(){
   return 'OFF';
 },
 velocidade: 0,
 limites: {
   min: 0,
   max: 150
 },
 ligar: function() {
  return "ON";
},
desligar: function() {
  return "OFF";
},
acelerar: function() {
  if (this.velocidade < this.limites.max) {
    return ++this.velocidade;
  } else {
    return this.velocidade;
  }
},
freiar: function() {
  if (this.velocidade > this.limites.min) {
    return --this.velocidade;
  } else {
    return this.velocidade;
  }
}

};
console.log(carro)

// Dot Notation (Notação de Ponto)
//objeto.propriedade

console.log(carro.modelo, carro.cor);


// Objecto.metodo()

console.log(carro.ligar(), carro.desligar());

// Bracket Notation (Notação de Colchetes)
// Objecto['propriedade']
console.log(carro['modelo'], carro['ano']);

// Objecto ['metodo']()

console.log(carro['ligar'](), carro['desligar']())