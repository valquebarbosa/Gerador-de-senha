let sliderElement = document.querySelector("#slider"); //pegando o id slider
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let senha = document.querySelector("#password");

let containerSenha = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ0123456789!@#$%&";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerSenha.classList.remove("hide");

    senha.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha)
}

