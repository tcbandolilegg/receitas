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
let contador = 0
const fimArquivo = dataReceitas.length


dataReceitas.forEach(element => {
  let nomePesq = element.nome_receita
  console.log(nomePesq)
  if (nomePesq.indexOf(pesquisarGlobal) > -1) {

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




  } else {
    contador = contador + 1
    console.log(contador, fimArquivo)
    if (contador == fimArquivo) {
      const error = document.createElement('h1')
      error.innerHTML = "Não encontrei valor pesquisado"
      pagReceitas.appendChild(error)
    }
  }

})
