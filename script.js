const productos = [
  {
    name: "Cemento Portland" ,
    id: 1,
    precio: 6,
    imagen: "imgs/cemento.png",
    moneda: "$",
    stock: 118,
  },
  {
    name: "Caño de cobre",
    id: 2,
    precio: 8,
    imagen: "imgs/canio_de_cobre.jpg",
    moneda: "$",
    stock: 9,
  },
  {
    name: "Atornillador eléctrico",
    id: 3,
    precio: 7,
    imagen: "imgs/tornilladora.jpg",
    moneda: "$",
    stock: 12,
  },
  {
    name: "Taladro",
    id: 4,
    precio: 6,
    imagen: "imgs/taladro.jpg",
    moneda: "$",
    stock: 9,
  },
  {
    name: "Compresor",
    id: 5,
    precio: 608,
    imagen: "imgs/compresor.jpg",
    moneda: "$",
    stock: 76,
  },
  {
    name: "Martillo" ,
    id: 6,
    precio: 6,
    imagen: "imgs/martillo.jpg",
    moneda: "$",
    stock: 18,
  },
  {
    name: "Balde",
    id: 7,
    precio: 8,
    imagen: "imgs/balde.jpg",
    moneda: "$",
    stock: 19,
  },
  {
    name: "Arena",
    id: 8,
    precio: 7,
    imagen: "imgs/arena.jpg",
    moneda: "$",
    stock: 81,
  },
  {
    name: "Trifásico",
    id: 9,
    precio: 6,
    imagen: "imgs/trifasico.png",
    moneda: "$",
    stock: 81,
  },
  {
    name: "Franelas",
    id: 10,
    precio: 68,
    imagen: "imgs/franelas.jpg",
    moneda: "$",
    stock: 8,
  },
  {
    name: "Cinta de aluminio",
    id: 11,
    precio: 7,
    imagen: "imgs/cinta_aluminio.jpg",
    moneda: "$",
    stock: 83,
  },
  {
    name: "Motosierra",
    id: 11,
    precio: 6,
    imagen: "imgs/motosierra.jpg",
    moneda: "$",
    stock: 68,
  },
  {
    name: "Aislación",
    id: 12,
    precio: 8,
    imagen: "imgs/aislacion.jpeg",
    moneda: "$",
    stock: 97,
  },
   {
    name: "Hidrolavadora",
    id: 13,
    precio: 89,
    imagen: "imgs/hidrolavadora.jpg",
     moneda: "$",
    stock: 30,
  },
   {
    name: "Rejilla",
    id: 13,
    precio: 89,
    imagen: "imgs/rejilla.jpg",
     moneda: "$",
    stock: 11,
  },
   {
    name: "Pintura",
    id: 14,
    precio: 59,
    imagen: "imgs/pintura.jpeg",
     moneda: "$",
    stock: 94,
  },
   {
    name: "Cal",
    id: 15,
    precio: 66,
    imagen: "imgs/cal.jpg",
     moneda: "$",
    stock: 90,
  },
   {
    name: "Membrana líquida",
    id: 16,
    precio: 669,
    imagen: "imgs/membrana_liquida.jpg",
     moneda: "$",
     stock: 98,
  },
   {
    name: "Baldosa de cerámica",
    id: 17,
    precio: 969,
    imagen: "imgs/baldoza.jpeg",
     moneda: "$",
     stock: 39,
  },
   {
    name: "Lámpara de bajo consumo",
    id: 18,
    precio: 49,
    imagen: "imgs/lampara_bajo_consumo.jpg",
    moneda: "$",
     stock: 34,
  },
   {
    name: "Amoladora",
    id: 19,
    precio: 47,
    imagen: "imgs/moladora.jpeg",
     moneda: "$",
     stock: 35,
  },
   {
    name: "Rotomartillo",
    id: 20,
    precio: 69,
    imagen: "imgs/rotamartillo.jpg",
     moneda: "$",
     stock: 24,
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
       <img src="${producto.imagen}" class="card-img-top" style="max-width: 200px; max-height: 200px; min-width: 200px; min-height: 200px;" alt="${producto.name}">
       <div class="card-body">
         <h5 class="card-title">${producto.name}</h5>
         <p class="card-text">Precio: $${producto.precio}</p>
         <button class="btn btn-primary comprar-btn" data-id="${producto.id}">Comprar</button>
         <div clas="d-flex justify-content-end">
         <br>
         <label>
         <en>cantidad</en>
         
         <input id="cantidad${producto.id}" type="number" min=0 maxlenght=3>
         <label>
         <p id="stock${producto.id}" class="card-text mr-5"> En stock: ${producto.stock}</p>
         <div>
       </div>
     </div>
   `;
     
     const comprarBtn = productoDiv.querySelector(".comprar-btn");
     
     comprarBtn.addEventListener("click", () => {
       agregarAlCarrito(producto);
       window.location.href = "#carrito";
       let input = document.getElementById("cantidad" + producto.id).value;
       let currentStock = producto.stock
       let stock = document.getElementById("stock" + producto.id);
      let nuevoStock = currentStock - input
       if (input === "" && nuevoStock >= 0) {
         let enCarrito = productosEnCarrito.filter(prod => prod.id === producto.id);
         console.log(enCarrito);
        nuevoStock = nuevoStock - enCarrito.length;
        stock.innerHTML = "En stock:  " + nuevoStock;
         
       }else if (nuevoStock <= 0) {
         stock.innerHTML = `
        <div class="alert alert-warning m-0" role="alert">
        <strong m-1>Agotado</strong>
        </div>`
         
         comprarBtn.classList.add("disabled");
       } else {
         stock.innerHTML = nuevoStock;
        
       }
       
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
