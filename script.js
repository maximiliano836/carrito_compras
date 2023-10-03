const productos = [
  {
    name: "Auriculares",
    id: 1,
    color: "#f9c2f8",
    precio: 674,
    imagen: "img/auriculares.jpg",
  },
  {
    name: "Catan",
    id: 2,
    precio: 838,
    imagen: "img/catan.jpg",
  },
  {
    name: "Mesa pool",
    id: 3,
    precio: 257,
    imagen: "img/mesapool.jpg",
  },
  {
    name: "Cubo Rubik",
    id: 4,
    precio: 196,
    imagen: "img/rubik.jpg",
  },
  {
    name: "Peluche Escandaloso",
    id: 5,
    precio: 608,
    imagen: "img/pelucheescandaloso.jpg",
  },
];

const carrito = document.getElementById('carrito');
const listaProductos = document.getElementById('listaProductos');
const precioTotalElement = document.getElementById('preciototal');
let precioTotal = 0; 

productos.forEach(producto => {
  const li = document.createElement('li');
  li.innerHTML = `
    <div>
      <img src="${producto.imagen}" style="max-width: 200px; max-height: 200px;" alt="${producto.name}">
      <br>
      Nombre: ${producto.name}
      <br>
      Precio: $${producto.precio}
      <br>
      <button class="btn btn-primary comprar-btn" data-id="${producto.id}">Comprar</button>
    </div>
  `;

  const botonCompra = li.querySelector('.comprar-btn');
  botonCompra.addEventListener('click', () => {
    agregarAlCarrito(producto);
  });

  listaProductos.appendChild(li);
});

function agregarAlCarrito(producto) {
  const li = document.createElement('li');
  li.textContent = `${producto.name} - Precio: $${producto.precio}`;
  carrito.appendChild(li);

  precioTotal += producto.precio;
  precioTotalElement.textContent = `Precio Total: $${precioTotal}`;
}
