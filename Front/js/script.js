document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

function iniciarApp() {
    scrollNav();
}

function scrollNav() {
    const enlace = document.querySelector('.scroll')
    enlace.addEventListener('click', function (e) {
        e.preventDefault();

        const seccionScroll = e.target.attributes.href.value;
        const seccion = document.querySelector(seccionScroll);
        seccion.scrollIntoView({ behavior: "smooth" });
    });
}

function mostrarModal(nombre){
    console.log('Hola MATEO');
    document.getElementById('modal').style.setProperty('visibility', 'visible');
    document.getElementById('content-titulo').innerHTML = nombre;
}

function cerrarModal(){
    console.log('Hola Fede');
    document.getElementById('modal').style.setProperty('visibility','hidden');
}

function displayProducts(productList) {
    let productsHTML = '';
    productList.forEach(e => {
        productsHTML +=
        `<div class="producto">
            <a class="producto__enlace">
            <img onclick="mostrarModal('${e.nombre}')" class="producto__imagen" src="${e.img_producto}" alt="imagen producto">
            <div class="producto__informacion">
            <p class="producto__nombre">${e.nombre}</p>
            <!--<p class="producto__precio">$200</p>-->
          </div>
        </a>
      </div>`
    });
    document.getElementById('pruebaExpress').innerHTML = productsHTML;
}

window.onload = async() =>{
    console.log('Pagina cargada');
    const productList = await(await fetch('/api/products')).json();
    console.log(productList);
    displayProducts(productList);
};
