window.onload = function () {
    if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        var desplegable = document.querySelectorAll('.fa-chevron-down');

        desplegable.forEach(function (content) {
            content.addEventListener('click', function () {
                // Parent container del propio elemento
                var padre = this.parentElement.querySelector('.dropdown_content');

                // Conseguir los elementos para 'calcular' los opuestos
                var opuesto = document.querySelectorAll('.dropdown_content');

                // Por cada elemento comprobamos que no coincida con el opuesto y que esté abierto
                opuesto.forEach((dropdown) => {
                    if (dropdown !== padre && dropdown.style.display === 'block') {
                        // Close the opposite dropdown instantly
                        padre.classList.remove('submenu_tablet');
                    } else {
                        dropdown.classList.add('submenu_tablet');
                    }
                });
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
};
