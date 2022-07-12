function verifica_idade(){

    let idade = parseInt(document.getElementById("n1").value);
    let text = "";

    if(idade >= 18){
        text = "Você pode tirar carteira de motorista!";
    }else{
        text = "Você não pode tirar carteira de motorista!";
    }

    document.getElementById("resp").innerHTML = text;

}

function verifica_altura(){

    let altura = parseInt(document.getElementById("n2").value);
    let text = "";

    if(altura >= 1,55){
        text = "Você pode se alistar no exército!";
    }else{
        text = "Você não pode se alistar no exército!";
    }

    document.getElementById("resp").innerHTML = text;

}

function verifica_peso(){

    let peso = parseInt(document.getElementById("n3").value);
    let text = "";

    if(peso >= 50){
        text = "Você pode doar sangue!";
    }else{
        text = "Você não pode doar sangue!";
    }

    document.getElementById("resp").innerHTML = text;

}