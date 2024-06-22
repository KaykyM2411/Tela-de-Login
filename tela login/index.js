function logar(){
    var login = document.getElementById('Usuario').value;
    var senha = document.getElementById('Senha').value;

    if(login == "usuario" && senha == "123456"){
        alert('Login realizado com sucesso!');
        location.href = "home.html";
    }else{
        alert('Usuario ou senhas incorretos');
    }
}