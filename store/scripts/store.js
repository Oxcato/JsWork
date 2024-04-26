// let totalApagar = 0

//     const nombre = prompt("¿Qué producto desea llevar?");
//     const cantidad = Number(prompt("¿Cuántas unidades?"));

// for (let index = 1; index < cantidad; index++) {

//     const precio = Number(prompt("¿Cuánto sale cada unidad?"));
//     const subtotal = cantidad * precio;
//     totalApagar = totalApagar + subtotal;
//     }

//     alert("El total a pagar es: " + totalApagar);

//     const pago = Number(prompt("¿Con cuánto va a pagar?"));
//     const cambio = pago - totalApagar;

//     alert("Su cambio es: " + cambio);

const comprar = () => {
  let totalApagar = 0
    const nombre = prompt('¿Qué producto desea llevar?')
    const cantidad = Number(prompt('¿Cuántas unidades?'))
    const precio = Number(prompt('¿Cuánto sale cada unidad?'))

  for (let index = 1; index <= 3; index++) {

    const subtotal = cantidad * precio
    totalApagar = totalApagar + subtotal
  }
  console.log(totalApagar)
  return totalApagar
}

const total1 = comprar()
const total2 = comprar()
const total3 = comprar()
const total = total1 + total2 + total3

const pago = Number(prompt('¿Con cuánto va a pagar?'))
const cambio = pago - total

alert('El total a pagar es: ' + total)
alert('Su cambio es: ' + cambio)
