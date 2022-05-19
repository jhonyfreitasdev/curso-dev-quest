let frutas = ['banana', 'maça', 'laranja', 'pêra']

// for(let i = 0; i < frutas.length; i++){
//     console.log('Frutas: ' + frutas[i])
// }

frutas.forEach(function(item, indice, array){
    console.log('Frutas: ' + item);
})

frutas.unshift('goiaba')//adiciona um item no começo do array
frutas.push('manga')    //adiciona um item no final do array
frutas.pop()            //excluí o último item do array
frutas.shift()          //excluí o primeiro item do array

console.log(frutas.indexOf('laranja'));




