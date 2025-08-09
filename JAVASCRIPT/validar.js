var nome, email, senha, confsenha, idade, nascimento, telefone, estado;
var genero, interesses, mensagem, perfil, satisfacao, cor;
"https://dontpad.com/segundoanomanha"
// Pega elemento pelo NOME ou ID
function testar() {
    nome = document.getElementById("nome").value;
    if(nome === ("")){
        alert("Campo NOME é OBRIGATÓRIO");
        return false;
    }
    email = document.getElementById("email").value;
    if(email === ("")){
        alert("Campo EMAIL é OBRIGATÓRIO");
        return false;
    }
    senha = document.getElementById("senha").value;
    if(senha === ("")){
        alert("Campo SENHA é OBRIGATÓRIO");
        return false;
    }
    confsenha = document.getElementById("confirmar-senha").value;
    if(confsenha === ("")){
        alert("Campo CONFIRMAR SENHA é OBRIGATÓRIO");
        return false;
    }
    if(confsenha != senha){
        alert("Senha incorreta")
        return false;
    }
    idade = document.getElementById("idade").value;
    nascimento = document.getElementById("data-nascimento").value;
    telefone = document.getElementById("telefone").value;
    estado = document.getElementById("estado").value;
    mensagem = document.getElementById("mensagem").value;
    satisfacao = document.getElementById("satisfacao").value;
    cor = document.getElementById("cor-favorita").value;
    alert("Nome: " + nome + "\n" + "Email: " + email + "\n" + "Senha: " + senha + "\n" + "Idade: " + idade + "\n" + "Nascimento: "+ nascimento + "\n" + "Telefone: " + telefone + "\n" + "Estado: " + estado + "\n" + "Mensagem: " + mensagem + "\n" + "Sastifação: " + satisfacao + "\n" + "Cor: " + cor + "\n");
    // pegando e exibindo o campo GENERO
    genero = document.querySelector('Input[name= "genero"]:checked').value;
    alert("Exibindo o Gênero capturado: " + genero);
    // pegando e exibindo campo INTERESSES
    interesses = [];
    document.querySelectorAll('input[name="interesses"]:checked').forEach(elementos => {interesses.push(elementos.value)});
    alert("Exibindo os interesses capturados: " + interesses.join(", "));
    //pegar o type checkbox
    //Interesses = document.querySelectorAll();
    
    return true;
}

