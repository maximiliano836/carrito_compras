

const productos = [
  {
    name: "Cemento Portland" ,
    id: 1,
    precio: 6,
    imagen: "imgs/cemento.png",
    moneda: "U$S",
  },
  {
    name: "Caño de cobre",
    id: 2,
    precio: 8,
    imagen: "imgs/canio_de_cobre.jpg",
    moneda: "U$S",
  },
  {
    name: "Atornillador eléctrico",
    id: 3,
    precio: 7,
    imagen: "imgs/tornilladora.jpg",
    moneda: "U$S",
  },
  {
    name: "Taladro",
    id: 4,
    precio: 6,
    imagen: "imgs/taladro.jpg",
    moneda: "U$S",
  },
  {
    name: "cCmpresor",
    id: 5,
    precio: 608,
    imagen: "imgs/compresor.jpg",
    moneda: "U$S",
  },
  {
    name: "Martillo" ,
    id: 6,
    precio: 6,
    imagen: "imgs/martillo.jpg",
    moneda: "U$S",
  },
  {
    name: "Balde",
    id: 7,
    precio: 8,
    imagen: "imgs/balde.jpg",
    moneda: "U$S",
  },
  {
    name: "Arena",
    id: 8,
    precio: 7,
    imagen: "imgs/arena.jpg",
    moneda: "U$S",
  },
  {
    name: "Trifásico",
    id: 9,
    precio: 6,
    imagen: "imgs/trifasico.png",
    moneda: "U$S",
  },
  {
    name: "Franelas",
    id: 10,
    precio: 68,
    imagen: "imgs/franelas.jpg",
    moneda: "U$S",
  },
  {
    name: "Cinta de aluminio",
    id: 11,
    precio: 7,
    imagen: "imgs/cinta_aluminio.jpg",
    moneda: "U$S",
  },
  {
    name: "Motosierra",
    id: 11,
    precio: 6,
    imagen: "imgs/motosierra.jpg",
    moneda: "U$S",
  },
  {
    name: "Aislación",
    id: 12,
    precio: 8,
    imagen: "imgs/aislacion.jpeg",
    moneda: "U$S",
  },
   {
    name: "Hidrolavadora",
    id: 13,
    precio: 89,
    imagen: "imgs/hidrolavadora.jpg",
    moneda: "U$S",
  },
   {
    name: "Rejilla",
    id: 13,
    precio: 89,
    imagen: "imgs/rejilla.jpg",
    moneda: "U$S",
  },
   {
    name: "Pintura",
    id: 14,
    precio: 59,
    imagen: "imgs/pintura.jpeg",
    moneda: "U$S",
  },
   {
    name: "Cal",
    id: 15,
    precio: 66,
    imagen: "imgs/cal.jpg",
    moneda: "U$S",
  },
   {
    name: "Membrana líquida",
    id: 16,
    precio: 669,
    imagen: "imgs/membrana_liquida.jpg",
    moneda: "U$S",
  },
   {
    name: "Baldosa de cerámica",
    id: 17,
    precio: 969,
    imagen: "imgs/baldoza.jpeg",
    moneda: "U$S",
  },
   {
    name: "Lámpara de bajo consumo",
    id: 18,
    precio: 49,
    imagen: "imgs/lampara_bajo_consumo.jpg",
    moneda: "U$S",
  },
   {
    name: "Amoladora",
    id: 19,
    precio: 47,
    imagen: "imgs/moladora.jpeg",
    moneda: "U$S",
  },
   {
    name: "Rotomartillo",
    id: 20,
    precio: 69,
    imagen: "imgs/rotamartillo.jpg",
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
