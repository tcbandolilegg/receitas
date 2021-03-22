let idUserGlobal = localStorage.getItem('idUserGlobal');
let dataUsers = JSON.parse(localStorage.getItem('dataUsers'))
let dataCadernos = JSON.parse(localStorage.getItem('dataCadernos'))
let dataCategorias = JSON.parse(localStorage.getItem('dataCategorias'))
let dataReceitas = JSON.parse(localStorage.getItem('dataReceitas'))


function localizaUser(userTeste) {

  if (userTeste.id == idUserGlobal) {

    return userTeste
  }
}

const userPerfil = dataUsers.filter(localizaUser)
console.log(userPerfil)


const dadosUser = document.querySelector('#dadosUserPerfil')
dadosUser.style.dysplay = 'flex'
dadosUser.style.flexDirection = 'column'




const divUserDados = document.createElement('div');
divUserDados.classList.add('userDados')
divUserDados.style.display = 'flex'
divUserDados.style.flexWrap = 'wrap'
divUserDados.style.marginBottom = '20px'



const divUserFoto = document.createElement('div');
divUserFoto.classList.add('divFotoUser')

const divUserDescricao = document.createElement('div')
divUserDescricao.classList.add('userDescrecao')
divUserDescricao.style.marginLeft = '50px'
divUserDescricao.style.display = 'flex'
divUserDescricao.style.flexDirection = 'column'
// divUserDescricao.style.alignItems = 'center'
divUserDescricao.style.justifyItems = 'center'
divUserDescricao.style.justifyContent = 'left'
divUserDescricao.style.alignSelf = 'center'


const espaco = document.createElement('br')


const fotoUser = document.createElement('img')
console.log(userPerfil[0].foto)

fotoUser.src = userPerfil[0].foto
fotoUser.style.height = '100px'
fotoUser.style.borderRadius = '50%'
fotoUser.classList.add('imagePerfil')


const nameUser = document.createElement('h2')
nameUser.innerHTML = userPerfil[0].nome
nameUser.classList.add('nameUser')


const email = document.createElement('p')
email.innerHTML = userPerfil[0].email
email.classList.add('emailUser')



const botaoEditarPerfil = document.createElement('button')
botaoEditarPerfil.innerHTML = 'Editar Perfil'
botaoEditarPerfil.classList.add('botaoLaranja')




const divCadernos = document.createElement('div')
divCadernos.classList.add('divCadernos')
divCadernos.style.justifyContent = 'space-around'

const tituloCaderno = document.createElement('h2')
tituloCaderno.style.fontSize = 'large'
tituloCaderno.style.fontWeight = 'bold'
tituloCaderno.style.textAlign = 'center'
tituloCaderno.style.marginBottom = '10px'
tituloCaderno.innerHTML = 'Meus Cadernos'

let contadorCadernos = 0
const fimArquivoCadernos = dataCadernos.length

dataCadernos.forEach(element => {
  if (element.idUser == idUserGlobal) {
    const entradaCaderno = document.createElement('p')

    entradaCaderno.classList.add('cadernos')
    entradaCaderno.style.marginBottom = '5px'
    entradaCaderno.innerHTML = element.descricao + ' de origem ' + element.origem
    divCadernos.appendChild(entradaCaderno)
  } else {
    contadorCadernos = contadorCadernos + 1
    if (contadorCadernos == fimArquivoCadernos) {
      const entradaCaderno = document.createElement('p')
      entradaCaderno.classList.add('cadernos')
      entradaCaderno.style.marginBottom = '5px'
      entradaCaderno.innerHTML = 'Não Possui cadernos cadastrados'
      divCadernos.appendChild(entradaCaderno)
    }
  }

});

const botaoCriarCaderno = document.createElement('button')
botaoCriarCaderno.innerHTML = 'Criar Caderno'
botaoCriarCaderno.classList.add('botaoLaranja')



const divReceitas = document.createElement('div')
divReceitas.classList.add('divRceitas')
divReceitas.style.justifyContent = 'space-around'

const tituloReceita = document.createElement('h2')
tituloReceita.style.fontSize = 'large'
tituloReceita.style.fontWeight = 'bold'
tituloReceita.style.textAlign = 'center'
tituloReceita.style.marginBottom = '10px'

tituloReceita.innerHTML = 'Minhas Receitas'

const fimArquivoReceitas = dataReceitas.length
let contadorReceitas = 0
dataReceitas.forEach(element => {



  if (element.idUser == idUserGlobal) {
    const entradaReceita = document.createElement('p')
    entradaReceita.classList.add('receitas')
    entradaReceita.style.marginBottom = '5px'
    entradaReceita.innerHTML = element.nome_receita + ' da ' + element.quem_criou_receita
    divReceitas.appendChild(entradaReceita)

  } else {
    contadorReceitas = contadorReceitas + 1
    if (contadorReceitas == fimArquivoReceitas) {
      const entradaReceita = document.createElement('p')
      entradaReceita.classList.add('receitas')
      entradaReceita.style.marginBottom = '5px'
      entradaReceita.innerHTML = 'Não possui receitas cadastradas'
      divReceitas.appendChild(entradaReceita)
    }
  }

});


const botaoCriarReceitas = document.createElement('button')
botaoCriarReceitas.innerHTML = 'Criar Receitas'
botaoCriarReceitas.classList.add('botaoLaranja')


divUserFoto.appendChild(fotoUser)

divUserDescricao.appendChild(nameUser)
divUserDescricao.appendChild(email)
divUserDescricao.appendChild(espaco)

divUserDados.appendChild(divUserFoto)
divUserDados.appendChild(divUserDescricao)

dadosUser.appendChild(divUserDados)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(botaoEditarPerfil)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)

dadosUser.appendChild(tituloCaderno)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(divCadernos)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(botaoCriarCaderno)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)

dadosUser.appendChild(tituloReceita)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(divReceitas)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(botaoCriarReceitas)





botaoEditarPerfil.addEventListener('click', (event) => {
  botaoEditarPerfil.style.display = 'none'
})

botaoCriarCaderno.addEventListener('click', (event) => {
  window.location.href = "/frontEnd/pages/cadastroCaderno.html"

})

botaoCriarReceitas.addEventListener('click', (event) => {
  window.location.href = "/frontEnd/pages/cadastroReceita.html"
})




botaoCriarReceitas










