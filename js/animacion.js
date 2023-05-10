// const item = document.querySelectorAll('.item-img');
// let vueltas = 0


// const eliminarAnimacion = () => {
//     return new Promise(resolve => {

//         setTimeout(() => {
//             for (const element of item) {
//                 element.classList.toggle('animacion');
//                 element.classList.add('animacionAbajo')
//             }
//             resolve('reiniciando')

//         }, 100)
//     })

// }
// async function animarElementos() {
//     for (const element of item) {
//       await new Promise(resolve => setTimeout(() => {
//         element.classList.toggle('animacion');
//         resolve();
//       }, 800));
//     }
//   }

// const animar = () => {
//     animarElementos().then(
//         eliminarAnimacion().then(e=>{
//             console.log(e)
//         })
//     );
    

//     // setInterval(()=>{
//     //     agregarAnimacion()
//     // },800*item.length-1)
    
    

//     // setInterval(() => {
//     //     if (vueltas >= item.length) {

//     //         eliminarAnimacion();

//     //     }
//     //     if (item[vueltas].classList.contains('animacionAbajo')) {
//     //         item[vueltas].classList.remove('animacionAbajo')

//     //     }

//     //     item[vueltas].classList.toggle('animacion')

//     //     vueltas++;
//     // }, 1000)
// }


// animar()

const item = document.querySelectorAll('.item-img');
let vueltas = 0;

const eliminarAnimacion = () => {
    // al pasar 2 segundo se reinicia la animacion
  return new Promise(resolve => {
    setTimeout(() => {
      for (const element of item) {
        element.classList.toggle('animacion');
        element.classList.add('animacionAbajo');
      }
      resolve();
    }, 2000);
  });
};

async function animarElementos() {
    // cada 800ms se agrega animacion a un item
  for (const element of item) {
    await new Promise(resolve =>
      setTimeout(() => {
        element.classList.remove('animacionAbajo');

        element.classList.toggle('animacion');
        resolve();
      }, 800)
    );
  }
}

const animar = () => {
  animarElementos().then(() => {
    eliminarAnimacion().then(e => {
      // al terminar la animacion se llama de manera recursiva para reiniciar la animacion
      animar();
    });
  });
};

animar();
