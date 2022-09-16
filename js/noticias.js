function generarCategorias(el){
    let secciones = new Set (el.map(producto =>{
        return producto.categoria
    }))
    secciones.forEach((seccion)=>{
        document.querySelector('#filtroCategoria').innerHTML +=
        `<li class="nav-item">
        <a id="filtro${seccion}"class="nav-link a1Cat" aria-current="page" data-categoria="${seccion}">${seccion}</a>
        </li>`
    })
    secciones.forEach((seccion)=>{
        let idFiltro = `filtro${seccion}`
        document.querySelector(`#${idFiltro}`).addEventListener('click', (event)=>{ 
            let categoriaNodo = event.target.getAttribute('data-categoria')
            localStorage.setItem('filtroCategoria', JSON.stringify(categoriaNodo))
            location.href = ('menu.html')
        })
    })
}


document.querySelector('.filtros').addEventListener('mouseenter',()=>{
    document.querySelector('#filtroCategoria').classList.remove('cerrarMenu')
    document.querySelector('#filtroCategoria').addEventListener('mouseleave',()=>{
        document.querySelector('#filtroCategoria').classList.add('cerrarMenu')
    })
})

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

fetch ('../productos.json')
.then(response => response.json())
.then((data) =>{ 
    generarCategorias(data)
} );