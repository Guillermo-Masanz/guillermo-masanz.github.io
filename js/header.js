$(function () {
    if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        // Flechas
        var dropddownContent__button = document.querySelectorAll('.fa-chevron-down');

        dropddownContent__button.forEach(function (content) {
            content.addEventListener('click', function () {
                // Contenedor hermano de la flecha
                var dropdown__content = this.parentElement.nextElementSibling;

                // Simular el opuesto seleccionando todos
                var opuesto = document.querySelectorAll('.dropdown_content');

                // Si no coincide el último que se ha accionado, se cierra el opuesto
                opuesto.forEach((dropdown) => {
                    if (dropdown !== dropdown__content) {
                        dropdown.classList.remove('submenu_tablet');
                    }
                });

                // Abrir/Cerrar submenu
                dropdown__content.classList.toggle('submenu_tablet');
            });
        });
    } else if (window.innerWidth >= 360 && window.innerWidth <= 400) {
        // Menú del móvil
        var hamburguesa = document.querySelector('.menu__movil');

        // Navbar oculto móvil
        var lista = document.querySelector('.lista');

        // Evento click en boton del menu movil
        hamburguesa.addEventListener('click', () => {
            lista.classList.toggle('mostrar');
            console.log('hghaohahoamh')
        });

        // Flechas desplegables
        var flechas = document.querySelectorAll('.fa-chevron-down');

        // Submenus
        flechas.forEach(function (chevron) {
            chevron.addEventListener('click', function () {
                var dropdownContent = this.parentNode.nextElementSibling;
                dropdownContent.classList.toggle('submenu_movil');
            });
        });
    }
});
