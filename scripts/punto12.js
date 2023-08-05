// Dado un número real que representa el valor total de una compra, informar
// las posibles formas de pago según la siguiente tabla. Específica los datos de
// entrada, de salida, estrategia.
// 1 cuota de $................. (0% de recargo)
// 2 cuotas de $................. total $................. ( 5% de recargo)
// 6 cuotas de $................. total $................. ( 40% de recargo)
let valorCompra = prompt("Ingrese el valor total de la compra")

let opc=prompt("Ingrese 1 para pagar una cuota con (0% de recargo)-Ingrese 2 para pagar dos cuotas con (5% de recargo)-Ingrese 3 para pagar  seis cuotas con (40% de recargo) ")
let recargo = valorCompra*.05
let recargo1 = (((valorCompra*.05)+valorCompra)/2)
let recargo2 = (((valorCompra*.40)+valorCompra)/6)
let opr=(valorCompra/2)
let opr1=(valorCompra/6) 

if(opc==1){
 alert("1 cuota de $ "+ valorCompra + " con 0% de recargo")
}else if(opc==2){
  alert("2 cuotas de $ "+ opr + " total "+ recargo1 + " con 5% de recargo" ) 
}else if (opc==3){
  alert("6 cuotas de $ "+ opr1 + " total "+ recargo2 + " con 40% de recargo")

} 