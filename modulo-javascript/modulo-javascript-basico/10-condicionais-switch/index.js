//  switch(parametro){
//      case valor1:
//          <bloco de declaração>
//          break
//      case valor2:
//          <bloco de declaração>
//          break
//      default:
//          <bloco de ação>
//  }

let nomeFilme = 'Senhor dos Anéis'

switch(nomeFilme){
    case 'Vingadores':
        console.log('É o filme dos vingadores')
        break
    case 'Batman Vs Superman':
        console.log('É o filme do Batman Vs Superman')
        break
    case 'Senhor dos Anéis':
        console.log('É o filme do Senhor dos Anéis')
        break
    default:
        console.log('É outro filme')
        break
}



let avaliacao = 5

switch(avaliacao){
    case 1:
    case 2:
        console.log('Filme ruim')
        break
    case 3:
    case 4:
        console.log('Filme mediano')
        break
    case 5:
        console.log('Excelente')
        break
    default:
        console.log('Nota Inválida')
        break
}