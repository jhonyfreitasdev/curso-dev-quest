function alterarCorDeFundoDoPrimeiroPost(){
    let posts = document.getElementsByClassName('post');
    let primeiroPost = posts[0];

    primeiroPost.style.backgroundColor = 'red'
}

function aumentarFonteSegundoPost(){
    let textoPosts = document.getElementsByClassName('texto-post');

    textoPosts[1].classList.add('fonte-grande')
}

function marcarRadio(genero){
    let radioFeminio = document.getElementById('genero-feminino');
    let radioMasculino = document.getElementById('genero-masculino');

    if(genero === 'F'){
        radioFeminio.checked = true;
    }else if(genero === 'M'){
        radioMasculino.checked = true;
    }
}
