// class Product {
//     constructor (id, title, price, stock, images, onsale, supplier, colors, description) {
//       this.id = id
//       this.title = title
//       this.price = price
//       this.stock = stock
//       this.images = images
//       this.onsale = onsale
//       this.supplier = supplier
//       this.colors = colors
//       this.description = description
//     }
  
//   }
  
//   const prod1 = new Product(
//     'id12563725873',
//     'celular',
//     4000,
//     2,
//     'https://i.postimg.cc/Jn2C5W84/galaxy1.webp',
//     true,
//     'Samsung'
//   )
//   const prod2 = new Product(
//     'id47258992577',
//     'notebook',
//     150000,
//     1,
//     'https://i.postimg.cc/02220007/notebook.webp',
//     false,
//     'Lenovo'
//   )
//   const prod3 = new Product(
//     'id34174134763',
//     'tablet',
//     120000,
//     3,
//     'https://i.postimg.cc/02220007/notebook.webp',
//     true,
//     'Samsung'
//   )
//   const prod4 = new Product(
//     'id12844961873',
//     'laptop',
//     100000,
//     2,
//     'https://i.postimg.cc/Jn2C5W84/galaxy1.webp',
//     true,
//     'Lenovo',
//     ["gris","negro","blanco"],
//     "pantallas de tecnologia avanzada japonesa"
//   )
//   const prod5 = new Product(
//     'id1045250542',
//     'teclado',
//     10548,
//     23,
//     'https://i.postimg.cc/Jn2C5W84/galaxy1.webp',
//     true,
//     'Logitech'
//   )
//   const prod6 = new Product(
//     'id2887520892',
//     'monitores',
//     10548,
//     54,
//     'https://i.postimg.cc/Jn2C5W84/galaxy1.webp',
//     true,
//     'LG',
//     ["gris","negro","blanco"],
//     "pantallas de tecnologia avanzada japonesa"
//   )
let productsSel = document.getElementById("products");


  const productsTemplate =  ` <a class="product-card" href="./details.html">
    <img
      class="product-img"
      src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
      alt="iPad Pro 12.9"
    />
    <div class="product-info">
      <span class="product-title">iPad Pro 12.9</span>
      <span class="product-description">Silver</span>
      <div class="product-price-block">
        <span class="product-price">900000</span>
        <span class="product-discount">50% Off</span>
      </div>
      <div class="product-tax-policy">
        Incluye impuesto País y percepción AFIP
      </div>
    </div>
  </a>
  
  <a class="product-card" href="./details.html">
    <img
      class="product-img"
      src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
      alt="iPad Pro 12.9"
    />
    <div class="product-info">
      <span class="product-title">iPad Pro 12.9</span>
      <span class="product-description">Silver</span>
      <div class="product-price-block">
        <span class="product-price">900000</span>
        <span class="product-discount">50% Off</span>
      </div>
      <div class="product-tax-policy">
        Incluye impuesto País y percepción AFIP
      </div>
    </div>
  </a>
  
  <a class="product-card" href="./details.html">
    <img
      class="product-img"
      src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
      alt="iPad Pro 12.9"
    />
    <div class="product-info">
      <span class="product-title">iPad Pro 12.9</span>
      <span class="product-description">Silver</span>
      <div class="product-price-block">
        <span class="product-price">900000</span>
        <span class="product-discount">50% Off</span>
      </div>
      <div class="product-tax-policy">
        Incluye impuesto País y percepción AFIP
      </div>
    </div>
  </a>
  
  <a class="product-card" href="./details.html">
    <img
      class="product-img"
      src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
      alt="iPad Pro 12.9"
    />
    <div class="product-info">
      <span class="product-title">iPad Pro 12.9</span>
      <span class="product-description">Silver</span>
      <div class="product-price-block">
        <span class="product-price">900000</span>
        <span class="product-discount">50% Off</span>
      </div>
      <div class="product-tax-policy">
        Incluye impuesto País y percepción AFIP
      </div>
    </div>
  </a>
  
  <a class="product-card" href="./details.html">
    <img
      class="product-img"
      src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
      alt="iPad Pro 12.9"
    />
    <div class="product-info">
      <span class="product-title">iPad Pro 12.9</span>
      <span class="product-description">Silver</span>
      <div class="product-price-block">
        <span class="product-price">900000</span>
        <span class="product-discount">50% Off</span>
      </div>
      <div class="product-tax-policy">
        Incluye impuesto País y percepción AFIP
      </div>
    </div>
  </a>
  
  
  <a class="product-card" href="./details.html">
    <img
      class="product-img"
      src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
      alt="iPad Pro 12.9"
    />
    <div class="product-info">
      <span class="product-title">iPad Pro 12.9</span>
      <span class="product-description">Silver</span>
      <div class="product-price-block">
        <span class="product-price">900000</span>
        <span class="product-discount">50% Off</span>
      </div>
      <div class="product-tax-policy">
        Incluye impuesto País y percepción AFIP
      </div>
    </div>
  </a>`
  
  productsSel.innerHTML = productsTemplate;