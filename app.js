const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2/promise')

var connection;



app.get('/api/products', async(req, res) => {
  const [row, fields] = await connection.execute('SELECT * FROM productos')
  console.log(row);
  res.send(row);
})

app.use('/', express.static('Front'));

app.listen(port, async() => {
  connection = await mysql.createConnection({
    host     : 'containers-us-west-121.railway.app',
    user     : 'root',
    password : 'iPWeXhN7gLMahlcRpryY',
    port     : '7285',
    database : 'railway',
    insecureAuth : true
  });
  console.log(`Servidor UP Successfully in ${port}`)
})
