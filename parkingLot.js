// Un estacionamiento requiere determinar el cobro que debe aplicar a las
// personas que lo utilizan. Considera que el cobro es con base en las horas
// que lo disponen y que las fracciones de hora se toman como completas,
// realiza el algoritmo que permita determinar el cobro.
let time = prompt("Ingrese tiempo transcurrido (Hrs,min): ");
hour = 1200
min = 20
price = (parseInt(time)*parseInt(hour))

if (min >= 1) {
    price += 1200
}
console.log("El valor de cobro es : "+ price)

alert("El valor de cobro es : "+ price)
