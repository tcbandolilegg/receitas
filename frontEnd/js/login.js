// async function doFetchAsync() {
//   const res = await fetch('../../backEnd/src/modal/users.json')
//   const json = await res.json()
//   console.log(json)
//   return json
// }
// import { json } from '../../backEnd/src/modal/users.js'
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
    "foto": "",
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


const userLogin = document.querySelector("#userLogin");
const senhaLogin = document.querySelector("#senhaLogin");
const botaoLogin = document.querySelector("#botaoLogin");


botaoLogin.addEventListener('click', (event) => {

  const email = userLogin.value
  const pass = senhaLogin.value
  verificaUser(email, pass)
})

function verificaUser(email, pass) {
  // const json = doFetchAsync()
  const fimArquivo = json.length
  console.log(fimArquivo)
  let contador = 0
  json.forEach(element => {
    if (element.email == email && element.senha == pass) {
      console.log(contador)
      alert('Usuário ok')
      window.location.href = "/frontEnd/pages/perfil.html"

    } else {
      contador = contador + 1
      console.log('contador', contador)
      console.log('fimArquivo', fimArquivo)
      if (contador == fimArquivo) {
        alert('Usuário senha inválidos')
      }
    }
  });
}


