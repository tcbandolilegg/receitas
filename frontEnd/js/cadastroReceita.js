let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))
let dataReceitas = JSON.parse(localStorage.getItem("dataReceitas"))
let idUserGlobal = localStorage.getItem('idUserGlobal');
console.log(dataUsers)
console.log(dataReceitas)

const nomeFamilia = document.querySelector("#nomeFamilia");
const origemFamilia = document.querySelector("#origemFamilia");
const convidaMembros = document.querySelector("#convidaMembros");

const botaoSalvarCaderno = document.querySelector("#botaoSalvarCaderno");


botaoSalvarCaderno.addEventListener('click', (event) => {
  const nomeFamiliaGlobal = nomeFamilia.value
  const origemFamiliaGlobal = origemFamilia.value
  const convidaMembrosGlobal = convidaMembros.value

  verificaCaderno(nomeFamiliaGlobal, origemFamiliaGlobal, convidaMembrosGlobal, idUserGlobal)

})

document.getElementById("botaoEscolheCaderno").onclick = function () {
  var comboCidades = document.getElementById("cboCidades");

  var opt0 = document.createElement("option");
  opt0.value = "0";
  opt0.text = "";
  comboCidades.add(opt0, comboCidades.options[0]);

  var opt1 = document.createElement("option");
  opt1.value = "scs";
  opt1.text = "São Caetano do Sul";
  comboCidades.add(opt1, comboCidades.options[1]);

  var opt2 = document.createElement("option");
  opt2.value = "sa";
  opt2.text = "Santo André";
  comboCidades.add(opt2, comboCidades.options[2]);

  var opt3 = document.createElement("option");
  opt3.value = "sbc";
  opt3.text = "São Bernardo do Campo";
  comboCidades.add(opt3, comboCidades.options[3]);

};






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



