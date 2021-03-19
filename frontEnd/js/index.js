window.addEventListener('load', function () {

  const json = [
    {
      "id": "01",
      "userLogin": "tcbandolilegg",
      "nome": "Thereza Cristina Bandoli Legg",
      "idade": 54,
      "cpf": "807.761.393-47",
      "rg": "15.688.649-2",
      "data_nasc": "23/03/1966",
      "sexo": "Feminino",
      "mae": "Sueli Raquel Elisa",
      "pai": "Luiz Elias Ryan Farias",
      "email": "tcbandolilegg@gmail.com",
      "foto": "/frontend/src/assets/images/users/thereza.png",
      "senha": "1aaaaaa"
    },
    {
      "id": 02,
      "userLogin": "",
      "nome": "Norylaine de Oliveira Mangueira",
      "idade": 31,
      "cpf": "177.747.859-65",
      "rg": "22.068.984-2",
      "data_nasc": "06/08/1990",
      "sexo": "Feminino",
      "mae": "Aurora Rafaela",
      "pai": "Miguel Joaquim da Paz",
      "email": "norylaine@gmail.com",
      "foto": "/frontend/src/assets/images/users/norylaine.png",
      "senha": "2bbbbbb"
    },
    {
      "id": 03,
      "userLogin": "",
      "nome": "Natália Valentim",
      "idade": 42,
      "cpf": "573.893.972-76",
      "rg": "16.236.517-2",
      "data_nasc": "02/07/1979",
      "sexo": "Masculino",
      "mae": "Luciana Daniela",
      "pai": "Erick Nathan da Mota",
      "email": "nati@teste.com",
      "foto": "/frontend/src/assets/images/users/natalia.png",
      "senha": "3cccccc"
    },
    {
      "id": 04,
      "userLogin": "",
      "nome": "Alexandre Enzo Assis",
      "idade": 64,
      "cpf": "728.865.360-91",
      "rg": "24.440.386-7",
      "data_nasc": "11/10/1957",
      "sexo": "Masculino",
      "mae": "Laís Luzia Liz",
      "pai": "Isaac Gabriel João Assis",
      "email": "alexandre@teste.com",
      "foto": "/frontend/src/assets/images/users/alexandre.png",
      "senha": "4dddddd"
    },
    {
      "id": 05,
      "userLogin": "",
      "nome": "Augusto Bryan Ruan Fernandes",
      "idade": 73,
      "cpf": "307.452.059-09",
      "rg": "30.349.966-7",
      "data_nasc": "06/11/1948",
      "sexo": "Masculino",
      "mae": "Clarice Ayla Rita",
      "pai": "Oliver Daniel Gustavo Fernandes",
      "email": "augusto@teste.com",
      "foto": "/frontend/src/assets/images/users/augusto.png",
      "senha": "5eeeeee"
    }
  ]

  localStorage.setItem("json", JSON.stringify(json));

  const btAceitarTermos = document.querySelector("#btAceitarTermos");
  const divAceitarTermos = document.querySelector("#termos");

  console.log(divAceitarTermos)

  btAceitarTermos.addEventListener('click', (event) => {
    divAceitarTermos.style.display = none
  })
});