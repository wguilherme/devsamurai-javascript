while (true) {
   var valor1 = window.prompt()
   var valor2 = window.prompt()

   if (valor1 == 'N' || valor2  == 'N') {
      alert('sua calculadora será encerrada')
      break
   } 
   alert(Number(valor1) + Number(valor2))
} 