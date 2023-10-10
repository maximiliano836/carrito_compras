

const productos = [
  {
    name: "cemento portland" ,
    id: 1,
    precio: 6,
    imagen: "imgs/cemento.png",
    moneda: "USS",
  },
  {
    name: "caño de cobre",
    id: 2,
    precio: 8,
    imagen: "canio_de_cobre.jpeg",
    moneda: "USS",
  },
  {
    name: "Tornillador eléctico",
    id: 3,
    precio: 7,
    imagen: "img/mesapool.jpg",
    moneda: "U$S",
  },
  {
    name: "taladro",
    id: 4,
    precio: 6,
    imagen: "",
    moneda: "U$S",
  },
  {
    name: "compresor",
    id: 5,
    precio: 608,
    imagen: "",
    moneda: "U$S",
  },
  {
    name: "martillo" ,
    id: 6,
    precio: 6,
    imagen: "",
    moneda: "U$S",
  },
  {
    name: "balde",
    id: 7,
    precio: 8,
    imagen: "",
    moneda: "U$S",
  },
  {
    name: "arena",
    id: 8,
    precio: 7,
    imagen: "",
    moneda: "U$S",
  },
  {
    name: "trifásico",
    id: 9,
    precio: 6,
    imagen: "",
    moneda: "U$S",
  },
  {
    name: "franelas",
    id: 10,
    precio: 68,
    imagen: "",
    moneda: "U$S",
  },
  {
    name: "cinta aluminio",
    id: 11,
    precio: 7,
    imagen: "",
    moneda: "U$S",
  },
  {
    name: "motosierra",
    id: 11,
    precio: 6,
    imagen: "",
    moneda: "U$S",
  },
  {
    name: "aislación",
    id: 12,
    precio: 8,
    imagen: "",
    moneda: "U$S",
  },
   {
    name: "hidrolavadora",
    id: 13,
    precio: 89,
    imagen: "",
    moneda: "U$S",
  },
   {
    name: "rejilla",
    id: 13,
    precio: 89,
    imagen: "",
    moneda: "U$S",
  },
   {
    name: "pintura",
    id: 14,
    precio: 59,
    imagen: "",
    moneda: "U$S",
  },
   {
    name: "cal",
    id: 15,
    precio: 66,
    imagen: "",
    moneda: "U$S",
  },
   {
    name: "membrana líquida",
    id: 16,
    precio: 669,
    imagen: "",
    moneda: "U$S",
  },
   {
    name: "baldosa de cerámica",
    id: 17,
    precio: 969,
    imagen: "",
    moneda: "U$S",
  },
   {
    name: "lámpara de bajo consumo",
    id: 18,
    precio: 49,
    imagen: "",
    moneda: "U$S",
  },
   {
    name: "amoladora",
    id: 19,
    precio: 47,
    imagen: "",
    moneda: "U$S",
  },
   {
    name: "rotomartillo",
    id: 20,
    precio: 69,
    imagen: "",
    moneda: "U$S",
   }]

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
   
   const productosEnCarrito = [];
   
   function agregarAlCarrito(producto) {
     productosEnCarrito.push(producto);
   
     const productoCarrito = document.createElement("div");
     productoCarrito.classList.add("list-group");
     productoCarrito.innerHTML = `
       <p class="font-family-monospace">${producto.name} - Precio: $${producto.precio} <button class="btn btn-primary eliminar-btn" data-id="${producto.id}">Eliminar</button></p>
     `;
     carrito.appendChild(productoCarrito);
   
     precioTotal += producto.precio;
     precioTotalElement.textContent = `Precio Total: $${precioTotal}`;
   
     const eliminarBtn = productoCarrito.querySelector(".eliminar-btn");
     eliminarBtn.addEventListener("click", () => {
       eliminarDelCarrito(producto);
     });
   }
   
   function eliminarDelCarrito(producto) {
     const index = productosEnCarrito.findIndex((p) => p.id === producto.id);
     if (index !== -1) {
       productosEnCarrito.splice(index, 1);
   
       // Actualiza la vista del carrito
       const carrito = document.getElementById("carrito");
       carrito.innerHTML = ""; // Limpia el contenido del carrito
   
       // Recrea los elementos en el carrito
       productosEnCarrito.forEach((p) => {
         const productoCarrito = document.createElement("div");
         productoCarrito.innerHTML = `
           <p>${p.name} - Precio: $${p.precio} <button class="btn btn-primary eliminar-btn" data-id="${p.id}">Eliminar</button></p>
         `;
         carrito.appendChild(productoCarrito);
   
         const eliminarBtn = productoCarrito.querySelector(".eliminar-btn");
         eliminarBtn.addEventListener("click", () => {
           eliminarDelCarrito(p);
         });
       });
   
       precioTotal = productosEnCarrito.reduce((total, p) => total + p.precio, 0);
       precioTotalElement.textContent = `Precio Total: $${precioTotal}`;
     }
   }

   document.getElementById('cash').addEventListener('change', updateTotal);
document.getElementById('debit').addEventListener('change', updateTotal);
document.getElementById('credit').addEventListener('change', updateTotal);

function updateTotal() {
  let total = productosEnCarrito.reduce((total, p) => total + p.precio, 0);

  if (this.id === 'cash') {
   
    total *= 0.9;
  } else if (this.id === 'credit') {
   
    total *= 1.07;
  }

  precioTotal = total;
  precioTotalElement.textContent = `Precio Total: $${precioTotal.toFixed(2)}`;
}
