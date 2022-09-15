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
.then(data => 
    crearCards(data)
    );