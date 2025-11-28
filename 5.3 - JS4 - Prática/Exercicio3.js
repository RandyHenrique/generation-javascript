
let salarioBruto = 2000.00;
let adicionalNoturno = 500.00;
let horasExtras = 100.00;
let descontos = 200.00;

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Salário Líquido: " + salarioLiquido.toFixed(2));
