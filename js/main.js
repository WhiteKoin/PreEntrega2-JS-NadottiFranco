function crearUsuario() {
    let mail = String(prompt("Ingresa tu mail para iniciar la creacion del usuario"))
    alert("Siguiente paso coloque su contraseña")
    let password = String(prompt("Ingrese su contraseña deseada"))
    alert("Usuario creado")
}

crearUsuario();

alert ("Ahora te vamos a pedir unos datos necesarios para recomendarte placas de video.")
let marca = prompt("Por favor, escribe que marca deseas o prefieres, de lo contrario no completar (AMD o Nvidia)")
let precio = prompt("Escriba su presupuesto MAXIMO (en dolares)")
let gama = prompt("Detalle que gama prefiere adquirir (Baja, Media o Alta)")

const datosBusqueda = {
    marca: marca,
    precio: precio,
    gama: gama,
}

function mostrarPlacas(placas){
    placas.forEach( item => {
        console.log(item.marca + " - Modelo: " + item.modelo + " - Año: " + item.year + " - Precio en U$S: " + item.precio + " - Gama: " + item.gama)
    
        document.write("<h3>" + item.marca + " - Modelo: " + item.modelo + " - Año: " + item.year + " - Precio en U$S: " + item.precio + " - Gama: " + item.gama + "</h3>")
       
    })
}

function filtrarMarca(item){
    if(datosBusqueda.marca){
        return item.marca == datosBusqueda.marca
    }
    return item;
}

function filtrarPrecio(item){
     if(datosBusqueda.precio){
         return item.precio <= datosBusqueda.precio
     }
     return item;
 }

 function filtrarGama(item){
    if(datosBusqueda.gama){
        return item.gama == datosBusqueda.gama
    }
    return item;
}

function noRecomendacion(){
    document.write("<h2>" + "No hay recomendaciones disponibles" + "</h2>")
}

function filtrarPlaca(){
    let resultado = placas.filter(filtrarMarca).filter(filtrarPrecio).filter(filtrarGama)

    if(resultado.length){
        mostrarPlacas(resultado)
        
    } else {
        noRecomendacion()
    }
    document.write("<h3>" + "Gracias por elegirnos" + "</h3>")
}

