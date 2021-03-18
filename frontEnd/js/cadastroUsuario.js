const userCadastro = document.querySelector("#userCadastro");
const senhaCadastro = document.querySelector("#senhaCadastro");
const botaoSalvarUserCadastro = document.querySelector("#botaoSalvarUserCadastro");
const userCadastro = document.querySelector("#userCadastro")
const nomeCadastro = document.querySelector("#nomeCadastro")
const emailCadastro = document.querySelector("#emailCadastro")
const senhaCadastro = document.querySelector("#senhaCadastro")
const senhaCadastroConfirma = document.querySelector("#senhaCadastroConfirma")


botaoSalvarUserCadastro.addEventListener('click', (event) => {
  const userCadastroGlobal = userCadastro.value
  const senhaCadastroGlobal = senhaCadastro.value
  const botaoSalvarUserCadastroGlobal = botaoSalvarUserCadastro.value
  const userCadastroGlobal = userCadastro.value
  const nomeCadastroGlobal = nomeCadastro.value
  const emailCadastroGlobal = emailCadastro.value
  const senhaCadastroGlobal = senhaCadastro.value
  const senhaCadastroConfirmaGlobal = senhaCadastroConfirma.value
  const idUserGlobal = 0

  verificaUser(userCadastroGlobal, emailCadastroGlobal)
})

function verificaUser(userCadastroGlobal, emailCadastroGlobal) {
  const fimArquivo = json.length
  let contador = 0
  //mudar o forEach pelo filter
  // let novoUserTemp = {}
  // novoUserTemp.email = email
  // novoUserTemp.senha = senha
  // const novoUser = JSON.stringify(novoUserTemp)
  // fetch(localhost: 3000 / login / emailGlobal / senhaGlobal, { method: "GET" })

  json.forEach(element => {
    if (element.email == emailCadastroGlobal || element.senha == userCadastroGlobal) {
      alert('Usuário já existe')
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






