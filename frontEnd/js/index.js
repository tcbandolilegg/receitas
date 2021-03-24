window.addEventListener('load', function () {
  // let loginTrue = localStorage.getItem('LoginTrueGlobal');
  // if (loginTrue) {
  //   window.location.href = "/frontEnd/pages/perfil.html"
  // } else {
  //   loginTrue = true
  //   loginTrue = localStorage.setItem('LoginTrueGlobal');
  // }
  doDataUsers()
  let dataUsers = JSON.parse(localStorage.getItem("dataUsers"))


  doDataCadernos()
  let dataCadernos = JSON.parse(localStorage.getItem("dataCadernos"))


  doDataReceitas()
  let dataReceitas = JSON.parse(localStorage.getItem("dataReceitas"))


  doDataCategorias()
  let dataCategorias = JSON.parse(localStorage.getItem("dataCategorias"))


  const btAceitarTermos = document.querySelector("#btAceitarTermos");
  const divAceitarTermos = document.querySelector("#termos");



  btAceitarTermos.addEventListener('click', (event) => {
    divAceitarTermos.style.display = 'none'
  })

  doEmAlta()

});

function doDataUsers() {
  const dataUsers = [
    {
      "id": 01,
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
    },
    {
      "id": 06,
      "userLogin": "",
      "nome": "Maria Bethânia Viana Teles Veloso",
      "idade": 74,
      "cpf": "567.984.949-67",
      "rg": "45.894.039-0",
      "data_nasc": "18/06/1946",
      "sexo": "Feminino",
      "mae": "Canô Veloso",
      "pai": "Zeca Veloso",
      "email": "bethania@teste.com",
      "foto": "https://i3.wp.com/farolnews.com.br/wp-content/uploads/2018/07/1_OSL0Xvdt39JMCKdJwcSlrQ-1-1160x640.jpeg",
      "senha": "6ffffff"
    }
  ]

  localStorage.setItem("dataUsers", JSON.stringify(dataUsers));

}

function doDataReceitas() {
  const receitas = [{
    "id": 1,
    "idCaderno": 1,
    "idUser": 1,
    "quem_criou_receita": "Vovó Olga",
    "foto": "https://files.agoramt.com.br/2019/07/bife-parmegiana.jpg",
    "categoria": 1,
    "nome_receita": "Bife à Parmegiana de Forno",
    "ingredientes": "1 ½ xícara (chá) de tomates sem sementes e picados (270 g), Azeite, tomilho, alho, sal e pimenta a gosto,       4 bifes de contra filé temperados com alho, sal e pimenta (450 g),       4 ovos batidos para empanar,       Farinha de rosca para empanar,      4 fatias de presunto (100 g),       8 fatias de muçarela (150 g),       Molho de tomate,      1 kg de tomate,      30 g de manteiga,      Sal e pimenta do reino moída a gosto, 30 g de queijo parmesão ralado",
    "modo_preparo_texto": "Molho de tomate ->       Coloque os tomates em um liquidificador e bata bem. ,      Passe a mistura por uma peneira. ,      Em uma panela, derreta a manteiga e doure os alhos picados e a cebola picada. Despeje o tomate peneirado e leve ao fogo médio apurar por 30 minutos. ,       Tempere com sal e pimenta do reino moída a gosto., Bife - >       1- Em uma tigela, coloque os tomates sem sementes e picados, azeite, tomilho, alho, sal e pimenta a gosto e misture bem. Reserve.,       2- Pegue cada bife de contra filé e passe na mistura de ovos batidos e, em seguida, na farinha de rosca, novamente nos ovos batidos e na farinha de rosca, sem retirar o excesso. Arrume os bifes numa assadeira untada com azeite e leve ao forno médio pré-aquecido a 250°C por 15 minutos. Vire os bifes na assadeira e deixe no forno por mais 15 minutos.,       3- Retire a assadeira do forno e sobre cada bife coloque uma fatia de presunto, uma porção de tomate picado (reservado acima) e 2 fatias de muçarela.,       4- Leve a assadeira novamente ao forno por 10 minutos até derreter o queijo. Retire do forno e sirva em seguida.",
    "modo_preparo_audio": "",
    "data_insercao": "11/03/2021 21:52:00",
    "numero_de_visualizacoes": 0
  },

  {
    "id": 2,
    "idCaderno": 1,
    "idUser": 2,
    "quem_criou_receita": "Vovó Ernesta",
    "foto": "https://i.pinimg.com/originals/d7/12/6f/d7126fdf6cd6ee889b430fe5e14f0c4d.jpg",
    "categoria": 1,
    "nome_receita": "Gelado de Doce de Leite",
    "ingredientes": "1 pacote de biscoito recheado de chocolate triturado (140g), 50g de manteiga sem sal (¼ xícara de chá), 200g de doce de leite (¾ xícara de chá), 250g de sorvete de creme (1 ½ xícara de chá), 300ml de creme de leite fresco batido em ponto de chantilly (1 ¼ xícara de chá)  ",
    "modo_preparo_texto": "Numa tigela coloque o biscoito recheado de chocolate triturado e manteiga sem sal; misture bem até formar uma mistura homogênea. Espalhe a massa numa assadeira e leve para gelar por cerca de 20 minutos no freezer., Retire a massa de biscoito da assadeira e quebre grosseiramente. Coloque numa outra tigela o doce de leite e o sorvete de creme e misture., Acrescente o creme de leite fresco batido em ponto de chantilly e misture delicadamente. Adicione o biscoito picado grosseiramente (feito acima) e misture. Leve para o freezer por mais ou menos 3 horas., Retire do freezer e sirva em seguida.",
    "modo_preparo_audio": "",
    "data_insercao": "11/03/2021 21:52:00",
    "numero_de_visualizacoes": 0
  },
  {
    "id": 3,
    "idCaderno": 1,
    "idUser": 1,
    "quem_criou_receita": "Vovó Jóia",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvMZH0X6cnsah-obe8roC7ix7qmL2d8cXOA&usqp=CAU",
    "categoria": 1,
    "nome_receita": "Empada de arroz",
    "ingredientes": "Massa ->  ½ xícara (chá) de leite (120ml) ,1 ovo, 1 ½ xícara de arroz branco cozido,½ cenoura com casca picada,½ xícara (chá) de amido de milho,50g de queijo muçarela ralada no ralo grosso,25g de queijo parmesão ralado,Salsinha picadinha e sal a gosto,½ colher (sopa) de fermento em pó,Recheio,200g de frango temperado, cozido e desfiado,75g de requeijão cremoso (¾ xícara de chá)",
    "modo_preparo_texto": "Massa ->, 1- Num liquidificador, coloque o leite, ovo, arroz branco cozido e a cenoura com casca picada, e bata bem até obter uma pasta., 2- Transfira esta mistura para uma tigela adicione amido de milho, queijo muçarela ralada no ralo grosso, queijo parmesão ralado, salsinha picadinha e sal a gosto e misture bem., 3- Acrescente o fermento em pó e misture delicadamente. Deixe a massa descansar por 15 minutos., Recheio -> Em uma tigela, coloque o frango temperado, cozido e desfiado, requeijão cremoso e misture bem., Montagem - > Em 9 forminhas de empada untadas e polvilhadas com farinha de rosca, coloque uma porção de massa (aprox. 1 colher de sopa) e, com a ajuda das costas de uma colher, espalhe a massa forrando o fundo e as laterais de cada forminha. Coloque uma porção de recheio de frango (feito acima) e cubra com uma porção de massa. Leve as empadinhas para assar em forno médio pré-aquecido a 180°C por aproximados 35 minutos ou até dourar. Retire do forno, desenforme e sirva em seguida.",
    "modo_preparo_audio": "",
    "data_insercao": "11/03/2021 21:52:00",
    "numero_de_visualizacoes": 0
  },
  {
    "id": 4,
    "idCaderno": 1,
    "idUser": 1,
    "quem_criou_receita": "Vovó Marina",
    "foto": "https://www.prazeresdamesa.com.br/wp-content/uploads/2019/03/1C7A8913Rjcastilho-Copia.jpg",
    "categoria": 2,
    "nome_receita": "Bolo de Brownie com Doce de Leite e Ganache de Chocolate",
    "ingredientes": "Cobertura - > ,1 1/2kg de pasta americana pronta, Anilina em gel nas cores, amarelo, verde, vermelho, laranja, preta, prata, dourada e rosa bebê,3 potes grandes de gel para papel de arroz,2 folhas de papel de arroz com as fotos para montar a tira,Cola para pasta americana,12 colheres de sopa de pó para glacê real,1 saco de confeitar, 1 matriz, 1 bico perlê pequeno,Massa de baunilha -> 400 g de margarina,04 xícaras de chá de açúcar,06 ovos,06 xícaras de chá de farinha de trigo,02 xícaras de chá de leite integral,02 colheres (sopa) de fermento em pó,02 colheres (sopa) de essência de baunilha branca,Massa de Brownie -> ,4 ovos,200g de açúcar,5 g de sal,200 g de chocolate meio amargo,250 g de manteiga sem sal,75g de chocolate meio amargo picado,80 g de nozes picadas,150 g de farinha de trigo,Recheio de doce de leite ->,2 latas de leite condensado,Recheio de Ganache de Chocolate meio amargo,500 g de chocolate meio amargo,02 caixas de creme de leite,02 colheres (sopa) de margarina,Calda -> 3 copos americanos de água,1 copo americano de açúcar",
    "modo_preparo_texto": "Massa de baunilha ->, 1- Na batedeira, bata a margarina com o açúcar, os ovos e a essência de baunilha até formar um creme claro. Junte a farinha o leite e bata até ficar homogêneo.,2- Acrescente o fermento batendo com a ajuda de uma colher apenas para misturar. Assar em forno pré-aquecido a 180°C em fôrma untada com margarina e farinha. Tempo de preparo de cerca de 60 min.,OBS: Se esta quantidade não der na sua batedeira, divida os ingredientes em duas partes e faça o mesmo processo acima para as duas partes.,Massa de brownie -> ,1- Derreter o chocolate em banho-maria e acrescentar a manteiga para derreter. Não deixar esquentar muito e reservar. Peneirar a farinha e misturar nozes e o chocolate picado, reservar.,2- Untar um tabuleiro e forrar o fundo com papel manteiga e reservar. Bater os ovos com açúcar e sal até o ponto de pão-de-ló (aprox. 10 min). Acrescentar a mistura da farinha e a mistura do chocolate derretido. Mexer levemente. Despejar a massa no tabuleiro e levar ao forno a 180°C por 15 a 20 min.,Calda -> ,Juntar o açúcar e a água em uma panela e deixar ferver por 5 min. Deixe esfriar para molhar o bolo.,Doce de leite -> ,Cozinhe as duas latas de leite condensado por 45 minutos em uma panela de pressão. Deixe esfriar, abra as latas, coloque o doce em uma vasilha e misture com uma colher para ficar homogêneo para aplicar no bolo.,Ganache -> ,Derreta o chocolate em banho-maria e misture a margarina e o creme de leite, até formar um creme liso. Tempo médio: 10 minutos.,Cobertura -> ,1- Bater as 12 colheres de glacê real com 1 1/2 colheres (sopa) de água por 10 minutos na batedeira em velocidade alta. Reservar.,2- Tingir 500 g da massa de preto, 530 g branca, 150 g vermelha, 20 g rosa bem clarinho, 100 g verde, 100 g amarelo, 100 g laranja.,Montagem -> ,Descasque o bolo retirando a parte de cima, de baixo e as laterais. Corte em triângulo e vá encaixando no aro até preencher todo o circulo. Molhe com calda e coloque parte do recheio. Vá intercalando massa de baunilha recheio e massa de brownie até preencher todo o aro. Deixe descansar por 1 hora. Retire o aro e passe gel para papel de arroz. Abra a pasta americana com um rolo de abrir massa e cubra o bolo. Modele as pastas coloridas conforme na foto. Para aplicar a tira de papel de arroz é necessário passar gel no local antes de aplicar. Coloque o glacê real no saco de confeitar e confeite a claquete. Aplique no bolo. Aplique as estrela no bolo. Tempo estimado para decoração: 1 hora.",
    "modo_preparo_audio": "",
    "data_insercao": "11/03/2021 21:52:00",
    "numero_de_visualizacoes": 0
  },
  {
    "id": 5,
    "idCaderno": 2,
    "idUser": 2,
    "quem_criou_receita": "Dona Canô",
    "foto": "http://imagem.band.com.br/31/f_311131.jpg",
    "categoria": 1,
    "nome_receita": "Bolo de aipim",
    "ingredientes": "1kg de aipim ralado; Leite de 1 coco; 1 xícara e meia de açúcar; 1 colher de chá de sal; 1 colher de sopa de manteiga derretida.",
    "modo_preparo_texto": "Juntar o aipim ralado com o leite de coco, o açúcar, o sal e a manteiga. Misturar bem e colocar numa assadeira untada e polvilhada com farinha de trigo. Enquanto estiver assando, colocar por cima um pouco de leite de coco sem água, para que o bolo fique com uma cor bonita.",
    "modo_preparo_audio": "",
    "data_insercao": "19/03/2021 22:56:00",
    "numero_de_visualizacoes": 0

  }
  ]

  localStorage.setItem("dataReceitas", JSON.stringify(receitas));
}


function doDataCategorias() {
  const Categorias = [
    {
      "id": 1,
      "descricao": "Entrada",
      "sabor": "Salgado"
    },
    {
      "id": 2,
      "descricao": "Sobremesa",
      "sabor": "Doce"
    },
    {
      "id": 3,
      "descricao": "Prato principal",
      "sabor": "Salgado"
    },
    {
      "id": 4,
      "descricao": "Acompahamento",
      "sabor": "Salgado"
    },
    {
      "id": 5,
      "descricao": "Acompahamento",
      "sabor": "Doce"
    },
    {
      "id": 6,
      "descricao": "Torta",
      "sabor": "Salgado"
    },
    {
      "id": 7,
      "descricao": "Torta",
      "sabor": "Doce"
    },
    {
      "id": 8,
      "descricao": "Bolo",
      "sabor": "Salgado"
    },
    {
      "id": 9,
      "descricao": "Bolo",
      "sabor": "Doce"
    },
    {
      "id": 10,
      "descricao": "Petisco",
      "sabor": "Salgado"
    }
  ]

  localStorage.setItem("dataCategorias", JSON.stringify(Categorias));
}

function doDataCadernos() {

  const Cadernos = [
    {
      "id": 1,
      "idUser": 1,
      "descricao": "BANDOLI",
      "origem": "ITALIANA"
    },
    {
      "id": 2,
      "idUser": 1,
      "descricao": "RODOLPHI",
      "origem": "ITALIANA"
    },
    {
      "id": 3,
      "idUser": 2,
      "descricao": "VARELLA",
      "origem": "ESPANHOLA"
    },
    {
      "id": 4,
      "idUser": 1,
      "descricao": "LEGG",
      "origem": "INGLESA"
    },
    {
      "id": 5,
      "idUser": 2,
      "descricao": "VENTURA",
      "origem": "PORTUGUESA"
    }
  ]

  localStorage.setItem("dataCadernos", JSON.stringify(Cadernos))
}


function dataBlog() {
  const Blog = [
    {
      "id": 1,
      "titulo": "Cueca Virada ou Crustoli",
      "imagem_1": "https://i1.wp.com/panelaterapia.com/wp-content/uploads/2021/03/crustoli.jpg?fit=620%2C407&ssl=1",
      "matéria": "De origem ITALIANA o Crustoli (Grostoli ou Crostoli) é uma massa tipo de pão, frita e passado no açúcar e canela, mas no Brasil também é conhecida como cueca virada. Essa receita tem algumas versões, e todas que comi até hoje foram bem gostosas! ",
      "ingredientes": "    2 ovos,     2 colheres(sopa) de manteiga ou margarina,    1/2 xícara (chá) de leite,    6 colheres(sopa) de açúcar,    1/2 colher (sopa) de fermento em pó,    1 pitada de sal,    1 colher(sopa) de cachaça,    2 e 1/2 xícaras (chá) de farinha de trigo (aproximadamente),    Óleo para fritar,    Açúcar e canela em pó para polvilhar ou mel para acompanhar",
      "imagem_2": "https://i1.wp.com/panelaterapia.com/wp-content/uploads/2021/03/cueca-virada-receita.jpg?w=640&ssl=1",
      "modo_preparo": "Em uma tigela, misture os ovos, a margarina, o leite, o açúcar, o fermento, o sal e a cachaça. Acrescente a farinha de trigo, aos poucos, mexendo inicialmente com uma colher e depois com as mãos até que forma uma massa homogênea, macia e que solte das mãos.       Divida a massa em duas partes e abra com ajuda de um rolo em uma superfície enfarinhada até ficar fina (aproximadamente 0,5cm). Corte em retângulos médios (5X10cm, aproximadamente).        Faça um cortinho no meio de cada retângulo e dobre a massa passando por dentro. Frite, aos poucos, em óleo quente até dourar levemente. Retire, escorra em papel toalha e passe por açúcar e canela ou então sirva acompanhado de mel.",
      "video": "https://youtu.be/pTBwWGQvXX0"
    },
    {
      "id": 2,
      "titulo": "Pão Recheado de Brócolis e Bacon",
      "imagem_1": "https://i0.wp.com/panelaterapia.com/wp-content/uploads/2021/01/pao-recheado-brocolis.jpg?fit=620%2C407&ssl=1",
      "matéria": "Essa combinação de recheio de brócolis com bacon fica demais!!! Esse pão, ou baguete você pode fazer com vários recheios, inclusive doces (para isso basta diminuir o sal pela metade e acrescentar 2 colheres de sopa de açúcar na massa).",
      "ingredientes": "500g de farinha de trigo,      5g de fermento biológico seco,      2 colheres (sopa) de leite em pó,      2 colheres (sopa) de açúcar,      1 colher (sopa) de sal,      1 ovo batido,,      2 colheres (sopa) de manteiga ou margarina,      1 xícara (chá) de água,      Farinha de trigo para enfarinhar,      1 gema misturada com 2 colheres (sopa) de água para pincelar.   Recheio:      200g de bacon picado,      1 colher (sopa) de manteiga ou margarina,      2 dentes de alho picados,      1 maço de brócolis pré cozido,      1 xícara (chá) de requeijão cremoso,      Sal a gosto",
      "imagem_2": "https://i0.wp.com/panelaterapia.com/wp-content/uploads/2021/01/pao-recheado.jpg?w=640&ssl=1",
      "modo_preparo": "Para a massa, em uma tigela grande misture os ingredientes secos (farinha, fermento, leite em pó, açúcar e sal) por 1 minuto.  Adicione o ovo, a margarina e metade da água e misture com uma colher até começar a formar a massa. Agora com as mãos, junte a água restante, aos poucos, até formar uma massa homogênea e lisa. Se necessário adicione mais água ou farinha de trigo. Transfira para uma superfície e sove a massa por 7 minutos. Sove bem. Forme uma bola, coloque em uma tigela enfarinhada, cubra bem e deixe descansar por 40 minutos.  Para o recheio, coloque o bacon em uma panela e frite na própria gordura até dourar. Adicione a manteiga e o alho e frite por mais 1 minuto. Acrescente o brócolis, tempere com sal a gosto e refogue rapidamente. Desligue o fogo, misture com o requeijão e reserve. Após o descanso, divida a massa em duas partes e abra em uma superfície enfarinhada com ajuda de um rolo, até formar um retângulo grande com espessura fina. No sentido do comprimento divida a massa em 3 partes sem cortar, faça tiras nas duas extremidades deixando o meio sem cortar. Divida o recheio entre as massas e feche formando as tranças. Coloque em formas enfarinhadas, cubra e deixe descansar por mais 20 minutos. Pincele com a gema misturada com a água e polvilhe com orégano. Leve ao forno médio, preaquecido, por 35 minutos ou até dourar levemente.",
      "video": "https://youtu.be/evRmO8Kr0bc"


    }
  ]
  localStorage.setItem("dataBlog", JSON.stringify(Blog))
}

function doEmAlta() {
  const dataReceitas = JSON.parse(localStorage.getItem("dataReceitas"))
  const emAlta = document.querySelector('#divEmAlta')


  const dataReceitasSort = dataReceitas.sort(visualizacoes)
  /// fazer o sorte e separar as 4 primeiras
  const espaco = document.createElement('br')

  for (i = 0; i < 5; i++) {

    const receitaEmAlta = document.createElement('div')
    receitaEmAlta.classList.add('receitasEmAlta')
    const fotoReceitaEmAlta = document.createElement('img')
    fotoReceitaEmAlta.classList.add('fotoReceitaEmAlta')
    fotoReceitaEmAlta.src = dataReceitasSort[i].foto
    const nomeReceitaEmAlta = document.createElement('p')
    nomeReceitaEmAlta.classList.add('nomeReceitaEmAlta')
    nomeReceitaEmAlta.innerHTML = dataReceitasSort[i].nome_receita
    const quemCriouReceitaEmAlta = document.createElement('p')
    quemCriouReceitaEmAlta.classList.add('quemCriouReceitaEmAlta')
    quemCriouReceitaEmAlta.innerHTML = dataReceitasSort[i].quem_criou_receita

    receitaEmAlta.appendChild(fotoReceitaEmAlta)
    receitaEmAlta.appendChild(espaco)
    receitaEmAlta.appendChild(espaco)
    receitaEmAlta.appendChild(quemCriouReceitaEmAlta)
    receitaEmAlta.appendChild(nomeReceitaEmAlta)
    emAlta.appendChild(receitaEmAlta)

  }

  function visualizacoes(a, b) {
    return a.numero_de_visualizacoes - b.numero_de_visualizacoes;
  }

}
