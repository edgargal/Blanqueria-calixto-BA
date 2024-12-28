let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
    actualizarContadorCarrito();
    
    
}


// Función para actualizar el carrito en la página
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');

    listaCarrito.innerHTML = ''; // Limpia la lista antes de actualizar
    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        total += producto.precio;

        // Botón para eliminar producto
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.style.marginLeft = '10px';
        botonEliminar.onclick = () => {
            eliminarDelCarrito(index);
        };

        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });

    totalElement.textContent = total;
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const contador = document.getElementById('contador-carrito');
    contador.textContent = carrito.length;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para vaciar el carrito
document.getElementById('vaciar-carrito').addEventListener('click', () => {
    carrito = [];
    actualizarCarrito();
});

// Mostrar/ocultar carrito
document.getElementById('ver-carrito').addEventListener('click', () => {
    const carritoElement = document.getElementById('carrito');
    carritoElement.classList.toggle('oculto'); // Alterna la clase "oculto"
});

// Simular pago
document.getElementById('pagar').addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
    } else {
        const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        alert(`Gracias por tu compra. El total es $${total}`);
        carrito = [];
        actualizarCarrito();
    }
});

