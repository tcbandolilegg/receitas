let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))
let dataReceitas = JSON.parse(localStorage.getItem("dataReceitas"))
let dataCategorias = JSON.parse(localStorage.getItem("dataCategorias"))

let idUserGlobal = localStorage.getItem('idUserGlobal');
console.log(dataUsers)
console.log(dataReceitas)
console.log(dataCategorias)

// const nomeFamilia = document.querySelector("#nomeFamilia");
const nomeReceita = document.querySelector("#nomeReceita");
const quemCriou = document.querySelector("#quemCriou");
const ingredientes = document.querySelector("#ingredientes");
const modoDePreparo = document.querySelector("#modoDePreparo");
const historiaReceita = document.querySelector("#historiaReceita");



const botaoSalvarReceita = document.querySelector("#botaoSalvarReceita");



botaoSalvarCaderno.addEventListener('click', (event) => {
  const nomeFamiliaGlobal = nomeFamilia.value
  const origemFamiliaGlobal = origemFamilia.value
  const convidaMembrosGlobal = convidaMembros.value

  verificaCaderno(nomeFamiliaGlobal, origemFamiliaGlobal, convidaMembrosGlobal, idUserGlobal)

})

document.document.querySelector("#comboBoxEscolheCaderno").onclick = function () {
  numeroCategorias = doDataCategorias.length

  const comboBoxEscolheCaderno = document.querySelector('#comboBoxEscolheCaderno')

  for (i = 0; i < numeroCategorias + 1; i++) {
    option = document.createElement('option')
    option.value = dataReceitas[i].id + ' - ' + dataReceitas[i].descricao + ' - ' + dataReceitas[i].sabor
    comboBoxEscolheCaderno.add(option, comboBoxEscolheCaderno.options[i])
  }



  function verificaCaderno(nomeFamiliaGlobal, origemFamiliaGlobal, convidaMembrosGlobal, idUserGlobal) {
    const fimArquivo = dataReceitas.length
    let contador = 0

    dataReceitas.forEach(element => {

      if (element.descricao.toUpperCase() == nomeFamiliaGlobal.toUpperCase()) {
        alert('Este caderno já existe')
        window.location.href = "/frontEnd/pages/perfil.html"

      } else {
        contador = contador + 1
        if (contador === fimArquivo) {

          const novoId = ('_' + Date())
          console.log(novoId)
          localStorage.setItem("idCadernoGlobal", novoId);

          const cadernoTemp = {
            id: novoId,
            // idCaderno: ,
            // idUser: idUserGlobal,
            // quem_criou_receita: "",
            // foto: "",
            // categoria: ,
            // nome_receita: "",
            // ingredientes: "",
            // modo_preparo_texto: "",
            // modo_preparo_audio: "",
            // data_insercao: Date(),
            // numero_de_visualizacoes: 0
          }

          dataReceitas.push(cadernoTemp)
          localStorage.setItem("dataReceitas", JSON.stringify(dataReceitas))
          window.location.href = `mailto: ${convidaMembrosGlobal}?subject=Acabei de criar o carderno de Receitas, no sistema de Livros de família => ${nomeFamiliaGlobal.toUpperCase()} e quero te convidar`

          console.log(dataReceitas)
          window.location.href = "/frontEnd/pages/perfil.html"

        }
      }
    });

  }



}