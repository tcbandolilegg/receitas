let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))
let dataCadernos = JSON.parse(localStorage.getItem("dataCadernos"))
let dataReceitas = JSON.parse(localStorage.getItem("dataReceitas"))
let dataCategorias = JSON.parse(localStorage.getItem("dataCategorias"))

const userCadastro = document.querySelector("#userCadastro");
const nomeCadastro = document.querySelector("#nomeCadastro")
const emailCadastro = document.querySelector("#emailCadastro")
const senhaCadastro = document.querySelector("#senhaCadastro")
const senhaCadastroConfirma = document.querySelector("#senhaCadastroConfirma")

const botaoSalvarUserCadastro = document.querySelector("#botaoSalvarUserCadastro");

botaoSalvarUserCadastro.addEventListener('click', (event) => {
  const userCadastroGlobal = userCadastro.value
  const nomeCadastroGlobal = nomeCadastro.value
  const emailCadastroGlobal = emailCadastro.value
  const senhaCadastroGlobal = senhaCadastro.value
  const senhaCadastroConfirmaGlobal = senhaCadastroConfirma.value
  const idUserGlobal = 0


  verificaUser(userCadastroGlobal, nomeCadastroGlobal, emailCadastroGlobal, senhaCadastroConfirma, senhaCadastroConfirmaGlobal)
})

function verificaUser(userCadastroGlobal, nomeCadastroGlobal, emailCadastroGlobal, senhaCadastroGlobal, senhaCadastroConfirmaGlobal) {

  const fimArquivo = dataUsers.length
  let contador = 0

  // let novoUserTemp = {}
  // novoUserTemp.email = email
  // novoUserTemp.senha = senha
  // const novoUser = JSON.stringify(novoUserTemp)


  dataUsers.forEach(element => {
    if (element.userLogin == userCadastroGlobal || element.email == emailCadastroGlobal) {
      alert('Usuário já existe')
    } else {
      contador = contador + 1
      if (contador == fimArquivo) {
        const novoId = ('_' + Date())
        console.log(novoId)

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
        dataUsers.push(UserTemp)
        localStorage.setItem("dataUsers", JSON.stringify(dataUsers))
        console.log(dataUsers)
        window.location.href = "/frontEnd/pages/perfil.html"

      }
    }
  });
  return idUserGlobal
}

// module.exports = verificaUser()






