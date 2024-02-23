var barras = document.querySelectorAll('.fa-bars');
var dropdownAbierto = null;

barras.forEach(barra => {
    barra.addEventListener('click', function() {
        // Encontrar el dropdown_content asociado al ícono fa-bars actual
        var dropdownContent = this.parentElement.querySelector('.dropdown_content');
        
        // Si hay un dropdown_content abierto, ciérralo
        if (dropdownAbierto && dropdownAbierto !== dropdownContent) {
            dropdownAbierto.style.display = 'none';
        }
        
        // Si el dropdown_content actual no estaba abierto, ábrelo
        if (dropdownContent !== dropdownAbierto || dropdownAbierto === null) {
            dropdownContent.style.display = 'block';
            dropdownAbierto = dropdownContent;
        } else {
            dropdownContent.style.display = 'none'; // Si el mismo dropdown se ha hecho clic, ciérralo
        }
    });
});


// // Barras horizontales
// var barras = document.querySelectorAll('.fa-bars');

// barras.forEach(barra => {
//     barra.addEventListener('click', function() {

//         var dropdownContent = this.parentElement.querySelector('.dropdown_content');
        
//         if (dropdownContent.style.display === 'block') {
//             dropdownContent.style.display = 'none'
//         } else {
//             dropdownContent.style.display = 'block'  
//         };
//     });
// });



// // Barras horizontales
// var barras = document.querySelectorAll('.fa-bars');
// // Dropdown Content

// barras.forEach(barra => {
//     barra.addEventListener('click', function() {
//         var dropdown_content = document.querySelector('.dropdown_content');z
//         if (dropdown_content.style.display === 'block') {
//             dropdown_content.style.display = 'none';
//         } else {
//             dropdown_content.style.display = 'block';
//         }
//     });
// });