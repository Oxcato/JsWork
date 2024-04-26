// // const producto1 = {
// //   name: 'celular',
// //   price: 100000,
// //   stock: 2
// // }

// // console.log(producto1)

// // producto1.id = 'id12563725873'
// // producto1.foto = 'https://i.postimg.cc/Jn2C5W84/galaxy1.webp'
// // producto1.name = 'celular'
// // producto1['price'] = 100000
// // producto1['stock'] = 2

// // console.log(producto1)

// // delete producto1['price']
// // delete producto1.id

// // class Product {
// //   constructor (id, title, price, stock, images, onsale) {
// //     this.id = id
// //     this.title = title
// //     this.price = price
// //     this.stock = stock
// //     this.images = images
// //     this.onsale = onsale
// //   }
// // }

// // console.log(prod1,prod2, prod3);

// class Product {
//   constructor (id, title, price, stock, images, onsale, supplier) {
//     this.id = id
//     this.title = title
//     this.price = price
//     this.stock = stock
//     this.images = images
//     this.onsale = onsale
//     this.supplier = supplier
//   }

//   get getSupplier() {
//     return this._supplier;
//     }
//     set setSupplier(Lenovo) {
//     this._supplier = getSupplier;
//     }

// }

// console.log(prod4);

class Product {
  constructor (id, title, price, stock, images, onsale, supplier, colors, description) {
    this.id = id
    this.title = title
    this.price = price
    this.stock = stock
    this.images = images
    this.onsale = onsale
    this.supplier = supplier
    this.colors = colors
    this.description = description
  }

  sellUnits (units) {
    this.stock = this.stock - units
  }

  get getSupplier () {
    return this._supplier
  }
  set setSupplier (Lenovo) {
    this._supplier = Lenovo
  }
}

const prod1 = new Product(
  'id12563725873',
  'celular',
  4000,
  2,
  'https://i.postimg.cc/Jn2C5W84/galaxy1.webp',
  true,
  'Samsung'
)
const prod2 = new Product(
  'id47258992577',
  'notebook',
  150000,
  1,
  'https://i.postimg.cc/02220007/notebook.webp',
  false,
  'Lenovo'
)
const prod3 = new Product(
  'id34174134763',
  'tablet',
  120000,
  3,
  'https://i.postimg.cc/02220007/notebook.webp',
  true,
  'Samsung'
)
const prod4 = new Product(
  'id12844961873',
  'laptop',
  100000,
  2,
  'https://i.postimg.cc/Jn2C5W84/galaxy1.webp',
  true,
  'Lenovo',
  ["gris","negro","blanco"],
  "pantallas de tecnologia avanzada japonesa"
)
const prod5 = new Product(
  'id1045250542',
  'teclado',
  10548,
  23,
  'https://i.postimg.cc/Jn2C5W84/galaxy1.webp',
  true,
  'Logitech'
)
const prod6 = new Product(
  'id2887520892',
  'monitores',
  10548,
  54,
  'https://i.postimg.cc/Jn2C5W84/galaxy1.webp',
  true,
  'LG',
  ["gris","negro","blanco"],
  "pantallas de tecnologia avanzada japonesa"
)

// console.log(prod5);

// prod5.sellUnits(10)

// console.log(prod5);

const products = [prod1, prod2, prod3, prod4]

console.log(products)
console.log(products[1])
let cantelements = products.length
let lastelement = products[cantelements - 1]
console.log(lastelement)

let titleelement = lastelement.title

console.log(titleelement)

products.unshift(prod5)
console.log(products)
products.push(prod6)
console.log(products)

products.shift(products)
products.pop(products)

console.log(products)
