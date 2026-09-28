const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-manos.webp",
  },
];

/**
 * 
 * @method mostrarModal
 */

mostrarModal = (num) => {
  document.getElementById("nombre-producto").innerText = productos[num].nombre;
    document.getElementById("descripcion-producto").innerText = productos[num].description;

  document.getElementById("modal").style.display = 'block';
}


/**
 * 
 * @method cerrarModal
 * @param {number} num
 */

cerrarModal = () => {
  document.getElementById("modal").style.display = 'none';
}

/**
 * 
 * @method mostrarCatalogo
 */

mostrarCatalogo = (newList = productos) => {
  let contenido = "";

  newList.forEach((productos, id) => {
    contenido += `<div>
    <img src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${productos.imagen}"alt="${productos.nombre}">
            <h3>${productos.nombre}</h3>
            <p>${producto.precio}</p>
            <button type="button" onclick="mostrarModal(${id})">Ver detalle de producto</button>
            <button type="button" onclick="agregarAlcarrito(${id})">Agregar al carrito</button>
    </div>`
  })

  document.getElementById("catalogo").innerHTML = contenido;
}

/**
 * 
 * @method agregarAlcarrito
 * @param {number}
 */

agregarAlcarrito = (num) => {
  let carritoList = localStorage.getItem("carrito");
  console.log(carritoList);

  if (carritoList==null) {
    carritoList=[];
  }else{
    carritoList = JSON.parse(carritoList);
    
  }
  carritoList.push(num);
  console.log(carritoList);
  localStorage.setItem("carrito", JSON.stringify(carritoList));
}

/**
 * 
 * @method mostrarCarrito
 */

mostrarCarrito = () => {
  let carritoList = localStorage.getItem("carrito");
  console.log(carritoList);
  let contenido = "";

  if (carritoList==null) {
    contenido = '<div>Su carrito de compras esta vacio</div>'
  }
  else{
  carritoList = JSON.parse(carritoList);


  console.log(carritoList);

  carritoList.forEach((num, id) => {
    contenido += `<div>
                  <h3>${productos[num].nombre}</h3>
                  <p>${productos[num].precio}</p>
                  <button type="button" onclick="eliminarProducto(${id})">Eliminar producto</button>
                  </div>`;
  });
   contenido += '<button type="button" onclick="vaciarCarrito()"> Vaciar carrito </button>'

  }

  

  document.getElementById("carrito").innerHTML = contenido;
}

/**
 * 
 * @method vaciarCarrito
 */

let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  window.location.reload();
}

/**
 * 
 * @param {number} id
 */

let eliminarProducto = (id) => {
  let carritoList = localStorage.getItem("carrito");
  carritoList = JSON.parse(carritoList);
  
  carritoList.splice(id, 1);

  if(carritoList.length > 0){
  localStorage.setItem("carrito", JSON.stringify(carritoList));
  }else{
    localStorage.removeItem("carrito")
  }

  window.location.reload();
}

/**
 * Filtra el catalogo
 * 
 */



let filtrarProductos = () => {
  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("price-min").value;
  let max = document.getElementById("price-ma").value;
  let marca = document.getElementById("marca").value;
  let prot = document.getElementById("protectores").checked;
  let entr = document.getElementById("entrenamiento").checked;
  let dob = document.getElementById("dobok").checked;
  let newLista = productos;

  if (searchWord) {
    newLista = newLista.filter((prod) => prod.nombre.toLowerCase().includes(searchWord.toLowerCase()));
  }

  if (min) {
    newLista = newLista.filter((prod) => prod.precio >= min) 
  }

  if (max) {
    newLista = newLista.filter((prod) => prod.precio <= max) 
  }

  if (marca != "Todas") {
    newLista = newLista.filter((prod) => prod.marca == marca)
  }

  let category = [];
  prot ? category.push("Protectores") : "";  
  entr ? category.push("Entrenamiento") : "";  
  dob ? category.push("Debok") : "";  

  if(category.length > 0){
    newLista = newLista.filter((prod) => category.includes(prod.categoria))
  }

  mostrarCatalogo(newLista);



}