var idUserGlobal = localStorage.getItem("idUserGlobal");
console.log('chegandoValor', idUserGlobal)

const json = [
  {
    "id": "01",
    "nome": "Thereza Cristina Bandoli Legg",
    "idade": 54,
    "cpf": "807.761.393-47",
    "rg": "15.688.649-2",
    "data_nasc": "23/03/1966",
    "sexo": "Feminino",
    "mae": "Sueli Raquel Elisa",
    "pai": "Luiz Elias Ryan Farias",
    "email": "tcbandolilegg@gmail.com",
    "foto": "/frontEnd/src/assets/images/users/thereza.png",
    "senha": "1aaaaaa"
  },
  {
    "id": "02",
    "nome": "Norylaine de Oliveira Mangueira",
    "idade": 31,
    "cpf": "177.747.859-65",
    "rg": "22.068.984-2",
    "data_nasc": "06/08/1990",
    "sexo": "Masculino",
    "mae": "Aurora Rafaela",
    "pai": "Miguel Joaquim da Paz",
    "email": "iago@teste.com",
    "foto": "",
    "senha": "2bbbbbb"
  },
  {
    "id": "03",
    "nome": "Bruno Edson da Mota",
    "idade": 42,
    "cpf": "573.893.972-76",
    "rg": "16.236.517-2",
    "data_nasc": "02/07/1979",
    "sexo": "Masculino",
    "mae": "Luciana Daniela",
    "pai": "Erick Nathan da Mota",
    "email": "bruno@teste.com",
    "foto": "",
    "senha": "3cccccc"
  },
  {
    "id": "04",
    "nome": "Alexandre Enzo Assis",
    "idade": 64,
    "cpf": "728.865.360-91",
    "rg": "24.440.386-7",
    "data_nasc": "11/10/1957",
    "sexo": "Masculino",
    "mae": "Laís Luzia Liz",
    "pai": "Isaac Gabriel João Assis",
    "email": "alexandre@teste.com",
    "foto": "",
    "senha": "4dddddd"
  },
  {
    "id": "05",
    "nome": "Augusto Bryan Ruan Fernandes",
    "idade": 73,
    "cpf": "307.452.059-09",
    "rg": "30.349.966-7",
    "data_nasc": "06/11/1948",
    "sexo": "Masculino",
    "mae": "Clarice Ayla Rita",
    "pai": "Oliver Daniel Gustavo Fernandes",
    "email": "augusto@teste.com",
    "foto": "",
    "senha": "5eeeeee"
  }
]



function localizaUser(userTeste) {
  if (userTeste.id === idUserGlobal) {
    return userTeste
  }
}

const userPerfil = json.filter(localizaUser)
console.log('usuário encontrado', userPerfil)
console.log(userPerfil[0].nome)
console.log(userPerfil[0].email)
console.log(userPerfil[0].sexo)


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




