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
  }
];

app.get('/api/products', (req, res) => {
  res.send(products);
})

app.use('/', express.static('Front'));

app.listen(port, () => {
  console.log(`Servidor UP Successfully in ${port}`)
})
