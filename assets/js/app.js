// Inicializacion de tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Se espera a que carge el documento
document.addEventListener('DOMContentLoaded', () =>{
    const formulario = document.getElementById('formularioContacto');

//Alerta de envio de datos con modal de Bootstrap y reseteo del formulario
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const modalExito = new bootstrap.Modal(document.getElementById('modalExito'));
        modalExito.show();

        formulario.reset();        
    });
});

// Se inicia autorun del carusel cada 5 segundos
const carruselElement = document.getElementById('carouselViajeschile');
 const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carruselElement, {
        ride: 'carousel',    
        interval: 5000       
        });
    
//Se inicia Jquery
$(() => {
    console.log('Entorno de jQuery inicializado.');

//Se cambia de color con doble click texto de Quienes Somos     
 $('.mod-color').on('dblclick',  ()=> {
        $(this).toggleClass('active');
});
//Se esconde y aparece seccion de Destacados
 $('#toggle-destacados').on('click', () => {
        $('#toggle-cards').slideToggle(800);
    });
    });