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

function displayProducts(productList) {
    let productsHTML = '';
    productList.forEach(e => {
        productsHTML +=
        `<div class="producto">
            <a class="producto__enlace" href="#">
            <img class="producto__imagen" src="photos/productos/1.jpg" alt="imagen producto">
            <div class="producto__informacion">
            <p class="producto__nombre">Tomate Perita</p>
            <!--<p class="producto__precio">$200</p>-->
          </div>
        </a>
      </div>`
    });
}

window.onload = async() =>{
    console.log('Pagina cargada');
    const productList = await(await fetch('/api/products')).json();
    console.log(productList);
};
