// import { dataPokemones } from './data.js';

//mostrar hamburguesa
const hamburguesa = document.getElementById("hamburguesa");
const links = document.getElementById("links");
hamburguesa.addEventListener("click", () => {
  hamburguesa.classList.toggle("close");
  links.classList.toggle("mostrarnav");
});

// Sección de botones detalles  evoluciones y stats
const btnDetalles = document.getElementById('detalles');
const btnEvoluciones = document.getElementById('evoluciones');
const btnStats = document.getElementById('stats');

const seccionDescripcion = document.getElementById('descripcion-total');
const seccionEvoluciones = document.getElementById('seccion-evoluciones');
const seccionStats=document.getElementById('seccion-stats')


btnDetalles.addEventListener('click', () => {

    btnDetalles.classList.replace('inactive','active');
    btnEvoluciones.classList.replace('active', 'inactive');
    btnStats.classList.replace('active','inactive')
    //secciones 
    seccionDescripcion.classList.replace('hidden','shown');
    seccionEvoluciones.classList.replace('shown','hidden');
    seccionStats.classList.replace('shown','hidden');

     // lineas debajo del nombre
     btnDetalles.classList.replace('hide-bottom-line','show-bottom-line');
     btnEvoluciones.classList.replace('show-bottom-line', 'hide-bottom-line');
     btnStats.classList.replace('show-bottom-line', 'hide-bottom-line');
    
})


btnEvoluciones.addEventListener('click', () => {
    
    btnEvoluciones.classList.replace('inactive','active');
    btnStats.classList.replace('active','inactive')
    btnDetalles.classList.replace('active','inactive');

    //secciones 
    seccionEvoluciones.classList.replace('hidden','shown');
    seccionDescripcion.classList.replace('shown','hidden');
    seccionStats.classList.replace('shown','hidden');

      // lineas debajo del nombre
    btnEvoluciones.classList.replace('hide-bottom-line','show-bottom-line');
    btnDetalles.classList.replace('show-bottom-line', 'hide-bottom-line');
    btnStats.classList.replace('show-bottom-line', 'hide-bottom-line');
    
})

btnStats.addEventListener('click', () => {
    
    btnStats.classList.replace('inactive','active');
    btnEvoluciones.classList.replace('active','inactive')
    btnDetalles.classList.replace('active','inactive');
     //secciones 
    seccionStats.classList.replace('hidden','shown');
    seccionEvoluciones.classList.replace('shown','hidden');
    seccionDescripcion.classList.replace('shown','hidden');
    // lineas debajo del nombre
    btnStats.classList.replace('hide-bottom-line','show-bottom-line');
    btnEvoluciones.classList.replace('show-bottom-line', 'hide-bottom-line');
    btnDetalles.classList.replace('show-bottom-line', 'hide-bottom-line');
    
})



// SECCIÓN CHART JS PARA LOS STATS

// const ctx = document.getElementById('chart').getContext('2d');
// const xlabels = [];
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: xlabels,
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// getData()

// async function getData () {

//    const response = await fetch('./data/pokemon/pokemon.json');
//    const data = await response.text();
//   //  const data = await response.json();

//    console.log(data);
//   //  const table = data.split('\n').slice(1);
//   //  table.forEach(row )

// }