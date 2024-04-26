const temperature = prompt('cual es la temperatura actual?')

if (temperature >= 30) {
  alert('Hace mucho calor!!!!')
} else if (temperature >= 18) {
  alert('la temperatura es normal')
} else if (temperature >= 27) {
  alert('Hace calor')
} else if (temperature >= 8) {
  alert('hace frio')
} else {
  alert('hace mucho frio brrrr')
}
