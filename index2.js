// inicio do desafio de Calculadora de Partidas Rankeadas 

// definição de variaveis

let vitorias = 200
let derrotas = 41
let saldoVitorias = somar(vitorias , derrotas)

// criando função 

function somar(vitorias , derrotas){
    return  vitorias - derrotas;
}

 
 //condições para rankeamento de acordo com saldo de vitorias

if (saldoVitorias <10){

    nivel = "ferro"
}
else if (saldoVitorias >= 10 && saldoVitorias <= 20){
    nivel = "Bronze"
}

else if (saldoVitorias >= 21 && saldoVitorias<= 50){
    nivel = "Prata"
}

else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "Ouro"
}
else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Diamante"
}
else if (saldoVitorias>= 91 && saldoVitorias <= 100){
    nivel = "Lendário"
}

else if (saldoVitorias >= 101){
    nivel = "Imortal"
}
// Mensagem de saída 

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
