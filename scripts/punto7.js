// Realiza un algoritmo para determinar cuánto pagará finalmente una persona
// por un artículo, considerando que tiene un descuento de 20%, y debe pagar
// 15% de IVA (debe mostrar el precio con descuento y el precio final).
let priceOfArticle = prompt("Ingrese precio del articulo")

let priceDiscount = priceOfArticle * 0.2

priceOfArticle = priceOfArticle - priceDiscount

let priceWithIva = priceOfArticle * 1.15

alert("El precio total es : " + priceWithIva)

console.log("El precio total es : " + priceWithIva)


    