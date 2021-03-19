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
  // const botaoSalvarUserCadastroGlobal = botaoSalvarUserCadastro.value
  const nomeCadastroGlobal = nomeCadastro.value
  const emailCadastroGlobal = emailCadastro.value
  const senhaCadastroGlobal = senhaCadastro.value
  const senhaCadastroConfirmaGlobal = senhaCadastroConfirma.value
  const idUserGlobal = 0

  verificaUser(userCadastroGlobal, emailCadastroGlobal)
})

function verificaUser(userCadastroGlobal, nomeCadastroGlobal, emailCadastroGlobal, senhaCadastroGlobal, senhaCadastroConfirmaGlobal) {
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
    } else {
      const novoId = json.length + 1
      localStorage.setItem("idUserGlobal", novoId);

      const UserTemp = {
        id: novoId,
        userLogin: userCadastroGlobal,
        nome: nomeCadastroGlobal,
        cpf: "",
        rg: "",
        data_nasc: "",
        sexo: "",
        mae: "",
        pai: "",
        email: emailCadastroGlobal,
        foto: "/frontend/src/assets/images/users/augusto.png",
        senha: senhaCadastroGlobal
      }
      json.push(UserTemp)

      window.location.href = "/frontEnd/pages/perfil.html"
      contador = contador + 1
      if (contador == fimArquivo) {
        alert('Usuário senha inválidos')
      }
    }
  });
  return idUserGlobal
}

// module.exports = verificaUser()






