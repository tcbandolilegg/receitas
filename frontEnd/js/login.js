
const userDigitado = document.querySelector(".formContato name");
const emailDigitado = document.querySelector(".formContato email");
const botaoLogin = document.querySelector(".formContato login");

botaoLogin.addEventListener('click', (event) => {
  verificaUser(name, email)
})
