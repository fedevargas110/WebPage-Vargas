document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
    scrollNav();
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

function scrollNav (){ //Definiendo la funcion de smooth control
    const enlaces = document.querySelectorAll('.item a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();//Para prevenir la accion de que te lleve de golpe.
            const seccionScroll = e.target.attributes.href.value; //Te traiga el href de cada a
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior:'smooth'}); //Añadimos la animacion smooth
        });
    });
}

function scrollNav (){ //Definiendo la funcion de smooth control
    const enlaces = document.querySelectorAll('.navegacion a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();//Para prevenir la accion de que te lleve de golpe.
            const seccionScroll = e.target.attributes.href.value; //Te traiga el href de cada a
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior:'smooth'}); //Añadimos la animacion smooth
        });
    });
}