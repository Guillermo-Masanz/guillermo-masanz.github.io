const carousel = document.querySelector('.carousel-imagenes');
const imagenes = Array.from(carousel.children);
const siguiente = document.querySelector('.forward');
const antes = document.querySelector('.backward');
const ancho = imagenes.

console.log(imagenes);

// function carrousel(){
//     const slide = document.querySelectorAll('.slide-image *');
//     const ancho = slide[0].getBoundingClientRect().width;
//     console.log(slide);
//     slide.forEach((slide, index) => {
//         slide.style.left = ancho * index + 'px';
//     });
// };

// carrousel();


// window.onload = function () { 
//     let slides = document.querySelectorAll('.carousel-item'); 
  
//     function addActive(slide) { 
//         slide.classList.add('active'); 
//     } 
  
//     function removeActive(slide) { 
//         slide.classList.remove('active'); 
//     } 
  
//     addActive(slides[0]); 
//     setInterval(function () { 
//         for (let i = 0; i < slides.length; i++) { 
//             if (i + 1 === slides.length) { 
//                 addActive(slides[0]); 
//                 setTimeout(removeActive, 10000, slides[i]); 
//                 break; 
//             } 
//             if (slides[i].classList.contains('active')) { 
//                 setTimeout(removeActive, 10000, slides[i]); 
//                 addActive(slides[i + 1]); 
//                 break; 
//             } 
//         } 
//     }, 5000); 
// };
