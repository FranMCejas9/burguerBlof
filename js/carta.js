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
        let index = 0
        document.querySelector('.carouselRightArrow').addEventListener('click',()=>{
            if(index === 0){
                index = 1
                document.querySelector('.carouselImg').innerHTML = `
                <img src="${cartaImg[index].url}"></img>
                `
            }
        })
        document.querySelector('.carouselLeftArrow').addEventListener('click',()=>{
            if(index === 1){
                index = 0
                document.querySelector('.carouselImg').innerHTML = `
                <img src="${cartaImg[index].url}"></img>
                `
            }
        })
        document.querySelector('.carouselImg').innerHTML = `
        <img src="${cartaImg[index ].url}"></img>
        `
        document.querySelector(".botonCerrar").style.cursor = "pointer";
        cerrarCarta()
    })
}
verCarta()
