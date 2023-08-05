// Una empresa desea determinar el monto de un cheque que debe
// proporcionar a uno de sus empleados que tendrá que viajar durante un
// determinado número de días. Los gastos que cubre la empresa son: hotel,
// comida y 200 pesos diarios para otros gastos. El monto debe estar
// desglosado para cada concepto. Realiza un algoritmo que determine el
// monto del cheque. 
let hotel = prompt("Ingrese costo del hotel")
    food = prompt("Ingrese costo de la comida")
    bills = 200

    checkAmount = parseFloat(hotel)+parseFloat(food)+bills

    alert("El costo del hotel es: " + hotel + " El costo de la comida es: " + food + " Otros gastos: " + bills)
   alert("El monto total del cheque es "+ checkAmount)
    
    
