
//Login
/* alert("Bienvenido, a continuacion ingrese su usuario")
let nombre = prompt("Ingrese su nombre de usuario")
let contraseña = prompt("Ingrese su contraseña")

if ((nombre == "") && (contraseña == "")) {  // Verificacion para entrar (en blanco)
 */



function Producto(nombre, precio, stock, categoria) {      //--->Uso de funcion Constructora de objetos
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
}

let productoA = new Producto("1- Whey protein truemade 1kg", 200, 10, "proteina");
let productoB = new Producto("2- Creatina micronizada ENA 300gr", 100, 10, "creatina");    //--->Objetos construidos
let productoC = new Producto("3- Ultra mass ENA 1500gr", 50, 10, "aumentador");
let productoD = new Producto("4- Preentreno C4 300gr", 70, 4, "preentreno");

//---USO DE ARRAYS----

let productos = [productoA, productoB, productoC, productoD]    // ---> Lista de objetos (Array)

let listaProductosConStock = productos.filter((parametro) => parametro.stock > 5)  // Array solo tendra productos  c/stock, gracias a metodo .filter()

/* let listaProductos = listaProductosConStock.map((parametro) => parametro.nombre) */// Array tendra solo la propiedad .nombre de "listaProductosConStock"
//-------------------------------------

let catalogo = document.getElementById("catalogo")

//----------------------------------------

function generadorCards(paraCualquierLista) {

    catalogo.innerHTML = ""// Borramos todo el html de "catalogo" para que no se sobreescriba el contenido

    for (let generadorProductos of paraCualquierLista) { // Cilco que se aplicara para c/objeto del array "listaProductosConStock"

        let card = document.createElement("div") //Crea mvo elemento "div"

        card.className = "cards"// Asigna una clase a "card"

        card.innerHTML = `<h2>${generadorProductos.nombre} <h3>${generadorProductos.precio} <h4>${generadorProductos.stock}`// Genera estructura HTML a "card" con las ".propiedades"  menciondas

        catalogo.append(card)// Idnexa "card" a "catalogo"

    }
}

//-------------------------------------

generadorCards(listaProductosConStock)

//-------------------------------------

let categoriaElegida = ""  // ---> Guardamos la categoria que el usuario nos da por medio de un input

let inputCategoria = document.getElementById("inputCategoria")

inputCategoria.addEventListener("change", guardarValorEnCategortiaElegida)

function guardarValorEnCategortiaElegida() {
    categoriaElegida = inputCategoria.value // ---> Asigna el ".value" de "inputCategoria" a la variable "categoriaElegida"

}

//-------------------------------------

let botonFiltrar = document.getElementById("botonFiltrar")

botonFiltrar.addEventListener("click", filtradoCategoria)

function filtradoCategoria() {
    let listaFiltroCategoria = listaProductosConStock.filter((parametro) => parametro.categoria == categoriaElegida) // El filtro sera = "categoriaElegida"

    generadorCards(listaFiltroCategoria)

}

//----------------------------------------

let botonVolver = document.getElementById("botonVolver")

botonVolver.addEventListener("click", volver)

function volver() {
    generadorCards(listaProductosConStock)

}

//-------------------------------------------

/* let precioTotal = 0 //-> Asigno la variable precio total afuera del ciclo para poder utilizarla dentro de el y para poder almacenar valores dentro de ella y citarla fuera del ciclo.

function calculoPrecio(cantidad, precio) { // Decalracion de funcion con parametros
    precioTotal += (cantidad * precio) // El "+=" sirve para sumarle un nuevo valor al valor actual de la variable y se va sobre escribiendo
}





let opcion = prompt("Bienvenido a Like Nutrition.cba\nENTER para continuar \nESC para salir")

while (opcion != "ESC") {
    //1-Mostrar productos
    opcion = prompt("Agregar al carrito: \n" + listaProductos.join("\n") + "\n-ESC para avanzar")  //Uso del metodo .join()

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
} */







/* }
else {
    alert("Error, ingrse usuario y contraseña validos")
} */