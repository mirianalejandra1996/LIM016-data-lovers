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
    evoluciones.classList.replace('hide-bottom-line','show-bottom-line');
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