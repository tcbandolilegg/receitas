
json = JSON.parse(localStorage.getItem("json"))

const userLogin = document.querySelector("#userLogin");
const senhaLogin = document.querySelector("#senhaLogin");
const botaoLogin = document.querySelector("#botaoLogin");


botaoLogin.addEventListener('click', (event) => {
  const emailGlobal = userLogin.value
  const senhaGlobal = senhaLogin.value
  const idUserGlobal = 0
  verificaUser(emailGlobal, senhaGlobal, idUserGlobal)
})

function verificaUser(emailGlobal, senhaGlobal, idUserGlobal) {

  const fimArquivo = json.length
  console.log(fimArquivo)
  let contador = 0
  //mudar o forEach pelo filter
  // let novoUserTemp = {}
  // novoUserTemp.email = email
  // novoUserTemp.senha = senha

  // const novoUser = JSON.stringify(novoUserTemp)

  // fetch(localhost: 3000 / login / emailGlobal / senhaGlobal, { method: "GET" })
  json.forEach(element => {
    if (element.email == emailGlobal && element.senha == senhaGlobal) {
      // como  enviar o email e o id do user???
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






