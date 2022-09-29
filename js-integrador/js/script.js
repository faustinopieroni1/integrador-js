//Flujo de datos 

//1-Mostrar productos -> 
//2-cantidad de productos -> 
//3-calculo de precios -> 
//4-control de stock ->
//5-Si hay stock muestra el precio->
//6-mensajes post servicio.


let productoA = "Mesa"
let precioProductoA = 500
let stockProductoA = 10

let productoB = "Silla"
let precioProductoB = 100
let stockProductoB = 10

let productoC = "Lampara"
let precioProductoC = 50
let stockProductoC = 10

let precioTotal = 0 //-> Asigno la variable afuera del ciclo para poder utilizarla dentro de el y para poder almacenar valores dentro de ella y citarla fuera del ciclo.

let opcion = prompt("Bienvenido\nENTER para continuar \nESC para salir")

while (opcion != "ESC") {
    //1-Mostrar productos
    opcion = prompt("Comrar: \n1-Mesa \n2-Silla \n3-Lampara \nESC")

    //2-Cantidad de productos
    if ((opcion == "Mesa") || (opcion == "1")) {
        let cantidadProductoA = prompt("Ingrese cantidad de: " + productoA + " que desea comprar")
        //3-Calculo de precios
        //4-control de stock 
        if (cantidadProductoA <= stockProductoA) {
            precioTotal = precioTotal + (cantidadProductoA * precioProductoA) //-> Sumo el nuevo precio total al viejo precio total para que los valores se vayan sumando 
        }
        else {
            alert("Actualmente tenemos: " + stockProductoA + " unidades disponibles")
        }
    }

    //2-Cantidad de productos
    else if ((opcion == "Silla") || (opcion == "2")) {
        let cantidadProductoB = prompt("Ingrese cantidad de: " + productoB + " que desea comprar")
        //3-Calculo de precios
        //4-control de stock 
        if (cantidadProductoB <= stockProductoB) {
            precioTotal = precioTotal + (cantidadProductoB * precioProductoB)
        }
        else {
            alert("Actualmente tenemos: " + stockProductoB + " unidades disponibles")
        }
    }

    //2-Cantidad de productos
    else if ((opcion == "Lampara") || (opcion == "3")) {
        let cantidadProductoC = prompt("Ingrese cantidad de: " + productoC + " que desea comprar")
        //3-Calculo de precios
        //4-control de stock 
        if (cantidadProductoC <= stockProductoC) {
            precioTotal = precioTotal + (cantidadProductoC * precioProductoC)
        }
        else {
            alert("Actualmente tenemos: " + stockProductoC + " unidades disponibles")
        }
    }
}

//5- Si hay stock se va a mostrar el precio
if (precioTotal != 0) {
    alert("El precio total es de: " + precioTotal)//-> Uso de la variable glogal que declare al principo y adquirio valores en el bucle 
}

//6-mensajes post servicio
if (precioTotal != 0) {
    alert("¡Gracias por su compra!")
}
if (precioTotal == 0) {
    alert("¡Vuelva Pronto!")
}
