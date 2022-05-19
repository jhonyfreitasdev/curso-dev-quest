// const calcularAnoDeNacimento = function (idade, mesNascimento, imprimir){
//     const mesAtual = 5
//     let anoDeNascimento = 2022 - idade
//     if(mesNascimento > mesAtual) anoDeNascimento--
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log('Seu ano de nascimento é: ' + anoDeNascimento);
// }

// calcularAnoDeNacimento(22, 7, imprimirAnoDeNascimento)


function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadriplicar = multiplicar(4)

console.log(dobrar(5));

// function dobrar(numero){
//     return numero * 2
// }

// function triplicar(numero){
//     return numero * 3
// }

// function quadruplicar(numero){
//     return numero * 4
// }
