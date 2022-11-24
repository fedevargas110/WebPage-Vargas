document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    scrollNav();
    crearGaleria();
}

function scrollNav(){
    const enlace = document.querySelector('.scroll')
    enlace.addEventListener('click', function(e){
        e.preventDefault();

        const seccionScroll = e.target.attributes.href.value;
        const seccion = document.querySelector(seccionScroll);
        seccion.scrollIntoView({ behavior: "smooth" });
    });
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    
    for(let i = 1; i<=12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="photos/productos/${i}.jpg" type="image/jpg">
            <source srcset="photos/productos/${i}.png" type="image/png">
            <source srcset="photos/productos/${i}.webp" type="image/webp">
            <img loading="lazy" width="100" height="100" src="photos/productos/${i}.jpg" alt="imagen productos">
        
        `
        galeria.appendChild(imagen);
    }
}