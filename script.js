const input = document.getElementById("idad");

const idade = input;


function verificando() {
    
if (idade.value == "") {

} else if (idade.value < 16) {
    alert('Não Vota')
} else if (idade.value < 18 || idade.value > 65) {
    alert('voto opcional')
} else {
 alert('voto obrigatorio')
    
}

    
}



