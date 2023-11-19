let adultos = prompt('Quantos adultos que bebem álcool? ');
let adultosSemAlchool = prompt('Quantos adultos que não bebem álcool? ');
let criancas = prompt('Quantas crianças tem churrasco? ');

let adultosTotal = Number(adultos) + Number(adultosSemAlchool);
let totalPessoas = Number(adultosTotal) + Number(criancas);
let totalCarne = Number((0.2 * criancas)) + Number((0.4 * adultosTotal));
let acompanhamentos = 0.2 * totalPessoas;
let cerveja = adultos * 2;
let refrigerante = totalPessoas * 0.5;
let agua = totalPessoas * 0.4;

if (adultosTotal === 0) {
    alert('Não é possível fazer um churrasco sem adultos responsáveis!');
} else {
    alert(`A quantidade de carne necessária será ${totalCarne.toFixed(2)}KG`);
    alert(`A quantidade de acompanhamentos necessários será de ${acompanhamentos.toFixed(2)}KG`);
    alert(`A quantidade de cerveja necessária será de ${cerveja.toFixed(2)}L`);
    alert(`A quantidade de refrigerante necessário será de ${refrigerante.toFixed(2)}L`);
    alert(`A quantidade de água necessária será de ${agua.toFixed(2)}L`);
}