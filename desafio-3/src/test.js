const ProductManager = require ('./productsManager')
const products = new ProductManager('./products.json')

async function Test() {

  const objeto1 = {
    title: "Remera",
    description: "Remera de algodon",
    price: 3800,
    thumbnail: "url",
    code: 1,
    stock: 15,
  
  }

  const objeto2 = {
    title: "Remera spum",
    description: "Remera de calidad spum",
    price: 2000,
    thumbnail: "url",
    code: 2,
    stock: 18,
    
  }

  const objeto3 = {
    title: "Buzo",
    description: "Buzo de algodon con friza",
    price: 5000,
    thumbnail: "url",
    code: 3,
    stock: 7,
  
  }

  const objeto4 = {
    title: "Campera de algodon",
    description: "Campera %100 algodon",
    price: 4700,
    thumbnail: "url",
    code: 4,
    stock: 5,
    
  }

  const objeto5 = {
    title: "Medias animadas",
    description: "Medias con tus dibujos preferidos",
    price: 600,
    thumbnail: "url",
    code: 5,
    stock: 15
  }

  const objeto6 = {
    title: "Medias largas",
    description: "Medias 3/4 de algodon",
    price: 900,
    thumbnail: "url",
    code: 6,
    stock: 15
  }

  const objeto7 = {
    title: "Remeras lisas",
    description: "Remeras de algodon lisa sin estampa",
    price: 3000,
    thumbnail: "url",
    code: 7,
    stock: 20
  }
  const objeto8 = {
    title: "Zapatillas",
    description: "zapatillas deportivas",
    price: 10000,
    thumbnail: "url",
    code: 8,
    stock: 6
  }
  const objeto9 = {
    title: "Zapatos",
    description: "Zapatos para hombre",
    price: 18000,
    thumbnail: "url",
    code: 9,
    stock: 4
  }
  const objeto10 = {
    title: "Remera deportiva",
    description: "Remera deportiva unisex",
    price: 2000,
    thumbnail: "url",
    code: 10,
    stock: 11
  }
  const upDateObject = {
    id: 1,
    title: "remera",
    description: 'algodon premium',
    price: 3800,
    thumbnail: "url",
    code: 4,
    stock: 5
  }

  await products.addProduct(objeto1).then(data => console.log(data));
  await products.addProduct(objeto2).then(data => console.log(data));
  await products.addProduct(objeto3).then(data => console.log(data));
  await products.addProduct(objeto4).then(data => console.log(data));
  await products.addProduct(objeto5).then(data => console.log(data));
  await products.addProduct(objeto6).then(data => console.log(data));
  await products.addProduct(objeto7).then(data => console.log(data));
  await products.addProduct(objeto8).then(data => console.log(data));
  await products.addProduct(objeto9).then(data => console.log(data));
  await products.addProduct(objeto10).then(data => console.log(data));
  // await products.getProducts().then(data => console.log(data));
  // await products.getProductById(5).then(data => console.log(data));
  // await products.updateProduct(3, {
  // await products.deleteById(4)
}

Test();