$( document ).ready( function() { 
    if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        var dropddownContent__button = document.querySelectorAll('.fa-chevron-down');

        dropddownContent__button.forEach(function (content) {
            content.addEventListener('click', function () {
                // Parent container of the clicked element
                var dropdown__content = this.parentElement.nextElementSibling;
                
                // Get all dropdown elements
                var opuesto = document.querySelectorAll('.dropdown_content');
                
                // Close all dropdowns
                opuesto.forEach((dropdown) => {
                    if (dropdown !== dropdown__content) {
                        dropdown.classList.remove('submenu_tablet');
                    }
                });
                
                dropdown__content.classList.toggle('submenu_tablet')
            });
        });
    } else if (window.innerWidth >= 360 && window.innerWidth <= 400) {
        // Menú del móvil
        var hamburguesa = document.querySelector('.menu__movil');

        // Navbar oculto móvil
        var lista = document.querySelector('.lista');

        hamburguesa.addEventListener('click', () => {
            lista.classList.toggle('mostrar');
        });

        var flechas = document.querySelectorAll('.fa-chevron-down');

        flechas.forEach(function (chevron) {
            chevron.addEventListener('click', function () {
                var dropdownContent = this.parentNode.nextElementSibling;
                dropdownContent.classList.toggle('submenu_movil');
            });
        });
    }
});