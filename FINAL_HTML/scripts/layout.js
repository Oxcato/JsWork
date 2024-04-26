const navSelector = document.getElementById('navbar')

const options = [
  { title: 'Ofertas de la semana', linkTo: './outlet.html' },
  { title: 'Cómo funciona', linkTo: './how.html' },
  { title: 'Impuestos', linkTo: './taxs.html' },
  { title: 'Pedidos', linkTo: './orders.html' },
  { title: 'Garantía', linkTo: './warranty.html' }
]

console.log(navSelector)
console.log(navSelector.id)
console.log(navSelector.className)

for (let option of options) {
  const li = document.createElement('a')
  li.className = 'nav-link'
  li.textContent = option.title
  li.href = option.linkTo
  li.style.color = 'white'
  li.style.textDecoration = 'none'
  li.style.display = 'flex'
  li.style.padding = '4px'
  li.style.margin = '0 10px'
  li.style.justifyContent = 'center'
  li.style.alignItems = 'flex-start'

  navSelector.appendChild(li)
}

const footerSel = document.getElementById('footer')

const fosels = [
  { title: 'productos', opts: ['Laptops', 'Audio', 'Auticulares'] },
  { title: 'pay', opts: ['Formas de pago', 'paypal', 'costos y tarifas'] },
  { title: 'facturacion', opts: ['Impuestos', 'Garantia'] },
  { title: 'envios', opts: ['pedir nuevamente', 'mis envios'] },
  { title: 'redes', opts: ['facebook', 'gmail', 'instagram'] },
  { title: 'contacto', opts: ['telefono', 'email'] }
]


for (let fosel of fosels) {
  //crear un elemento
  let anchor = document.createElement('ul')
  //asignarle un nombre de clase
  anchor.className = 'footer-ul'
  //agregar un il
  let li = document.createElement('li')
  //asignarle una clase
  li.className = 'footer-main-item'
  //crear una etiqueta a
  let a = document.createElement('a')
  //asignarle un nombre de clase
  a.className = 'footer-a'
  //asignarle un texto
  a.textContent = fosel.title
  //asignarle un href
  // a.href = fosels.linkTo

  //agregar al li
  li.appendChild(a)
  //agregar a la ul
  anchor.appendChild(li)

  //iteracion con un for of
  for (let fsl of fosel.opts) {
    //crear un li
    let li = document.createElement('li')
    //asignarle una clase
    li.className = 'footer-li'
    //crear una etiqueta a
    let a = document.createElement('a')
    //asignarle un nombre de clase
    a.className = 'footer-a'
    //asignarle un texto
    a.textContent = fsl
    //agregar al li
    li.appendChild(a)
    //agregar a la ul
    anchor.appendChild(li)
  }

  //agregar un hijo
  footerSel.appendChild(anchor)
}
