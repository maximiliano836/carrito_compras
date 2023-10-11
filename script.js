const productos = [
  {
    name: "Cemento Portland" ,
    id: 1,
    precio: 6,
<<<<<<< Updated upstream
    imagen: "imgs/cemento.png",
    moneda: "$",
=======
    imagen: "img/auriculares.jpg",
    moneda: "USS",
    stock: 4,
>>>>>>> Stashed changes
  },
  {
    name: "Caño de cobre",
    id: 2,
    precio: 8,
<<<<<<< Updated upstream
    imagen: "imgs/canio_de_cobre.jpg",
    moneda: "$",
=======
    imagen: "img/catan.jpg",
    moneda: "USS",
    stock: 40,
>>>>>>> Stashed changes
  },
  {
    name: "Atornillador eléctrico",
    id: 3,
    precio: 7,
<<<<<<< Updated upstream
    imagen: "imgs/tornilladora.jpg",
    moneda: "$",
=======
    imagen: "img/mesapool.jpg",
    moneda: "USS",
    stock: 43,
>>>>>>> Stashed changes
  },
  {
    name: "Taladro",
    id: 4,
    precio: 6,
<<<<<<< Updated upstream
    imagen: "imgs/taladro.jpg",
    moneda: "$",
=======
    imagen: "",
    moneda: "USS",
    stock: 42,
>>>>>>> Stashed changes
  },
  {
    name: "Compresor",
    id: 5,
    precio: 608,
<<<<<<< Updated upstream
    imagen: "imgs/compresor.jpg",
    moneda: "$",
=======
    imagen: "",
    moneda: "USS",
    stock: 32,
>>>>>>> Stashed changes
  },
  {
    name: "Martillo" ,
    id: 6,
    precio: 6,
<<<<<<< Updated upstream
    imagen: "imgs/martillo.jpg",
    moneda: "$",
=======
    imagen: "",
    moneda: "USS",
    stock: 290,
>>>>>>> Stashed changes
  },
  {
    name: "Balde",
    id: 7,
    precio: 8,
<<<<<<< Updated upstream
    imagen: "imgs/balde.jpg",
    moneda: "$",
=======
    imagen: "",
    moneda: "USS",
    stock: 426,
>>>>>>> Stashed changes
  },
  {
    name: "Arena",
    id: 8,
    precio: 7,
<<<<<<< Updated upstream
    imagen: "imgs/arena.jpg",
    moneda: "$",
=======
    imagen: "",
    moneda: "USS",
    stock: 992,
>>>>>>> Stashed changes
  },
  {
    name: "Trifásico",
    id: 9,
    precio: 6,
<<<<<<< Updated upstream
    imagen: "imgs/trifasico.png",
    moneda: "$",
=======
    imagen: "",
    stock: 212,
>>>>>>> Stashed changes
  },
  {
    name: "Franelas",
    id: 10,
    precio: 68,
    imagen: "imgs/franelas.jpg",
    moneda: "$",
  },
  {
    name: "Cinta de aluminio",
    id: 11,
    precio: 7,
    imagen: "imgs/cinta_aluminio.jpg",
    moneda: "$",
  },
  {
    name: "Motosierra",
    id: 11,
    precio: 6,
<<<<<<< Updated upstream
    imagen: "imgs/motosierra.jpg",
    moneda: "$",
=======
    imagen: "",
    moneda: "USS",
    stock: 472,
>>>>>>> Stashed changes
  },
  {
    name: "Aislación",
    id: 12,
    precio: 8,
<<<<<<< Updated upstream
    imagen: "imgs/aislacion.jpeg",
    moneda: "$",
=======
    imagen: "",
    moneda: "USS",
    stock: 429,
>>>>>>> Stashed changes
  },
   {
    name: "Hidrolavadora",
    id: 13,
    precio: 89,
<<<<<<< Updated upstream
    imagen: "imgs/hidrolavadora.jpg",
    moneda: "$",
=======
    imagen: "",
     moneda: "USS",
    stock: 429,
>>>>>>> Stashed changes
  },
   {
    name: "Rejilla",
    id: 13,
    precio: 89,
<<<<<<< Updated upstream
    imagen: "imgs/rejilla.jpg",
    moneda: "$",
=======
    imagen: "",
     moneda: "USS",
    stock: 423,
>>>>>>> Stashed changes
  },
   {
    name: "Pintura",
    id: 14,
    precio: 59,
<<<<<<< Updated upstream
    imagen: "imgs/pintura.jpeg",
    moneda: "$",
=======
    imagen: "",
     moneda: "USS",
    stock: 412,
>>>>>>> Stashed changes
  },
   {
    name: "Cal",
    id: 15,
    precio: 66,
<<<<<<< Updated upstream
    imagen: "imgs/cal.jpg",
    moneda: "$",
=======
    imagen: "",
     moneda: "USS",
    stock: 49,
>>>>>>> Stashed changes
  },
   {
    name: "Membrana líquida",
    id: 16,
    precio: 669,
<<<<<<< Updated upstream
    imagen: "imgs/membrana_liquida.jpg",
    moneda: "$",
=======
    imagen: "",
    moneda: "USS",
    stock: 42,
>>>>>>> Stashed changes
  },
   {
    name: "Baldosa de cerámica",
    id: 17,
    precio: 969,
<<<<<<< Updated upstream
    imagen: "imgs/baldoza.jpeg",
    moneda: "$",
=======
    imagen: "",
     moneda: "USS",
    stock: 428,
>>>>>>> Stashed changes
  },
   {
    name: "Lámpara de bajo consumo",
    id: 18,
    precio: 49,
<<<<<<< Updated upstream
    imagen: "imgs/lampara_bajo_consumo.jpg",
    moneda: "$",
=======
    imagen: "",
     moneda: "USS",
    stock: 22,
>>>>>>> Stashed changes
  },
   {
    name: "Amoladora",
    id: 19,
    precio: 47,
<<<<<<< Updated upstream
    imagen: "imgs/moladora.jpeg",
    moneda: "$",
=======
    imagen: "",
     moneda: "USS",
    stock: 48,
>>>>>>> Stashed changes
  },
   {
    name: "Rotomartillo",
    id: 20,
    precio: 69,
<<<<<<< Updated upstream
    imagen: "imgs/rotamartillo.jpg",
    moneda: "$",
   }]
=======
    imagen: "",
     moneda: "USS",
    stock: 420,
  },
];
>>>>>>> Stashed changes


   const carrito = document.getElementById("carrito");
   const listaProductos = document.getElementById("listaProductos");
   const precioTotalElement = document.getElementById("preciototal");
   let precioTotal = 0;
   
   productos.forEach((producto) => {
     const productoDiv = document.createElement("div");
     productoDiv.className = "col-md-5 mb-5";
   
     productoDiv.innerHTML = `
     <div class="card ">
       <img src="${producto.imagen}" class="card-img-top" style="max-width: 200px; max-height: 200px; min-width: 200px; min-height: 200px;" alt="${producto.name}">
       <div class="card-body">
         <h5 class="card-title">${producto.name}</h5>
         <p class="card-text">Precio: $${producto.precio}</p>
         <button class="btn btn-primary comprar-btn" data-id="${producto.id}">Comprar</button>
         <label>
         <en>cantidad</en>
         <input id="cantidad" type="number" clas="d-flex justify-content-end "min=0 maxlenght=3>
         <label>
         <p class="card-text d-flex justify-content-end stock">En stock: ${producto.stock}</p>
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
     <img src="${producto.imagen}" class="list-group-item d-flex justify-content-between align-items-center card-img-top"  style="max-width: 100px; max-height: 100px; min-width: 100px; min-height: 100px;" alt="${producto.name}">
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
           <p>${p.name} - Precio: $${p.precio} <button class="btn btn-secundary eliminar-btn" data-id="${p.id}">Eliminar</button></p>
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

<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
