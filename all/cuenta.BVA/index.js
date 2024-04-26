// Objeto Cuenta Bancaria
const cuentaBancaria = {
    titular: "Juan Pérez",
    saldo: 1000,
    // Método para depositar dinero en la cuenta
    depositar: function(monto) {
    if (monto <= 0) {
    console.log("El monto a depositar debe ser mayor que cero.");
    } else {
    this.saldo += monto;
    console.log(`Se ha depositado $${monto} en la cuenta. Saldo actual:
    $${this.saldo}`);
    }
    },
    // Método para retirar dinero de la cuenta
    retirar: function(monto) {
    if (monto <= 0) {
    console.log("El monto a retirar debe ser mayor que cero.");
    } else if (monto > this.saldo) {
    console.log("Saldo insuficiente. No es posible realizar el retiro.");
    } else {
    this.saldo -= monto;
    console.log(`Se ha retirado $${monto} de la cuenta. Saldo actual:
    
    $${this.saldo}`);
    }
    },
    // Método para consultar el saldo de la cuenta
    consultarSaldo: function() {
    console.log(`Saldo actual: $${this.saldo}`);
    }
    };
    
    // Prueba del objeto Cuenta Bancaria
    console.log(`Titular de la cuenta: ${cuentaBancaria.titular}`);
    cuentaBancaria.consultarSaldo(); // Saldo actual: $1000
    cuentaBancaria.depositar(500); // Se ha depositado $500 en la cuenta. Saldo actual: $1500
    cuentaBancaria.retirar(200); // Se ha retirado $200 de la cuenta. Saldo actual: $1300
    cuentaBancaria.consultarSaldo(); // Saldo actual: $1300