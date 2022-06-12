let campos = document.querySelectorAll(".campos")
let botaoEnviar = document.getElementById("btn-enviar");
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let mensagem = document.getElementById("mensagem");
let avisoObrigatorio = document.querySelectorAll(".obrigatorio");

campos.forEach(function(campo){
    campo.addEventListener('change', function(){
        if(campo.value !== ""){
            campo.classList.add("valido");
            campo.classList.remove("invalido");
        }else{
            campo.classList.remove("valido");
        }
    });
});

botaoEnviar.addEventListener('click', function(){
    campoVazio = ""
    if(nome.value === campoVazio){
        nome.classList.add("invalido")
        avisoObrigatorio[0].classList.add("invalido")
    }else{
        nome.classList.remove("invalido")
        avisoObrigatorio[0].classList.remove("invalido")
        nome.classList.add("valido")
        console.log('ta entrando');
    }

    if(email.value === campoVazio){
        email.classList.add("invalido")
        avisoObrigatorio[1].classList.add("invalido")
    }else{
        email.classList.remove("invalido")
        avisoObrigatorio[1].classList.remove("invalido")
        email.classList.add("valido")
        console.log('ta entrando');
    }

    if(telefone.value === campoVazio){
        telefone.classList.add("invalido")
        avisoObrigatorio[2].classList.add("invalido")
    }else{
        telefone.classList.remove("invalido")
        avisoObrigatorio[2].classList.remove("invalido")
        telefone.classList.add("valido")
        console.log('ta entrando');
    }

    if(mensagem.value === campoVazio){
        mensagem.classList.add("invalido")
        avisoObrigatorio[3].classList.add("invalido")
    }else{
        mensagem.classList.remove("invalido")
        avisoObrigatorio[3].classList.remove("invalido")
        mensagem.classList.add("valido")
        console.log('ta entrando');
    }
});



// botaoEnviar.addEventListener('click', function(){
//     campos.forEach(function(campo){
//         if(campo.value === ""){
//             campo.classList.add("invalido");
//             const idDeReferenciaInvalida = campo.id;
//                 if(idDeReferenciaInvalida === 'nome'){
//                     avisoObrigatorio[0].classList.add("invalido");
//                 }else if(idDeReferenciaInvalida === "email"){
//                     avisoObrigatorio[1].classList.add("invalido");
//                 }else if(idDeReferenciaInvalida === "telefone"){
//                     avisoObrigatorio[2].classList.add("invalido");
//                 }else if(idDeReferenciaInvalida === "mensagem"){
//                     avisoObrigatorio[3].classList.add("invalido");
//                 };
//         }else{
//             campo.classList.remove("invalido");
//             avisoObrigatorio[0].classList.remove("invalido");
//         };
//     });
// });




