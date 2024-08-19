const userName1 = prompt("Digite seu nome de usuário:");
const password = prompt("Digite uma senha: ");
localStorage.setItem(password, userName1);

const teste = localStorage.getItem(password)
alert(teste)
