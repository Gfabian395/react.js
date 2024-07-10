const productos = [
    { nombre: 'Cocina Escorial Candor', imagen: './COCINAS.png', precio: '$250.000' },
    /* { nombre: '', descripcion: '', imagen: '', precio: '' },
    { nombre: '', descripcion: '', imagen: '', precio: '' },
 */];

function createProductoCard(productoData) {
    return `
    <div class="producto-card">
        <img src="${productoData.imagen}" alt="${productoData.nombre}">
            <h2>${productoData.nombre}</h2>
            <h3>${productoData.precio}</h3>
            <a href="#" class="button">Ver Mas +</a>    
    </div>
    `;
}

function renderProductoCard(containerId, productos) {
    const container = document.getElementById(containerId);
    container.innerHTML = productos.map(createProductoCard).join('');
}

renderProductoCard('producto-card-container', productos);