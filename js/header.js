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
    });
});
