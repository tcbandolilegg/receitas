// https://github.com/tcbandolilegg/receitas/blob/main/backEnd/src/modal/users.json
function doFetch() {
  fetch('https://api.github.com/users/rrgomide')
    .then(res => {
      res.json().then(data => {

        showData(data);
      });
    })
    .catch(error => {
      console.log('Erro na requisição');
    });
}