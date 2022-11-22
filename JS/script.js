document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-fotos');

    for (let i=1; i<5; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML= `
            <source srcset= "photos/productos/${i}.webp" type="imagen/webp">
            
            <img loading= "lazy" src="photos/productos/${i}.webp" alt="imagen producto">
        `;
    }
}