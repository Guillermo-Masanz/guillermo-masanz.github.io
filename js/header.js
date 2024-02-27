if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    var desplegable = document.querySelectorAll('.fa-chevron-down');

    desplegable.forEach((content) => {
        content.addEventListener('click', function () {
            // Parent container del propio elemento
            var padre = this.parentElement.querySelector('.dropdown_content');

            // Conseguir los elementos para 'calcular' los opuestos
            var opuesto = document.querySelectorAll('.dropdown_content');

            // Por cada elemento comprobamos que no coincida con el opuesto y que esté abierto
            opuesto.forEach((dropdown) => {
                if (dropdown !== padre && dropdown.style.display === 'block') {
                    // Close the opposite dropdown instantly
                    dropdown.style.display = 'none';
                }
            });
            padre.classList.toggle('submenu')
        });
    });
} else if (window.innerWidth >= 360 && window.innerWidth <= 400) {
    // Menú del móvil
    var hamburguesa = document.querySelector('.menu__movil');

    // Navbar oculto móvil
    var mostrar = document.querySelector('.lista');


    var dropdown__content = document.querySelectorAll('#dropdown__content');
    hamburguesa.addEventListener('click', ()=> {
        mostrar.classList.toggle('mostrar');
    });
}






// desplegable.forEach((content) => {
//     content.addEventListener('click', () => {
//         dropdown__content.classList.toggle('submenu')
//     });
// });