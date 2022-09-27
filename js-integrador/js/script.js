//Flujo de datos 

//Mostrar productos -> cantidad de productos/Confirmacion de compra -> calculo de precios -> cantidad total de la compra

let productoA = "Mesa"
let precioProductoA = 500
let stockProductoA = 10

let productoB = "Silla"
let precioProductoB = 100
let stockProductoB = 10

let productoC = "Lampara"
let precioProductoC = 50
let stockProductoC = 10


//1-Mostrar y seleccionar Productos

let acepteCompra = prompt("Comrar: \n1-Mesa \n2-Silla \n3-Lampara")

//2-Cantidad de productos/Confirmacion de compra

if (acepteCompra == "Mesa") {
    let cantidadProductoA = prompt("Ingrese cantidad de: " + productoA + " que desea comprar")
    //Calculo de precios
    let precioA = cantidadProductoA * precioProductoA
    //Control de stock (10)
    if (cantidadProductoA <= stockProductoA) {
        alert("El precio total es de: " + precioA)
    } else {
        alert("No contamos con esa cantidad, porfavor reduzca las unidades para continuar la compra")
    }
}

//2-Cantidad de productos/Confirmacion de compra

else if (acepteCompra == "Silla") {
    let cantidadProductoB = prompt("Ingrese cantidad de: " + productoB + " que desea comprar")
    //Calculo de precios
    let precioB = cantidadProductoB * precioProductoB
    //Control de stock (10)
    if (cantidadProductoB <= stockProductoB) {
        alert("El precio total es de: " + precioB)
    } else {
        alert("No contamos con esa cantidad, porfavor reduzca las unidades para continuar la compra")
    }
}

//2-Cantidad de productos/Confirmacion de compra

else if (acepteCompra == "Lampara") {
    let cantidadProductoC = prompt("Ingrese cantidad de: " + productoC + " que desea comprar")
    //Calculo de precios
    let precioC = cantidadProductoC * precioProductoC
    //Control de stock (10)
    if (cantidadProductoC <= stockProductoC) {
        alert("El precio total es de: " + precioC)
    } else {
        alert("No contamos con esa cantidad, porfavor reduzca las unidades para continuar la compra")
    }
}
// Mensajes post servicio

//Si "acepte compra no es una de las opciones especificadas"

else if (acepteCompra != "") {
    alert("Producto sin stock")
}

//Si no es ninguna de las opciones y no se escribe nada (queda en blanco)

else {
    alert("Compra No Realizada")
}

// Si acepte compra es alguna de las opciones especificadas sale un alert

if ((acepteCompra == "Mesa") || ((acepteCompra == "Silla") || (acepteCompra == "Lampara"))) {
    alert("¡Gracias por su compra!")
}