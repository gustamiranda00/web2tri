let peso = 70; 
let altura = 1.75; 


let imc = peso / (altura * altura);

 
if (imc < 18.5) {
    console.log(`IMC: ${imc.toFixed(2)} - Abaixo do peso`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`IMC: ${imc.toFixed(2)} - Peso normal`);
} else if (imc >= 25 && imc < 30) {
    console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`);
} else {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade`);
}