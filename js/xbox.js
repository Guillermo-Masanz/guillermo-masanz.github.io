$(function () {
    if (window.innerWidth > 1024) {
        function carousel() {
            // Conseguimos las imagenes
            let slider = document.querySelector('.slider');

            // Botón adelante
            let forward = document.querySelector('.fa-forward');

            // Botón atrás
            let backward = document.querySelector('.fa-backward');

            // Definir un 'contador'
            let index = 0;

            // Definir la cantidad de imagenes
            const totalImages = slider.children.length;

            // Incrementar en uno el contador para pasar a la siguiente imagen
            forward.addEventListener('click', () => {
                index = (index + 1) % totalImages;
                moveSlider();
            });

            // Definir un valor menos uno en el contador para desplazarlo al anterior
            backward.addEventListener('click', () => {
                index = (index - 1 + totalImages) % totalImages;
                moveSlider();
            });

            // Mover de -100% en -100% las imagenes, es decir, hacia la izquierda
            function moveSlider() {
                let percentage = index * -100;
                slider.style.transform = 'translateX(' + percentage + '%)';
            }

            // Ejecución cada 6 segundos
            setInterval(() => {
                index = (index + 1) % totalImages;
                moveSlider();
            }, 6000);
        }
        carousel();
    }
});
