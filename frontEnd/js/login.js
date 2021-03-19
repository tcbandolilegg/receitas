
let json = JSON.parse(localStorage.getItem("json"))
console.log('no login', json)

const userLogin = document.querySelector("#userLogin");
const senhaLogin = document.querySelector("#senhaLogin");
const botaoLogin = document.querySelector("#botaoLogin");


botaoLogin.addEventListener('click', (event) => {
  const emailGlobal = userLogin.value
  const userLoginGlobal = userLogin.value
  const senhaGlobal = senhaLogin.value
  const idUserGlobal = 0
  verificaUser(emailGlobal, senhaGlobal, userLoginGlobal, idUserGlobal)
})

function verificaUser(emailGlobal, senhaGlobal, userLoginGlobal, idUserGlobal) {

  const fimArquivo = json.length
  console.log(fimArquivo)
  let contador = 0

  json.forEach(element => {
    console.log('email do array', element.email)
    console.log('email do imput', emailGlobal)
    console.log('senha do array', element.senha)
    console.log('senha do imput', senhaGlobal)

    console.log('user do array', element.userLogin)
    console.log('user do imput', emailGlobal)

    if ((element.email == emailGlobal && element.senha == senhaGlobal) || (element.userLogin == userLoginGlobal && element.senha == senhaGlobal)) {
      console.log('ACHEI')
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






