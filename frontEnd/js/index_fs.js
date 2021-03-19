import {
  promises as fs,
  writeFile
} from 'fs';

let globalUsers = [];
let globalReceitas = [];
let globalCadernos = [];
let globalCategoria = [];

receitas();



async function receitas() {
  await createArrays();
  console.log('fim');
}


async function createArrays() {
  console.log('criando.. arrays');
  console.log('\nCriar as arrays que serão utilizados pelo sistema');

  try {
    globalUsers = await JSON.parse(
      await fs.readFile('../../backend/src/modal/dataUsers.json')
    )
    console.log(globalUsers)
    globalReceitas = await JSON.parse(
      await fs.readFile('../../backend/src/modal/dataReceitas.json')
    )
    console.log(globalReceitas)

    globalCategoria = await JSON.parse(
      await fs.readFile('../../backend/src/modal/dataCategoria.json')
    )


    globalCadernos = await JSON.parse(
      await fs.readFile('../../backend/src/modal/dataCadernos.json')
    )
  } catch (err) {
    console.log(err);
  }
}
