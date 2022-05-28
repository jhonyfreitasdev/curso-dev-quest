// let valorBoleto = 100;

// console.log(valorBolet);

// console.log(valorBoleto);

//----------------------------------------------

inputTelefone = document.getElementById('telefone');

inputTelefone.disabled = true;

function habilitarTelefone(){
    inputTelefone.disabled = false;
    inputTelefone.value = ""
}

function desabilitarTelefone(){
    inputTelefone.disabled = true;
    inputTelefone.value = "Desabilitado"
}