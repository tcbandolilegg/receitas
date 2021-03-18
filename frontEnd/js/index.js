window.addEventListener('load', function () {
  //   doFetch();
  //   doFetchAsync();

});

// // function doFetch() {
// //   fetch('./backEnd/src/modal/users.json')
// //     .then(res => {
// //       res.json().then(data => {
// //         showData(data);
// //       });
// //     })
// //     .catch(error => {
// //       console.log('Erro na requisição');
// //     });
// // }

// async function doFetchAsync() {
//   const res = await fetch('./backEnd/src/modal/users.json')
//   const json = await res.json()
//   console.log(json)
// }


// function validaLogin() {
//   json.forEach(element => {
//     if (json.email = emailDigitado && json.senha) {

//     }
//   });
//   // ir par a tela de logado
// }

// function showData(data) {
//   console.log(data);
//   // const user = document.querySelector('#user');
//   // user.textContent = data.login + ' ' + data.name;
// }



// function divisionPromise(a, b) {
//   return new Promise((resolve, reject) => {
//     if (b === 0) {
//       reject('Não é possível dividir por 0');
//     }

//     resolve(a / b);
//   });
// }

// function executeDivisionPromise() {
//   divisionPromise(12, 0)
//     .then(result => {
//       console.log(result);
//     })
//     .catch(errorMessage => {
//       console.log('Falha na divisão ' + errorMessage);
//     });
// }

// async function executeDivisionPromiseAsyncAwait() {
//   const division = await divisionPromise(12, 2);
//   console.log(division);
// }