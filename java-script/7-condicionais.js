console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de janeiro"
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possivies");
console.log(listaDeDestinos);

//if (idadeComprador >= 18) {
//console.log("Comprador maior de idade");
//listaDeDestinos.splice(1, 1);
//} else {
// A pessoa é menor de idade
//if (estaAcompanhada) {
// console.log("Comprador está acompanhado");
//listaDeDestinos.splice(1, 1);
//} else {
//console.log("Não é maior de idade e não posso vender");
//}

//}

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem");
    listaDeDestinos.splice(1, 1); //removendo item
}else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);