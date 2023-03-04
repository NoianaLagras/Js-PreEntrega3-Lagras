
const container = document.getElementById("container");
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")
const cantidadCarrito = document.getElementById("cantidadCarrito");



let carrito = JSON.parse (localStorage.getItem("Compra")) || [];

productos.forEach((productos)=> {
    let content = document.createElement("div");
    content.className="cards"
    content.innerHTML =`
    <img src ="${productos.img}">
    <h3> ${productos.nombre}</h3>
    <h6> ${productos.desc}</h6>
  
    <p class ="price">$${productos.precio} </p>
    `;
    container.append(content)

    let comprar = document.createElement("button")
    comprar.innerText= "Agregar al carrito";
    comprar.className="comprar"

    content.append(comprar);



comprar.addEventListener("click", ( )=>{

    const repetir = carrito.some((repetirProduct) => repetirProduct.id === productos.id);

    if(repetir){
        carrito.map((prod) => {
            if(prod.id === productos.id){
                prod.cantidad++;
            }
        });
    }else{
        carrito.push({
            id:productos.id,
            img:productos.img,
            nombre:productos.nombre,
            desc:productos.desc,
            precio:productos.precio,
            cantidad:productos.cantidad
            });
    }
    carritoContador();
    saveLocal();
    });
});




// LocalStorage
const saveLocal = () => {
    localStorage.setItem("Compra",JSON.stringify(carrito));
}