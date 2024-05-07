const carrito =document.getElementById("carrito"),
      listaCompra =document.getElementById("lista-compra"),
      contenedorCarrito =document.querySelector('.buy-card .lista-de-compras');
      vaciarCarritoBtn =document.querySelector('#vaciar_carro');

let articulosCarrito = [];

registrarEventListeners()


function registrarEventListeners(){
    listaCompra.addEventListener('click', agregarCompra);

    carrito.addEventListener('click', eliminarCompra);

    vaciarCarritoBtn.addEventListener('click', e => {
        articulosCarrito = [];
        limpiarHTML()
    })
}

function agregarCompra(e){
    if(e.target.classList.contains("card__button2")){
        const compraSeleccionada = e.target.parentElement.parentElement;
        leerInfo(compraSeleccionada)
    }
}

function eliminarCompra(e) {
    if(e.target.classList.contains("borrar-compra")){
        const compraId = e.target.getAttribute('data-id');
        
        articulosCarrito = articulosCarrito.filter(compra => compra.id !== compraId)

        carritoHTML()

    }
}

function leerInfo(compra){
    const infoCompra = {
        imagen : compra.querySelector('img').src,
        titulo : compra.querySelector('h2').textContent,
        precio : compra.querySelector('.precio').textContent,
        id : compra.querySelector('button').getAttribute('data-id'),
        cantidad : 1

    }
    const existe = articulosCarrito.some(compra => compra.id === infoCompra.id)

    if (existe) {
        const compras = articulosCarrito.map(compra => {
            if (compra.id === infoCompra.id) {
                compra.cantidad++;
                return compra 
            } else {
                return compra;
            }
        });
        [...articulosCarrito,infoCompra]
    } else {
        articulosCarrito = [...articulosCarrito,infoCompra]
    }
    carritoHTML()
}


function carritoHTML(){
    limpiarHTML()
    articulosCarrito.forEach(compra => {
        const fila = document.createElement('div');
        fila.innerHTML = `
            <img src="${compra.imagen}"></img>
            <p>${compra.titulo}</p>
            <p>${compra.precio}</p>
            <p>${compra.cantidad}</p>
            <p><span class="borrar-compra" data-id="${compra.id}">X</span></p>
        `;

       contenedorCarrito.appendChild(fila)
    });
}


function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}