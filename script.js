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

const carrito = document.getElementById("carrito");
const listaProductos = document.getElementById("listaProductos");
const precioTotalElement = document.getElementById("preciototal");
let precioTotal = 0;

productos.forEach((producto) => {
  const productoDiv = document.createElement("div");
  productoDiv.className = "col-md-5 mb-5";

  productoDiv.innerHTML = `
  <div class="card ">
    <img src="${producto.imagen}" class="card-img-top" style="max-width: 200px; max-height: 200px;" alt="${producto.name}">
    <div class="card-body">
      <h5 class="card-title">${producto.name}</h5>
      <p class="card-text">Precio: $${producto.precio}</p>
      <button class="btn btn-primary comprar-btn" data-id="${producto.id}">Comprar</button>
    </div>
  </div>
`;

  const comprarBtn = productoDiv.querySelector(".comprar-btn");
  comprarBtn.addEventListener("click", () => {
    agregarAlCarrito(producto);
    window.location.href = "#carrito";
  });

  const listaProductos = document.getElementById("listaProductos");
  listaProductos.appendChild(productoDiv);
});

function agregarAlCarrito(producto) {
  const carrito = document.getElementById("carrito");
  const productoCarrito = document.createElement("div");
  productoCarrito.innerHTML = `
    <p>${producto.name} - Precio: $${producto.precio}</p>
  `;
  carrito.appendChild(productoCarrito);

  precioTotal += producto.precio;
  precioTotalElement.textContent = `Precio Total: $${precioTotal}`;
}
