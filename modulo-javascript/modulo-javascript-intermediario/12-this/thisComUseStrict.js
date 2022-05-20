'use strict'
// console.log(this);
// console.log(window);
// console.log(window === this)

//-----------------------------------------------------

// this.name = 'Jhony'

// function saudar(){
//     console.log('this no contexto da função', this);
//     console.log('Ola, ' + this.name);
// }

// saudar()

//-----------------------------------------------------

// let usuario = {
//     name: 'Jhony', 
//     saudar: function(){
//         console.log('this no contexto do método', this);
//         console.log('this.name no contexto do método ', this.name);
//     }
// }

// usuario.saudar()

//-----------------------------------------------------

let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento){
    console.log('this no contexto do objeto comida', this);
    this.temperatura = temperaturaDeCozimento
}

comida.cozinhar(100)

console.log(comida);

