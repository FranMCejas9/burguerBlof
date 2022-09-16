const traerDatos = JSON.parse(localStorage.getItem('filtroCategoria')) ?? ''

function generarCategorias(el){
    let secciones = new Set (el.map(producto =>{
        return producto.categoria
    }))
    secciones.forEach((seccion)=>{
        document.querySelector('#filtroCategoria').innerHTML +=
        `<li class="nav-item">
            <a id="filtro${seccion}"class="nav-link a1Cat" aria-current="page" data-categoria="${seccion}" data-menu="menu">${seccion}</a>
        </li>`
    })
}


document.querySelector('.filtros').addEventListener('mouseenter',()=>{
    document.querySelector('#filtroCategoria').classList.remove('cerrarMenu')
    document.querySelector('#filtroCategoria').addEventListener('mouseleave',()=>{
        document.querySelector('#filtroCategoria').classList.add('cerrarMenu')
    })
})

function filtrarCategoria(el){
    el.forEach((producto)=>{
        if(traerDatos != ''){
            document.querySelector('.menu').innerHTML = ''
            let filtrar = el.filter(producto => producto.categoria === traerDatos)
            crearCards(filtrar)
            localStorage.clear();
        }
        let idFiltro = `filtro${producto.categoria}`
        document.querySelector(`#${idFiltro}`).addEventListener('click', (event)=>{ 
            document.querySelector('.menu').innerHTML = ''
            let filtro = event.target.getAttribute("data-categoria")
            let filtrar = el.filter(producto => producto.categoria === filtro)
                crearCards(filtrar);
        })
    })
}

function abrirSubMenu(){
    /* Submenu en pc */
    document.querySelector('.menuLink').addEventListener('mouseenter',()=>{
        document.querySelector('#filtroCategoria').classList.remove('cerrarMenu')
        document.querySelector('#filtroCategoria').addEventListener('mouseleave',()=>{
            document.querySelector('#filtroCategoria').classList.add('cerrarMenu')
        })
    })

    
    /* Submenu en movil */
    document.querySelector('.flechaCategorias').addEventListener('click',()=>{
        document.querySelector('#filtroCategoria').classList.remove('cerrarMenu');
        document.querySelector('.cerrarSubMenu').addEventListener('click',()=>{
            document.querySelector('#filtroCategoria').classList.add('cerrarMenu')
        })
    })
}
abrirSubMenu();


function crearCards(el){
    el.forEach(product => {
        document.querySelector('.menu').innerHTML +=
        `
        <div class="food-items">
            <img src="${product.img}">
            <div class="details">
                <div class="details-sub">
                    <h5>${product.producto}</h5>
                    <h5 class="price"> $${product.precio}</h5>
                </div>
                <p>${product.descripcion}</p>
                <a href="https://api.whatsapp.com/send?phone=2478514366&text=Hola!%20Quiero%20pedirte%20esta%20Burger!%20${product.producto}%20$${product.precio}" target="_blank">Pedir</a>
            </div>
        </div>
        `
    });
}


fetch ('../productos.json')
.then(response => response.json())
.then((data) =>{ 
    crearCards(data)
    generarCategorias(data)
    filtrarCategoria(data)
} );