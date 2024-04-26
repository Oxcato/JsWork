 console.log("hola mundo");

//   First Example

 function speedmeter() {
     const distancia = 10000;
     const tiempo = 500;
     const velocidad = distancia / tiempo;
     console.log ("la velocidad del cuerpo es de " + velocidad)
 }


 speedmeter();

//   Second example

 function calcularVelocidad (distancia, tiempo) {
        // const distancia = 10000;
        // const tiempo = 500;
   const velocidad = distancia / tiempo
   console.log('La velocidad del móvil es ' + velocidad)
 }


 calcularVelocidad(21900089, 2600)

const speed = (distancia, tiempo) => {
  const velocidad = distancia / tiempo;
  return velocidad
}


const velocidad1 = speed(3480,2);
console.log("juana corre a una velocidad de " + velocidad1);


const velocidad2 = speed(1580,2);
console.log("jose corre a una velocidad de " + velocidad1);

const velocidad3 = speed(2480,2);
console.log("maria corre a una velocidad de " + velocidad1);

