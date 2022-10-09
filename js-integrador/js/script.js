/* //Flujo de datos 

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
} */










//Login
alert("Bienvenido, a continuacion ingrese su usuario")
let nombre = prompt("Ingrese su nombre de usuario")
let contraseña = prompt("Ingrese su contraseña")

if ((nombre == "") && (contraseña == "")) {  // Verificacion para entrar (en blanco)




    //Flujo de datos 

    //1-Mostrar productos -> 
    //2-cantidad de productos -> 
    //3-calculo de precios -> 
    //4-control de stock ->
    //5-Si hay stock muestra el precio->
    //6-mensajes post servicio.

    function Producto(nombre, precio, stock) {      //--->Uso de funcion Constructora de objetos
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock
    }

    let productoA = new Producto("1- Whey protein truemade 1kg", 200, 10);
    let productoB = new Producto("2- Creatina micronizada ENA 300gr", 100, 10);    //--->Objetos construidos
    let productoC = new Producto("3- Ultra mass ENA 1500gr", 50, 10);
    let productoD = new Producto("4- Preentreno C4 300gr", 70, 0);

    //---USO DE ARRAYS----

    let productos = [productoA, productoB, productoC, productoD]    // ---> Lista de objetos (Array)

    let listaProductos = []

    for (let producto of productos) { //->Ejecutar push de todos indices de "productos" a "lista de productos" de los nombres que estenen "productos" SI EL STOCK ES + 0 (si es que hay stock)
        if (producto.stock > 0){
            listaProductos.push(producto.nombre)
        }
    }

    //-------------------------------------

    let precioTotal = 0 //-> Asigno la variable precio total afuera del ciclo para poder utilizarla dentro de el y para poder almacenar valores dentro de ella y citarla fuera del ciclo.

    function calculoPrecio(cantidad, precio) { // Decalracion de funcion con parametros
        precioTotal += (cantidad * precio) // El "+=" sirve para sumarle un nuevo valor al valor actual de la variable y se va sobre escribiendo
    }

    let opcion = prompt("Bienvenido a Like Nutrition.cba\nENTER para continuar \nESC para salir")

    while (opcion != "ESC") {
        //1-Mostrar productos
        opcion = prompt("Agregar al carrito: \n" + listaProductos.join("\n") + "\n-ESC para avanzar")

        //2-Cantidad de productos
        if ((opcion == "Whey protein truemade 1kg") || (opcion == "1")) {
            let cantidadProductoA = prompt("Ingrese cantidad de: " + productoA.nombre + " que desea comprar")
            //3-Calculo de precios
            //4-control de stock 
            if (cantidadProductoA <= productoA.stock) {
                calculoPrecio(cantidadProductoA, productoA.precio)// ->Llamado de funcion (aca se debe poner al valor)
            }
            else {
                alert("Actualmente tenemos: " + productoA.stock + " unidades disponibles")
            }
        }

        //2-Cantidad de productos
        else if ((opcion == "Creatina micronizada ENA 300gr") || (opcion == "2")) {
            let cantidadProductoB = prompt("Ingrese cantidad de: " + productoB.nombre + " que desea comprar")
            //3-Calculo de precios
            //4-control de stock 
            if (cantidadProductoB <= productoB.stock) {
                calculoPrecio(cantidadProductoB, productoB.precio)// ->Llamado de funcion (aca se debe poner al valor)
            }
            else {
                alert("Actualmente tenemos: " + productoB.stock + " unidades disponibles")
            }
        }

        //2-Cantidad de productos
        else if ((opcion == "Ultra mass ENA 1500g") || (opcion == "3")) {
            let cantidadProductoC = prompt("Ingrese cantidad de: " + productoC.nombre + " que desea comprar")
            //3-Calculo de precios
            //4-control de stock 
            if (cantidadProductoC <= productoC.stock) {
                calculoPrecio(cantidadProductoC, productoC.precio)// ->Llamado de funcion (aca se debe poner al valor)
            }
            else {
                alert("Actualmente tenemos: " + productoC.stock + " unidades disponibles")
            }
        }
    }

    //5- Si hay stock se va a mostrar el precio
    if (precioTotal != 0) {
        alert("El precio total es de: " + precioTotal)//-> Uso de la variable glogal que declare al principo y adquirio valores en el bucle 

        //6-mensajes post servicio
        alert("¡Gracias por su compra!")

    }
    else {
        alert("¡Vuelva Pronto!")
    }
}
else {
    alert("Error, ingrse usuario y contraseña validos")
}