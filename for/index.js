// Utilizando o for crie um programa que calcule a função log Math.log(x) para cada valor do contador.
// Este programa deve solicitar os valores iniciais, finais e de incremento. E também escrever na tela o
// resultado

var valorInicial = Number(window.prompt('informe valor inicial'))
var valorFinal = Number(window.prompt('informe valor final'))
var valorIncremento = Number(window.prompt('informe valor do incremento'))

for(let i = valorInicial; i < valorFinal; i+= valorIncremento) {
   console.log(Math.log(i))
}

