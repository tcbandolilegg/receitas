let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))
let dataReceitas = JSON.parse(localStorage.getItem("dataReceitas"))
let dataCategorias = JSON.parse(localStorage.getItem("dataCategorias"))
let dataCadernos = JSON.parse(localStorage.getItem("dataCadernos"))

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
const fotoReceita = document.querySelector("#fotoReceita");



const botaoSalvarReceita = document.querySelector("#botaoSalvarReceita");



botaoSalvarReceita.addEventListener('click', (event) => {
  const nomeReceitaGlobal = nomeReceita.value
  const quemCriouGlobal = quemCriou.value
  const ingredientesGlobal = ingredientes.value
  const modoDePreparoGlobal = modoDePreparo.value
  const historiaReceitaGlobal = historiaReceita.value
  const fotoReceitaGlobal = fotoReceita.value

  verificaReceita(nomeReceitaGlobal, quemCriouGlobal, ingredientesGlobal, historiaReceitaGlobal, modoDePreparoGlobal, fotoReceitaGlobal, idUserGlobal)

})

const comboBoxEscolheCaderno = document.querySelector('#selectCaderno')
const tituloSelectCaderno = document.createElement('p')
tituloSelectCaderno.style.fontSize = 'larger'

const selectCaderno = document.createElement('select')
selectCaderno.style.width = '200px'



const comboBoxEscolheCaderno = document.querySelector('#comboBoxEscolheCaderno')


comboBoxEscolheCaderno.addEventListener('click', (event) => {
  numeroCadernos = dataCadernos.length

  for (i = 0; i < numeroCadernos; i++) {
    option = document.createElement('option')
    option.value = dataCadernos[i].id + ' - ' + dataCadernos[i].descricao + ' - ' + dataCadernos[i].origem
    comboBoxEscolheCaderno.add(option, comboBoxEscolheCaderno.options[i])
  }

  for (i = 0; i < numeroCadernos; i++) {
    comboBoxEscolheCaderno.removeChild
  }

})



function verificaReceita(nomeReceitaGlobal, quemCriouGlobal, ingredientesGlobal, historiaReceitaGlobal, fotoReceitaGlobal, modoDePreparoGlobal, idUserGlobal) {
  const fimArquivo = dataReceitas.length
  let contador = 0

  dataReceitas.forEach(element => {

    if (element.quem_criou_receita.toUpperCase() == quemCriouGlobal.toUpperCase() && element.nome_receita.toUpperCase() == nomeReceitaGlobal.toUpperCase()) {
      alert('Este Receita já existe')
      window.location.href = "/frontEnd/pages/perfil.html"
    } else {
      contador = contador + 1
      if (contador === fimArquivo) {

        const novoId = ('_' + Date())
        console.log(novoId)
        localStorage.setItem("idReceitaGlobal", novoId);

        const receitaTemp = {
          id: novoId,
          // idCaderno: ,
          idUser: idUserGlobal,
          quem_criou_receita: quemCriouGlobal,
          foto: fotoReceitaGlobal,
          // categoria: 0,
          nome_receita: nomeReceitaGlobal,
          ingredientes: ingredientesGlobal,
          modo_preparo_texto: modoDePreparoGlobal,
          // modo_preparo_audio: "",
          data_insercao: Date(),
          numero_de_visualizacoes: 0
        }

        dataReceitas.push(receitaTemp)
        localStorage.setItem("dataReceitas", JSON.stringify(dataReceitas))
        console.log(dataReceitas)
        window.location.href = "/frontEnd/pages/perfil.html"
      }
    }
  });

}


