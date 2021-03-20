let idUserGlobal = localStorage.getItem("idUserGlobal");
let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))
let dataCadernos = JSON.parse(localStorage.getItem("dataCadernos"))
let dataCategorias = JSON.parse(localStorage.getItem("dataCategorias"))
let dataReceitas = JSON.parse(localStorage.getItem("dataReceitas"))
console.log('chegando Valor de id', idUserGlobal)

function localizaUser(userTeste) {
  console.log('User ID', userTeste.id)
  console.log('User Global', idUserGlobal)
  if (userTeste.id == idUserGlobal) {
    console.log('ENCONTREI DENTRO DA FUNCTON', userTeste)
    return userTeste
  }
}

const userPerfil = dataUsers.filter(localizaUser)
console.log('usuário encontrado', userPerfil)
console.log(userPerfil[0].nome)
console.log(userPerfil[0].email)
console.log(userPerfil[0].sexo)
console.log(userPerfil[0].foto)


const dadosUser = document.querySelector('#dadosUserPerfil')
dadosUser.style.dysplay = "flex"
dadosUser.style.flexDirection = 'column'

const divUserDados = document.createElement('div');
divUserDados.classList.add('userDados')

const divUserDescricao = document.createElement('div')
divUserDescricao.classList.add('userDescrecao')

const espaco = document.createElement('br')
console.log(divUserDados)

const imageFrame = document.createElement('img')
imageFrame.src = userPerfil[0].foto
imageFrame.style.height = "100px"
imageFrame.style.borderRadius = "50%"
imageFrame.classList.add('image-perfil')
console.log(imageFrame)

const nameUser = document.createElement('h2')
nameUser.innerHTML = userPerfil[0].nome
nameUser.classList.add('nameUser')
console.log(nameUser)

const email = document.createElement('p')
email.innerHTML = userPerfil[0].email
email.classList.add('email')
console.log(email)


const botaoEditarPerfil = document.createElement('button')
botaoEditarPerfil.innerHTML = 'Editar Perfil'
botaoEditarPerfil.classList.add('botaoLaranja')

const botaoCriarReceitas = document.createElement('button')
botaoCriarReceitas.innerHTML = 'Criar Receitas'
botaoCriarReceitas.classList.add('botaoLaranja')


const divCadernos = document.createElement('div')
divCadernos.classList.add('divCadernos')
divCadernos.style.justifyContent = 'space-around'

const divReceitas = document.createElement('div')
divReceitas.classList.add('divRceitas')
divReceitas.style.justifyContent = 'space-around'



dataCadernos.forEach(element => {
  console.log('No foreach dos cadernos')
  console.log('element idUser', element.idUser)
  console.log(idUserGlobal)
  if (element.idUser = idUserGlobal) {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAachei caderno')
    const entradaCaderno = document.createElement('p')
    entradaCaderno.classList.add('cadernos')

    entradaCaderno.innerHTML = 'Família: ' + element.descricao + '........Origem: ' + element.origem
    divCadernos.appendChild(entradaCaderno)
  } else {
    console.log('Deus ruiiiiiiiiiiiiiiiiiiiiiiiiiiin no forEach')
  }

});

const botaoCriarCaderno = document.createElement('button')
botaoCriarCaderno.innerHTML = 'Criar Caderno'
botaoCriarCaderno.classList.add('botaoLaranja')


dataReceitas.forEach(element => {
  console.log('No foreach dos cadernos')
  console.log('element idUser', element.idUser)
  console.log(idUserGlobal)

  if (element.id_user = idUserGlobal) {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAachei receita')
    const entradaReceita = document.createElement('p')
    entradaReceita.classList.add('receitas')
    entradaReceita.innerHTML = element.nome_receita + ' da ' + element.quem_criou_receita
    divReceitas.appendChild(entradaReceita)

  } else {
    console.log('Deus ruiiiiiiiiiiiiiiiiiiiiiiiiiiin no forEach')
  }

});


divUserDescricao.appendChild(espaco)
divUserDescricao.appendChild(nameUser)
divUserDescricao.appendChild(email)

divUserDados.appendChild(imageFrame)
divUserDados.appendChild(divUserDescricao)
divUserDados.appendChild(espaco)
console.log(divUserDados)

dadosUser.appendChild(divUserDados)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(botaoEditarPerfil)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(divCadernos)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(botaoCriarCaderno)
dadosUser.appendChild(divReceitas)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(espaco)
dadosUser.appendChild(botaoCriarReceitas)

console.log(dadosUser)


// }




