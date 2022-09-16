const cartaImg = [
    {
        id: 1,
        url: '/img/menu/cartaPag1.webp'
    },
    {
        id: 2,
        url: '/img/menu/cartaPag2.webp'
    }
]

function cerrarCarta(){
    document.querySelector(".botonCerrar").addEventListener('click',(event)=>{
        document.querySelector('.carta').classList.add('cerrarCarta')
    })
}

function verCarta(){
    document.querySelector(".buttonCarta").addEventListener('click',()=>{
        document.querySelector('.carta').classList.remove('cerrarCarta')
        document.querySelector('.carouselImg').innerHTML = `
        <img src="${cartaImg[0].url}"></img>
        `
        document.querySelector(".botonCerrar").style.cursor = "pointer";
        cerrarCarta()
    })
}
verCarta()
