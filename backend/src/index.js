const express = require('express');
const path = require('path')
const data =require('../data/data')

//init express🍏
const app = express();

//Set Public Folder 🗄
const publicPathDir = path.join(__dirname, './public');
app.use(express.static(publicPathDir)); //fot static file

//for product details
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if (product)
    res.send(product);
  else
    res.status(400).send({ msg: "Product Not Found." })
});

//for product list
app.get('/api/products', (req, res) => {
  res.send(data.products)
})

//for run express server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`express server run on port ${port} 🔥`);
});