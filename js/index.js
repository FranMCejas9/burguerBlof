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
            location.href = ('./pages/menu.html')
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




function cardIndex (el, num){
    document.querySelector('#menuIndex').innerHTML +=`
        <div class="col-lg-4 col-md-12 mb-4 " data-aos="fade-up">
            <div class="card">
                <div class="bg-image ripple ripple-surface ripple-surface-light " data-mdb-ripple-color="light">
                    <div class="imgContainer">
                        <img src="${el[num].img}" class="imgZoom"/>
                    </div>
                    <a href="./pages/menu.html">
                        <div class="mask">
                            <div class="d-flex justify-content-start align-items-end h-100 p-1">
                                <h5><span class="badge bg-primary ms-2">${el[num].categoria}</span></h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="card-description">
                    <a href="./pages/menu.html" class="text-reset">
                        <h5 class="card-title mb-3">${el[num].producto}</h5>
                    </a>
                    <h6 class="mb-3">$${el[num].precio}</h6>
                </div>
            </div>
        </div>
        `
}
function numeroRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function crearCardIndex(el){
    for (i=0; i < 1;i++){
        let numeroAleatorio = numeroRandom(0,3)  
        cardIndex(el,numeroAleatorio);
    }
    for (i=0; i < 1;i++){
        let numeroAleatorio = numeroRandom(4,7)  
        cardIndex(el,numeroAleatorio);
    }
    for (i=0; i < 1;i++){
        let numeroAleatorio = numeroRandom(8,11)  
        cardIndex(el,numeroAleatorio);
    }
}

fetch('productos.json')
.then(response => response.json())
.then((data)=>{
    crearCardIndex(data)
    generarCategorias(data)
})