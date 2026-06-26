const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContacto');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const modalExito = new bootstrap.Modal(document.getElementById('modalExito'));
        modalExito.show();

        formulario.reset();
    });
});



$(() => {
    console.log('Entorno de jQuery inicializado.');

     
 $('.mod-color').on('dblclick', function () {
        $(this).toggleClass('active');
});

 $('#toggle-destacados').on('click', () => {
        $('#toggle-cards').slideToggle(800);
    });
        
    });