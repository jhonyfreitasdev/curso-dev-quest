/*Dica: de nomes para funções que expliquem o que ela faz, e faça funções que faça só uma coisa */


/*
    function nomeDaFuncao(){
        <bloco de execução>
    }

    noDaFuncao()
*/

function incentivarQuester(nomeQuester = 'Quester'){
    alert('Parabéns '+ nomeQuester +', Você chegou ao JS, continue assim')
}

incentivarQuester('Jhony')


function soma(numero1, numero2){
    return numero1 + numero2
}

let resultadoDaSoma = soma(5, 3)
console.log(resultadoDaSoma);

resultadoDaSoma = soma(resultadoDaSoma, 10)
console.log(resultadoDaSoma)