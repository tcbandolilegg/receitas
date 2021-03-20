
let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))
console.log('no login', dataUsers)

const userLogin = document.querySelector("#userLogin");
const senhaLogin = document.querySelector("#senhaLogin");
const botaoLogin = document.querySelector("#botaoLogin");
const botaoEsqueciSenha = document.querySelector("#botaoEsqueciSenha");
const botaoNaoTenhoLogin = document.querySelector("#botaoNaoTenhoLogin");




botaoLogin.addEventListener('click', (event) => {
  const emailGlobal = userLogin.value
  const userLoginGlobal = userLogin.value
  const senhaGlobal = senhaLogin.value
  const idUserGlobal = 0
  verificaUser(emailGlobal, senhaGlobal, userLoginGlobal, idUserGlobal)
})


function verificaUser(emailGlobal, senhaGlobal, userLoginGlobal, idUserGlobal) {

  const fimArquivo = dataUsers.length
  console.log(fimArquivo)
  let contador = 0

  dataUsers.forEach(element => {
    console.log('email do array', element.email)
    console.log('email do imput', emailGlobal)
    console.log('senha do array', element.senha)
    console.log('senha do imput', senhaGlobal)

    console.log('user do array', element.userLogin)
    console.log('user do imput', emailGlobal)

    if (((element.email.toUpperCase()) == (emailGlobal.toUpperCase()) && (element.senha.toUpperCase()) == (senhaGlobal.toUpperCase())) || ((element.userLogin.toUpperCase()) == (userLoginGlobal.toUpperCase()) && (element.senha.toUpperCase()) == (senhaGlobal.toUpperCase()))) {
      console.log('ACHEI')
      console.log('idUserGlobal', idUserGlobal)
      idUserGlobal = element.id
      localStorage.setItem("idUserGlobal", idUserGlobal);
      window.location.href = "/frontEnd/pages/perfil.html"
    } else {
      contador = contador + 1
      if (contador == fimArquivo) {
        alert('Usuário senha inválidos')
      }
    }
  });
  return idUserGlobal
}

// module.exports = verificaUser()






