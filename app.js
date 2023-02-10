const express = require('express')
const app = express()
const port = 3000


const products = [
  {
    id: 1,
    image: "photos/productos/1.jpg",
    name: "Tomate Perita"
  },
  {
    id: 2,
    image: "photos/productos/2.jpg",
    name: "Tomate Redondo"
  },
  {
    id: 3,
    image: "photos/productos/3.jpg",
    name: "Naranja"
  },
  {
    id: 4,
    image: "photos/productos/4.jpg",
    name: "Naranja de Ombligo"
  },
  {
    id: 5,
    image: "photos/productos/5.jpg",
    name: "Mandarina"
  },
  {
    id: 6,
    image: "photos/productos/6.jpg",
    name: "Manzana"
  },
  {
    id: 7,
    image: "photos/productos/7.jpg",
    name: "Pera"
  },
  {
    id: 8,
    image: "photos/productos/8.jpg",
    name: "Limon"
  },
  {
    id: 9,
    image: "photos/productos/9.jpg",
    name: "Cebolla"
  },
  {
    id: 10,
    image: "photos/productos/10.jpg",
    name: "Zanahoria"
  },
  {
    id: 11,
    image: "photos/productos/11.jpg",
    name: "Pimiento Verde"
  },
  {
    id: 12,
    image: "photos/productos/12.jpg",
    name: "Pimiento Rojo"
  },
  {
    id: 13,
    image: "photos/productos/13.jpg",
    name: "Durazno"
  },
  {
    id: 14,
    image: "photos/productos/14.jpg",
    name: "Ciruela"
  },
  {
    id: 15,
    image: "photos/productos/15.jpg",
    name: "Uva Blanca"
  },
  {
    id: 16,
    image: "photos/productos/16.jpg",
    name: "Uva Red Globe"
  },
  {
    id: 17,
    image: "photos/productos/17.jpg",
    name: "Ajo en caja"
  },
  {
    id: 18,
    image: "photos/productos/18.jpg",
    name: "Berenjena"
  },
  {
    id: 19,
    image: "photos/productos/19.jpg",
    name: "Banana Boliviana"
  },
  {
    id: 20,
    image: "photos/productos/20.jpg",
    name: "Choclo en bolsa"
  }
];

app.get('/api/products', (req, res) => {
  res.send(products);
})

app.use('/', express.static('Front'));

app.listen(port, () => {
  console.log(`Servidor UP Successfully in ${port}`)
})
