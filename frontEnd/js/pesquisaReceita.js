let pesquisarGlobal = localStorage.getItem('pesquisarGlobal')
console.log("Cheguei com a pesquisa", pesquisarGlobal)
let dataUsers = JSON.parse(localStorage.getItem('dataUsers'))
let dataCadernos = JSON.parse(localStorage.getItem('dataCadernos'))
let dataCategorias = JSON.parse(localStorage.getItem('dataCategorias'))
let dataReceitas = JSON.parse(localStorage.getItem('dataReceitas'))


console.log('User', dataUsers[1])
console.log('Cadernos', dataCadernos[1])
console.log('Categorias', dataCategorias[1])
console.log('Receitas', dataReceitas[1])













const pagReceitas = document.querySelector('#dadosPesquisaReceitas')

dataReceitas.forEach(element => {


  const sectionReceitas = document.createElement('div')
  sectionReceitas.classList.add('sectionReceitas')
  sectionReceitas.style.marginBottom = '15px'
  sectionReceitas.style.display = 'flex'
  sectionReceitas.style.justifyContent = 'space-around'

  console.log(sectionReceitas)

  const divDadosReceita = document.createElement('div')
  divDadosReceita.classList.add('divDadosReceita')
  divDadosReceita.style.alignContent = 'center'
  divDadosReceita.style.alignItems = 'center'
  divDadosReceita.style.textAlign = 'center'

  console.log(divDadosReceita)

  const cadernoReceita = document.createElement('h1')
  cadernoReceita.classList.add('cadernoReceita')
  cadernoReceita.style.fontSize = 'xx-large'
  cadernoReceita.style.fontWeight = 'bolder'
  cadernoReceita.style.textAlign = 'center'
  let idCadernoTeste = element.idCaderno
  function localizaCaderno(userTeste) {
    // 
    if (userTeste.id == idCadernoTeste) {
      return userTeste.descricao
    }
  }

  const filtraCaderno = dataCadernos.filter(localizaCaderno)

  cadernoReceita.innerHTML = filtraCaderno[0].descricao
  console.log(cadernoReceita)

  const imgReceita = document.createElement('img')
  imgReceita.classList.add('imgReceita')
  imgReceita.src = element.foto
  imgReceita.style.height = '100px'
  imgReceita.style.width = '100px'
  imgReceita.style.borderRadius = '50%'
  console.log(imgReceita)

  const nomeReceita = document.createElement('h2')
  nomeReceita.classList.add('nomeReceita')
  nomeReceita.style.fontSize = 'x-large'
  nomeReceita.style.fontWeight = 'bold'
  nomeReceita.style.textAlign = 'center'
  nomeReceita.innerHTML = element.nome_receita
  console.log(nomeReceita)

  const quemCriouReceita = document.createElement('h3')
  quemCriouReceita.classList.add('nomeReceita')
  quemCriouReceita.style.fontSize = 'x-large'
  quemCriouReceita.style.fontWeight = 'bold'
  quemCriouReceita.style.textAlign = 'center'
  quemCriouReceita.innerHTML = element.quem_criou_receita
  console.log(quemCriouReceita)



  const divIngredientes = document.createElement('div')
  divIngredientes.classList.add('divIngredientes')
  console.log(divIngredientes)

  const tituloIngredientes = document.createElement('h1')
  tituloIngredientes.classList.add('cadernoReceita')
  tituloIngredientes.style.fontSize = 'xx-large'
  tituloIngredientes.style.fontWeight = 'bolder'
  tituloIngredientes.style.textAlign = 'center'
  tituloIngredientes.innerHTML = 'Modo De Preparo'

  const ingredientes = document.createElement('p')
  ingredientes.classList.add('ingredientes')
  ingredientes.style.fontSize = 'normal'
  ingredientes.style.fontWeight = 'normal'
  ingredientes.style.textAlign = 'auto'
  ingredientes.innerHTML = element.ingredientes

  divIngredientes.appendChild(tituloIngredientes)
  divIngredientes.appendChild(ingredientes)

  console.log(ingredientes)

  const divModoDePreparo = document.createElement('div')
  divModoDePreparo.classList.add('divModoDePreparo')
  console.log(divModoDePreparo)

  const tituloPreparo = document.createElement('h1')
  tituloPreparo.classList.add('tituloIngredientes')
  tituloPreparo.style.fontSize = 'xx-large'
  tituloPreparo.style.fontWeight = 'bolder'
  tituloPreparo.style.textAlign = 'center'
  tituloPreparo.innerHTML = 'Modo De Preparo'

  const modoDePreparo = document.createElement('p')
  modoDePreparo.classList.add('modoDePreparo')
  modoDePreparo.style.fontSize = 'normal'
  modoDePreparo.style.fontWeight = 'normal'
  modoDePreparo.style.textAlign = 'auto'
  modoDePreparo.innerHTML = element.modo_preparo_texto

  console.log(modoDePreparo)
  divModoDePreparo.appendChild(tituloPreparo)
  divModoDePreparo.appendChild(modoDePreparo)



  divDadosReceita.appendChild(cadernoReceita)
  divDadosReceita.appendChild(imgReceita)
  divDadosReceita.appendChild(nomeReceita)
  divDadosReceita.appendChild(quemCriouReceita)
  console.log(divDadosReceita)

  sectionReceitas.appendChild(divDadosReceita)
  sectionReceitas.appendChild(divIngredientes)
  sectionReceitas.appendChild(divModoDePreparo)

  console.log(sectionReceitas)

  pagReceitas.appendChild(sectionReceitas)



  const test = [{
    "id": "01",
    "id_caderno": "01",
    "id_user": "01",
    "quem_criou_receita": "Vovó Olga",
    "foto": "https://files.agoramt.com.br/2019/07/bife-parmegiana.jpg",
    "categoria": "01",
    "nome_receita": "Bife à Parmegiana de Forno",
    "ingredientes": "1 ½ xícara (chá) de tomates sem sementes e picados (270 g), Azeite, tomilho, alho, sal e pimenta a gosto,       4 bifes de contra filé temperados com alho, sal e pimenta (450 g),       4 ovos batidos para empanar,       Farinha de rosca para empanar,      4 fatias de presunto (100 g),       8 fatias de muçarela (150 g),       Molho de tomate,      1 kg de tomate,      30 g de manteiga,      Sal e pimenta do reino moída a gosto, 30 g de queijo parmesão ralado",
    "modo_preparo_texto": "Molho de tomate ->       Coloque os tomates em um liquidificador e bata bem. ,      Passe a mistura por uma peneira. ,      Em uma panela, derreta a manteiga e doure os alhos picados e a cebola picada. Despeje o tomate peneirado e leve ao fogo médio apurar por 30 minutos. ,       Tempere com sal e pimenta do reino moída a gosto., Bife - >       1- Em uma tigela, coloque os tomates sem sementes e picados, azeite, tomilho, alho, sal e pimenta a gosto e misture bem. Reserve.,       2- Pegue cada bife de contra filé e passe na mistura de ovos batidos e, em seguida, na farinha de rosca, novamente nos ovos batidos e na farinha de rosca, sem retirar o excesso. Arrume os bifes numa assadeira untada com azeite e leve ao forno médio pré-aquecido a 250°C por 15 minutos. Vire os bifes na assadeira e deixe no forno por mais 15 minutos.,       3- Retire a assadeira do forno e sobre cada bife coloque uma fatia de presunto, uma porção de tomate picado (reservado acima) e 2 fatias de muçarela.,       4- Leve a assadeira novamente ao forno por 10 minutos até derreter o queijo. Retire do forno e sirva em seguida.",
    "modo_preparo_audio": "",
    "data_insercao": "11/03/2021 21:52:00",
    "numero_de_visualizacoes": 0

  }]
})

//   receita.innerHTML = element.descricao + ' de origem ' + element.origem
//   divCadernos.appendChild(entradaCaderno)
// } else {
//   contadorCadernos = contadorCadernos + 1
//     if(contadorCadernos == fimArquivoCadernos) {
//   const entradaCaderno = document.createElement('p')
//   entradaCaderno.classList.add('cadernos')
//   entradaCaderno.style.display = 'flex'
//   entradaCaderno.style.justifyContent = 'center'
//   entradaCaderno.style.marginBottom = '10px'
//   entradaCaderno.innerHTML = 'Não Possui cadernos cadastrados'
//   divCadernos.appendChild(entradaCaderno)
// }
//   }

// });

// const botaoCriarCaderno = document.createElement('button')
// botaoCriarCaderno.innerHTML = 'Criar Caderno'
// botaoCriarCaderno.classList.add('botaoLaranja')



// const divReceitas = document.createElement('div')
// divReceitas.classList.add('divRceitas')
// divReceitas.style.justifyContent = 'space-around'

// const tituloReceita = document.createElement('h2')
// tituloReceita.style.fontSize = 'x-large'
// tituloReceita.style.fontWeight = 'bold'
// tituloReceita.style.textAlign = 'center'
// tituloReceita.style.marginBottom = '10px'

// tituloReceita.innerHTML = 'Minhas Receitas'

// const fimArquivoReceitas = dataReceitas.length
// let contadorReceitas = 0
// dataReceitas.forEach(element => {



//   if (element.idUser == idUserGlobal) {
//     const entradaReceita = document.createElement('p')
//     entradaReceita.classList.add('receitas')
//     entradaReceita.style.marginBottom = '5px'
//     entradaReceita.style.display = 'flex'
//     entradaReceita.style.justifyContent = 'center'
//     entradaReceita.innerHTML = element.nome_receita + ' da ' + element.quem_criou_receita
//     divReceitas.appendChild(entradaReceita)

//   } else {
//     contadorReceitas = contadorReceitas + 1
//     if (contadorReceitas == fimArquivoReceitas) {
//       const entradaReceita = document.createElement('p')
//       entradaReceita.classList.add('receitas')
//       entradaReceita.style.marginBottom = '10px'
//       entradaReceita.style.display = 'flex'
//       entradaReceita.style.justifyContent = 'center'
//       entradaReceita.innerHTML = 'Não possui receitas cadastradas'
//       divReceitas.appendChild(entradaReceita)
//     }
//   }

// });


// const botaoCriarReceitas = document.createElement('button')
// botaoCriarReceitas.innerHTML = 'Criar Receitas'
// botaoCriarReceitas.classList.add('botaoLaranja')


// divUserFoto.appendChild(fotoUser)

// divUserDescricao.appendChild(nameUser)
// divUserDescricao.appendChild(email)


// divUserDados.appendChild(divUserFoto)
// divUserDados.appendChild(divUserDescricao)

// dadosUser.appendChild(divUserDados)


// divBotaoPerfil.appendChild(botaoEditarPerfil)
// dadosUser.appendChild(divBotaoPerfil)



// dadosUser.appendChild(tituloCaderno)

// dadosUser.appendChild(divCadernos)

// divBotaoCaderno.appendChild(botaoCriarCaderno)
// dadosUser.appendChild(divBotaoCaderno)

// dadosUser.appendChild(tituloReceita)

// dadosUser.appendChild(divReceitas)

// divBotaoReceita.appendChild(botaoCriarReceitas)
// dadosUser.appendChild(divBotaoReceita)





// botaoEditarPerfil.addEventListener('click', (event) => {
//   botaoEditarPerfil.style.display = 'none'
// })

// botaoCriarCaderno.addEventListener('click', (event) => {
//   window.location.href = "/frontEnd/pages/cadastroCaderno.html"

// })

// botaoCriarReceitas.addEventListener('click', (event) => {
//   window.location.href = "/frontEnd/pages/cadastroReceita.html"
// })
