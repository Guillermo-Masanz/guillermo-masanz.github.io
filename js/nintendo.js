document.addEventListener('DOMContentLoaded', () => {

    // Bloque ID
    var bloque = document.querySelectorAll('#bloque');

    // Accion ID
    var accion = document.getElementById('accion');

    // Aventruas ID
    var aventura = document.getElementById('aventura');

    // Deporte ID
    var deporte = document.getElementById('deporte');

    // RPG ID
    var rpg = document.getElementById('rpg');

    // Tarjetas
    var cards = document.querySelectorAll('.card');

    // Event listener acción
    bloque[0].addEventListener('click', () => {
        toggleCard(accion);
    });

    // Event listener aventura
    bloque[1].addEventListener('click', () => {
        toggleCard(aventura);
    });

    // Event listener deporte
    bloque[2].addEventListener('click', () => {
        toggleCard(deporte);
    });

    // Event listener RPG
    bloque[3].addEventListener('click', () => {
        toggleCard(rpg);
    });

    // Función toggle tarjeta
    function toggleCard(elemento) {
        var activo = document.querySelector('.activo');
        if (activo === elemento) {
            elemento.classList.remove("activo");
        } else {
            if (activo) {
                activo.classList.remove("activo");
            }
            elemento.classList.add("activo");
        }
    }
});