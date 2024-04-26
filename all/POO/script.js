// // Definir la clase "Persona"
// class Persona {
// 	constructor(nombre, edad) {
// 	this.nombre = nombre;
// 	this.edad = edad;
// 	}
// 	saludar() {
// 	console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}
// 	años.`);
// 	}
// 	}
// 	// Crear una instancia de la clase "Persona"
// 	const persona1 = new Persona("Juan", 30);
// 	const persona2 = new Persona("Maria", 43);
// 	const persona3 = new Persona("Jose", 25);
// 	const persona4 = new Persona("Marcos", 60);

// 	// Llamar al método "saludar" de la instancia
// 	persona1.saludar(); // Salida: "Hola, mi nombre es Juan y tengo 30 años."
// 	persona2.saludar();
// 	persona3.saludar();
// 	persona4.saludar();

// // ABSTRACCION

// class Coche {
//   constructor (marca, modelo, año) {
//     this.marca = marca
//     this.modelo = modelo
//     this.año = año
//   }
//   acelerar () {
//     console.log('El coche está acelerando.')
//   }
//   frenar () {
//     console.log('El coche está frenando.')
//   }
//   obtenerInformacion () {
//     return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año:${this.año}`
//   }

//   Mimetodo () {
//     console.log('Este es un metodo')
//   }
// }
// let coche1 = new Coche('Ford', 'Mustang', 2023)
// console.log(coche1.obtenerInformacion())
// coche1.acelerar()
// let coche2 = new Coche('Chevrolet', 'Camaro', 2022)
// console.log(coche2.obtenerInformacion())
// coche2.frenar()

// // Módulo Libro
// class Libro {
//   constructor (titulo, autor, genero) {
//     this.titulo = titulo
//     this.autor = autor
//     this.genero = genero
//   }
//   // Otros métodos relacionados con los libros...
// }
// // Módulo Usuario
// class Usuario {
//   constructor (nombre, edad, tipo) {
//     this.nombre = nombre
//     this.edad = edad
//     this.tipo = tipo
//   }
//   // Otros métodos relacionados con los usuarios...
// }
// // Módulo Prestamo
// class Prestamo {
//   constructor (libro, usuario, fechaInicio, fechaFin) {
//     this.libro = libro
//     this.usuario = usuario
//     this.fechaInicio = fechaInicio
//     this.fechaFin = fechaFin
//   }

//   datosdeprestamo () {
//     return `El libro ${this.libro.titulo} fue prestado a ${this.usuario.nombre} el ${this.fechaInicio} y debe devolverlo el ${this.fechaFin}`
//   }
//   // Otros métodos relacionados con los préstamos...
// }

// let libro1 = new Libro('El señor de los anillos', 'J.R.R. Tolkien', 'Fantasía')
// let usuario1 = new Usuario('John Doe', 25, 'Estudiante')
// let prestamo1 = new Prestamo(libro1, usuario1, '2022-01-01', '2022-01-15')

// console.log(libro1 + usuario1 + prestamo1.datosdeprestamo())
// alert(libro1 + usuario1 + prestamo1.datosdeprestamo())

// // Definición de la superclase Animal
// class Animal {
//   constructor (nombre) {
//     this.nombre = nombre
//   }
// }
// // Definición de la subclase Perro que extiende Animal
// class Perro extends Animal {
//   constructor (nombre, raza) {
//     super(nombre) // Llamamos al constructor de la superclase usando super()
//     this.raza = raza
//   }
//   hacerSonido () {
//     return 'Guau, guau!'
//   }
//   moverCola () {
//     return 'Moviendo la cola felizmente'
//   }
// }
// // Creación de una instancia de la subclase Perro
// const miperro = new Perro('Firulais', 'Labrador')
// // Llamando a los métodos de la subclase y superclase
// console.log(miperro.nombre) // Salida: "Firulais"
// console.log(miperro.raza) // Salida: "Labrador"
// console.log(miperro.hacerSonido()) // Salida: "Guau, guau!"
// console.log(miperro.moverCola()) // Salida: "Moviendo la cola felizmente"
