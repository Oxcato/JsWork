// Objeto Celular
const celular = {
    marca: "Samsung",
    modelo: "Galaxy S21",
    color: "Negro",
    almacenamiento: "128GB",
    sistemaOperativo: "Android",
    camaraMP: 64,
    encendido: false,
    // Método para sacar fotos
    sacarFoto: function() {
    if (!this.encendido) {
    console.log("El celular está apagado. Por favor, enciéndelo para sacar fotos.");
    } else {
    console.log(`Foto tomada con la cámara de ${this.camaraMP} MP en el
    
    ${this.modelo}. ¡Sonríe! 📸`);
    }
    },
    // Método para encender el celular
    encender: function() {
    this.encendido = true;
    console.log("¡El celular está encendido!");
    },
    // Método para apagar el celular
    apagar: function() {
    this.encendido = false;
    console.log("El celular se ha apagado.");
    }
    };
    // Prueba del objeto Celular
    console.log("Información del celular:");
    console.log(`Marca: ${celular.marca}`);
    console.log(`Modelo: ${celular.modelo}`);
    console.log(`Color: ${celular.color}`);
    console.log(`Almacenamiento: ${celular.almacenamiento}`);
    console.log(`Sistema Operativo: ${celular.sistemaOperativo}`);
    // Encendemos el celular
    celular.encender();
    // Sacamos una foto
    celular.sacarFoto();
    // Apagamos el celular
    celular.apagar();