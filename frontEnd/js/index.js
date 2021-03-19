window.addEventListener('load', function () {
  console.log('Criando Arrays..')

  doDataUsers()
  let dataUsers = localStorage.getItem("dataUsers")
  console.log(dataUsers)

  doDataCadernos()
  let dataCadernos = localStorage.getItem("dataCadernos")
  console.log(dataCadernos)

  doDataReceitas()
  let dataReceitas = localStorage.getItem("dataReceitas")
  console.log(dataReceitas)

  doDataCategorias()
  let dataCategorias = localStorage.getItem("dataCategorias")
  console.log(dataCategorias)

  const btAceitarTermos = document.querySelector("#btAceitarTermos");
  const divAceitarTermos = document.querySelector("#termos");

  console.log(divAceitarTermos)

  btAceitarTermos.addEventListener('click', (event) => {
    divAceitarTermos.style.display = 'none'
  })
});

function doDataUsers() {
  const dataUsers = [
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

  localStorage.setItem("dataUsers", JSON.stringify(dataUsers));

}

function doDataReceitas() {
  const receitas = [
    {
      "id": "01",
      "id_caderno": "01",
      "id_user": "01",
      "quem_criou_receita": "Vovó Olga",
      "foto": "",
      "categoria": "01",
      "nome_receita": "Bife à Parmegiana de Forno",
      "ingredientes": "1 ½ xícara (chá) de tomates sem sementes e picados (270 g), Azeite, tomilho, alho, sal e pimenta a gosto,       4 bifes de contra filé temperados com alho, sal e pimenta (450 g),       4 ovos batidos para empanar,       Farinha de rosca para empanar,      4 fatias de presunto (100 g),       8 fatias de muçarela (150 g),       Molho de tomate,      1 kg de tomate,      30 g de manteiga,      Sal e pimenta do reino moída a gosto, 30 g de queijo parmesão ralado",
      "modo_preparo_texto": "Molho de tomate ->       Coloque os tomates em um liquidificador e bata bem. ,      Passe a mistura por uma peneira. ,      Em uma panela, derreta a manteiga e doure os alhos picados e a cebola picada. Despeje o tomate peneirado e leve ao fogo médio apurar por 30 minutos. ,       Tempere com sal e pimenta do reino moída a gosto., Bife - >       1- Em uma tigela, coloque os tomates sem sementes e picados, azeite, tomilho, alho, sal e pimenta a gosto e misture bem. Reserve.,       2- Pegue cada bife de contra filé e passe na mistura de ovos batidos e, em seguida, na farinha de rosca, novamente nos ovos batidos e na farinha de rosca, sem retirar o excesso. Arrume os bifes numa assadeira untada com azeite e leve ao forno médio pré-aquecido a 250°C por 15 minutos. Vire os bifes na assadeira e deixe no forno por mais 15 minutos.,       3- Retire a assadeira do forno e sobre cada bife coloque uma fatia de presunto, uma porção de tomate picado (reservado acima) e 2 fatias de muçarela.,       4- Leve a assadeira novamente ao forno por 10 minutos até derreter o queijo. Retire do forno e sirva em seguida.",
      "modo_preparo_audio": "",
      "data_insercao": "11/03/2021 21:52:00",
      "numero_de_visualizacoes": "0"
    },

    {
      "id": "02",
      "id_caderno": "01",
      "id_user": "02",
      "quem_criou_receita": "Vovó Ernesta",
      "foto": "",
      "categoria": "01",
      "nome_receita": "Gelado de Doce de Leite",
      "ingredientes": "1 pacote de biscoito recheado de chocolate triturado (140g), 50g de manteiga sem sal (¼ xícara de chá), 200g de doce de leite (¾ xícara de chá), 250g de sorvete de creme (1 ½ xícara de chá), 300ml de creme de leite fresco batido em ponto de chantilly (1 ¼ xícara de chá)  ",
      "modo_preparo_texto": "Numa tigela coloque o biscoito recheado de chocolate triturado e manteiga sem sal; misture bem até formar uma mistura homogênea. Espalhe a massa numa assadeira e leve para gelar por cerca de 20 minutos no freezer., Retire a massa de biscoito da assadeira e quebre grosseiramente. Coloque numa outra tigela o doce de leite e o sorvete de creme e misture., Acrescente o creme de leite fresco batido em ponto de chantilly e misture delicadamente. Adicione o biscoito picado grosseiramente (feito acima) e misture. Leve para o freezer por mais ou menos 3 horas., Retire do freezer e sirva em seguida.",
      "modo_preparo_audio": "",
      "data_insercao": "11/03/2021 21:52:00",
      "numero_de_visualizacoes": "0"
    },
    {
      "id": "03",
      "id_caderno": "01",
      "id_user": "01",
      "quem_criou_receita": "Vovó Jóia",
      "foto": "",
      "categoria": "01",
      "nome_receita": "Empada de arroz",
      "ingredientes": "Massa ->  ½ xícara (chá) de leite (120ml) ,1 ovo, 1 ½ xícara de arroz branco cozido,½ cenoura com casca picada,½ xícara (chá) de amido de milho,50g de queijo muçarela ralada no ralo grosso,25g de queijo parmesão ralado,Salsinha picadinha e sal a gosto,½ colher (sopa) de fermento em pó,Recheio,200g de frango temperado, cozido e desfiado,75g de requeijão cremoso (¾ xícara de chá)",
      "modo_preparo_texto": "Massa ->, 1- Num liquidificador, coloque o leite, ovo, arroz branco cozido e a cenoura com casca picada, e bata bem até obter uma pasta., 2- Transfira esta mistura para uma tigela adicione amido de milho, queijo muçarela ralada no ralo grosso, queijo parmesão ralado, salsinha picadinha e sal a gosto e misture bem., 3- Acrescente o fermento em pó e misture delicadamente. Deixe a massa descansar por 15 minutos., Recheio -> Em uma tigela, coloque o frango temperado, cozido e desfiado, requeijão cremoso e misture bem., Montagem - > Em 9 forminhas de empada untadas e polvilhadas com farinha de rosca, coloque uma porção de massa (aprox. 1 colher de sopa) e, com a ajuda das costas de uma colher, espalhe a massa forrando o fundo e as laterais de cada forminha. Coloque uma porção de recheio de frango (feito acima) e cubra com uma porção de massa. Leve as empadinhas para assar em forno médio pré-aquecido a 180°C por aproximados 35 minutos ou até dourar. Retire do forno, desenforme e sirva em seguida.",
      "modo_preparo_audio": "",
      "data_insercao": "11/03/2021 21:52:00",
      "numero_de_visualizacoes": "0"
    },
    {
      "id": "04",
      "id_caderno": "01",
      "id_user": "01",
      "quem_criou_receita": "Vovó Marina",
      "foto": "",
      "categoria": "02",
      "nome_receita": "Bolo de Brownie com Doce de Leite e Ganache de Chocolate",
      "ingredientes": "Cobertura - > ,1 1/2kg de pasta americana pronta, Anilina em gel nas cores, amarelo, verde, vermelho, laranja, preta, prata, dourada e rosa bebê,3 potes grandes de gel para papel de arroz,2 folhas de papel de arroz com as fotos para montar a tira,Cola para pasta americana,12 colheres de sopa de pó para glacê real,1 saco de confeitar, 1 matriz, 1 bico perlê pequeno,Massa de baunilha -> 400 g de margarina,04 xícaras de chá de açúcar,06 ovos,06 xícaras de chá de farinha de trigo,02 xícaras de chá de leite integral,02 colheres (sopa) de fermento em pó,02 colheres (sopa) de essência de baunilha branca,Massa de Brownie -> ,4 ovos,200g de açúcar,5 g de sal,200 g de chocolate meio amargo,250 g de manteiga sem sal,75g de chocolate meio amargo picado,80 g de nozes picadas,150 g de farinha de trigo,Recheio de doce de leite ->,2 latas de leite condensado,Recheio de Ganache de Chocolate meio amargo,500 g de chocolate meio amargo,02 caixas de creme de leite,02 colheres (sopa) de margarina,Calda -> 3 copos americanos de água,1 copo americano de açúcar",
      "modo_preparo_texto": "Massa de baunilha ->, 1- Na batedeira, bata a margarina com o açúcar, os ovos e a essência de baunilha até formar um creme claro. Junte a farinha o leite e bata até ficar homogêneo.,2- Acrescente o fermento batendo com a ajuda de uma colher apenas para misturar. Assar em forno pré-aquecido a 180°C em fôrma untada com margarina e farinha. Tempo de preparo de cerca de 60 min.,OBS: Se esta quantidade não der na sua batedeira, divida os ingredientes em duas partes e faça o mesmo processo acima para as duas partes.,Massa de brownie -> ,1- Derreter o chocolate em banho-maria e acrescentar a manteiga para derreter. Não deixar esquentar muito e reservar. Peneirar a farinha e misturar nozes e o chocolate picado, reservar.,2- Untar um tabuleiro e forrar o fundo com papel manteiga e reservar. Bater os ovos com açúcar e sal até o ponto de pão-de-ló (aprox. 10 min). Acrescentar a mistura da farinha e a mistura do chocolate derretido. Mexer levemente. Despejar a massa no tabuleiro e levar ao forno a 180°C por 15 a 20 min.,Calda -> ,Juntar o açúcar e a água em uma panela e deixar ferver por 5 min. Deixe esfriar para molhar o bolo.,Doce de leite -> ,Cozinhe as duas latas de leite condensado por 45 minutos em uma panela de pressão. Deixe esfriar, abra as latas, coloque o doce em uma vasilha e misture com uma colher para ficar homogêneo para aplicar no bolo.,Ganache -> ,Derreta o chocolate em banho-maria e misture a margarina e o creme de leite, até formar um creme liso. Tempo médio: 10 minutos.,Cobertura -> ,1- Bater as 12 colheres de glacê real com 1 1/2 colheres (sopa) de água por 10 minutos na batedeira em velocidade alta. Reservar.,2- Tingir 500 g da massa de preto, 530 g branca, 150 g vermelha, 20 g rosa bem clarinho, 100 g verde, 100 g amarelo, 100 g laranja.,Montagem -> ,Descasque o bolo retirando a parte de cima, de baixo e as laterais. Corte em triângulo e vá encaixando no aro até preencher todo o circulo. Molhe com calda e coloque parte do recheio. Vá intercalando massa de baunilha recheio e massa de brownie até preencher todo o aro. Deixe descansar por 1 hora. Retire o aro e passe gel para papel de arroz. Abra a pasta americana com um rolo de abrir massa e cubra o bolo. Modele as pastas coloridas conforme na foto. Para aplicar a tira de papel de arroz é necessário passar gel no local antes de aplicar. Coloque o glacê real no saco de confeitar e confeite a claquete. Aplique no bolo. Aplique as estrela no bolo. Tempo estimado para decoração: 1 hora.",
      "modo_preparo_audio": "",
      "data_insercao": "11/03/2021 21:52:00",
      "numero_de_visualizacoes": "0"
    }
  ]

  localStorage.setItem("dataReceitas", JSON.stringify(receitas));
}


function doDataCategorias() {
  const Categorias = [
    {
      "id": "01",
      "decricao": "Entrada",
      "sabor": "Salgado"
    },
    {
      "id": "02",
      "decricao": "Sobremesa",
      "sabor": "Doce"
    },
    {
      "id": "03",
      "decricao": "Prato principal",
      "sabor": "Salgado"
    },
    {
      "id": "04",
      "decricao": "Acompahamento",
      "sabor": "Salgado"
    },
    {
      "id": "05",
      "decricao": "Acompahamento",
      "sabor": "Doce"
    },
    {
      "id": "06",
      "decricao": "Torta",
      "sabor": "Salgado"
    },
    {
      "id": "07",
      "decricao": "Torta",
      "sabor": "Doce"
    },
    {
      "id": "08",
      "decricao": "Bolo",
      "sabor": "Salgado"
    },
    {
      "id": "09",
      "decricao": "Bolo",
      "sabor": "Doce"
    },
    {
      "id": "10",
      "decricao": "Petisco",
      "sabor": "Salgado"
    }
  ]

  localStorage.setItem("dataCategorias", JSON.stringify(Categorias));
}

function doDataCadernos() {

  const Cadernos = [
    {
      "id": 1,
      "decricao": "Bandoli",
      "origem": "Italiana"
    }
  ]

  localStorage.setItem("dataCadernos", JSON.stringify(Cadernos))
}