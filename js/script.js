const BASEURL = 'https://backend-vargas-production.up.railway.app';

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

function cerrarModal() {
    console.log('Hola Fede');
    document.getElementById('modal').style.setProperty('visibility', 'hidden');
}

function displayProducts(productList) {
    let productsHTML = '';
    productList.forEach(e => {
        productsHTML +=
            `<div class="producto">
            <a class="producto__enlace">
            <img onclick="displayVariedades(${e.id})" class="producto__imagen" src="${e.img_producto}" alt="imagen producto">
            <div class="producto__informacion">
            <p class="producto__nombre">${e.nombre}</p>
            <!--<p class="producto__precio">$200</p>-->
          </div>
        </a>
      </div>`
    });
    document.getElementById('pruebaExpress').innerHTML = productsHTML;
}

async function displayVariedades(id) {
    const aux = await fetch(BASEURL+`/api/variedades?id=${id}`)
    const variedadesList = await aux.json();
    let inicioModal = `<div class="content-modal">
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
<div class="carousel-indicators">`
let flag = false;

variedadesList.forEach((e,i)=>{
    inicioModal += `<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${i}" ${!flag && 'class="active" aria-current="true"'} aria-label="Slide ${i}"></button>`
    if (!flag) flag = true;
});

inicioModal+=`</div>
<div class="carousel-inner">`;

flag = false;
variedadesList.forEach(e => {
    inicioModal += `<div class="carousel-item ${!flag && "active"}" >
        <img src="${e.image}" class="d-block w-100" alt="imagen del producto">
        <div class="carousel-caption d-none d-md-block">
        <h5>${e.tipo}</h5>
        <p>Peso del cajon: ${e.peso}KG</p>
        </div>
        </div>`
    if (!flag) flag = true;
});
console.log(variedadesList);

inicioModal += `
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
<label onclick="cerrarModal()" for="btn-modal" class="cerrar-modal"></label>
  </div>`;
   
    document.getElementById('modal').innerHTML = inicioModal;
    document.getElementById('modal').style.setProperty('visibility', 'visible');
}

window.onload = async () => {
    console.log('Pagina cargada');
    const productList = await (await fetch(BASEURL+'/api/products')).json();
    console.log(productList);
    displayProducts(productList);

};
