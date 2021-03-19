var idUserGlobal = localStorage.getItem("idUserGlobal");
let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))
let dataCadernos = JSON.parse(localStorage.getItem("dataCadernos"))
let dataCategorias = JSON.parse(localStorage.getItem("dataCategorias"))
let dataReceitas = JSON.parse(localStorage.getItem("dataReceitas"))
console.log('chegando Valor de id', idUserGlobal)

// < button class="botaoLaranja" > editar perfil </button >

//   <button class="botaoLaranja">Editar cadernos</button>




function localizaUser(userTeste) {
  if (userTeste.id === idUserGlobal) {
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

const divUserDados = document.createElement('div');
divUserDados.classList.add('userDados')

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


divUserDados.appendChild(imageFrame)
divUserDados.appendChild(nameUser)
divUserDados.appendChild(email)

console.log(divUserDados)

dadosUser.appendChild(divUserDados)


// }




