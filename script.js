const libros = [];
const carrito = [];

function agregarLibro(){
    const titulo = document.getElementById("titulo").value;
    const precio = parseFloat(document.getElementById("precio").value);
    
    if (titulo && !isNaN(precio)){
        libros.push({titulo,precio});
        mostrarLibro();
        document.getElementById("titulo").value= '';
        document.getElementById("precio").value= '';
        
    }
}

function mostrarLibro(){
    const lista= document.getElementById("libros");
    lista.innerHTML = '';
    libros.forEach((libro, index) =>{
        const li = document.createElement("li");
        li.innerHTML = `<strong>${libro.titulo}</strong> <br>
        Precio: $ ${libro.precio} <br>
        <button onclick="agregarCarrito(${index})"> Agregar al carrito </button>
        `;
    lista.appendChild(li);
    })
}

function agregarCarrito(index){
    carrito.push(libros[index]);
    mostrarCarrito();
}

function eliminarCarrito(index){
    carrito.splice(index, 1);
    mostrarCarrito();
}

function mostrarCarrito(){
    const list = document.getElementById("carrito");
    list.innerHTML = '';
    let total = 0;
    carrito.forEach((libro, index) => {
    total += libro.precio;
    const li = document.createElement("li");
    li.innerHTML= ` ${libro.titulo} - ${libro.precio}
    <button onclick="eliminarCarrito(${index})">Eliminar del carrito</button>`;
    list.appendChild(li);
    });
    document.getElementById("total").textContent = total;
}