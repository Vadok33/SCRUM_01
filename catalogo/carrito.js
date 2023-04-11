var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
var total = 0;

// Función para agregar un producto al carrito
function agregarProducto(nombre, precio) {
	var producto = {
        nombre: nombre,
        precio: precio,
        cantidad: 1
    };
    // Verificar si el producto ya existe en el carrito
    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === nombre) {
            carrito[i].cantidad++;
            actualizarCarrito();
            return;
        }
    }
    carrito.push(producto);
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(nombre) {
    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === nombre) {
            carrito[i].cantidad--;
            if (carrito[i].cantidad === 0) {
                carrito.splice(i, 1);
            }
            actualizarCarrito();
            return;
        }
    }
}

// Función para actualizar el carrito
function actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    var carritoElemento = document.getElementById("carrito");
    carritoElemento.innerHTML = "";
    total = 0;
    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];
        var precio = producto.precio * producto.cantidad;
        total += precio;
        carritoElemento.innerHTML += "<tr><td>" + producto.nombre + "</td><td>€" + producto.precio.toFixed(2) + "</td><td>" + producto.cantidad + "</td><td><button onclick=\"eliminarProducto('" + producto.nombre + "')\">Eliminar</button></td></tr>";
   
    }
    if (total>=100) {
        document.getElementById('descuento').innerHTML="Has desbloqueado un 20% de descuento!!";
        total=total-(total*0.2);
      }else{
        document.getElementById('descuento').innerHTML="";
      }
      
    document.getElementById("total").innerHTML = "€" + total.toFixed(2);
    
    

}

// Función para vaciar el carrito
function vaciarCarrito() {
	carrito = [];
	actualizarCarrito();
}
