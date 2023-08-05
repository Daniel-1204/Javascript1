// Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
// considerando que realiza tres exámenes, de los cuales el primero y el
// segundo tienen una ponderación de 25%, mientras que el tercero de 50%.
let note1 = prompt("Ingrese nota del primer examen")
    note2 = prompt("Ingrese nota del segundo examen")
    note3 = prompt("Ingrese nota del segundo examen")

 let average = (parseFloat(note1)+parseFloat(note2)+parseFloat(note3))/3

    alert("El promedio obtenido es : "+ average)