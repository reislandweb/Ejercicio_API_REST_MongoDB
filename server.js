const express = require('express');
const app = express();
const port = 3001;


const productRoutes = require('./routes/products.routes.js');
const providerRoutes = require('./routes/providers.routes.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hola mundo")
})

app.use('api/products',productRoutes);
app.use('api/providers',providerRoutes);

app.listen('port', () => {
    console.log(`Servidor localhost:${port}, levantado`)
})