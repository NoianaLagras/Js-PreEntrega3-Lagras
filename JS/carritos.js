const pintarCarrito= ()=> {
    modalContainer.innerHTML="";
    modalContainer.style.display="flex"
    
    const modalHeader = document.createElement("div");
    modalHeader.className= "modal-header"
    modalHeader.innerHTML=`
    <h1 class"modal-header.title">Neathur Shop...</h1>
    `;
    modalContainer.append (modalHeader);


    const modalbutton= document.createElement("h1");
    modalbutton.innerText="⬅️ Volver";
    modalbutton.className="modal-header-button";

    modalbutton.addEventListener("click", ()=> {
        modalContainer.style.display="none";
    })
    modalHeader.append(modalbutton);



    //-----Pintar Modal----
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className= "modal-content";
        carritoContent.innerHTML= `
        <img src="${product.img}">
        <h3> ${product.nombre}</h3>
        <p>Precio $ ${product.precio} </p>
        <span class ="restar">  ➖  </span>
        <span class ="sumar">  ➕  </span>
        <p> Cantidad ${product.cantidad} </p>
        <p> Total ${product.cantidad * product.precio} </p>
    `;

    modalContainer.append(carritoContent);




    let restar = carritoContent.querySelector(".restar")

    restar.addEventListener ("click", () =>{
        if(product.cantidad!==1){
            product.cantidad--;
        }
        saveLocal();
        pintarCarrito();
    });



let sumar = carritoContent.querySelector(".sumar")

    sumar.addEventListener ("click", () =>{
            product.cantidad++;
            saveLocal();
            pintarCarrito();
    });

let eliminar=document.createElement("span");

    eliminar.innerHTML="❌"
    eliminar.className="delete-product"
    carritoContent.append(eliminar);
    eliminar.addEventListener ("click", eliminarProducto)
    });


const total= carrito.reduce((acc,el) => acc +el.precio* el.cantidad,0);

const totalCompra = document.createElement("div")
totalCompra.className= "total-content"
totalCompra.innerHTML = `Precio Total : $${total}`;
modalContainer.append(totalCompra);
modalContainer.append(irApagar)
};


verCarrito.addEventListener("click" , pintarCarrito);
const eliminarProducto=()=> {
    const foundId =carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })
    carritoContador();
    saveLocal();
    pintarCarrito();
};
//Contador 

const carritoContador = () => {
    cantidadCarrito.style.display= "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText= JSON.parse(localStorage.getItem("carritoLength"))
};
carritoContador();

const irApagar =  document.createElement("span")
irApagar.className="irApagar"
irApagar.innerHTML =`
<a href="pages/checkout.html" target="_blank">Ir al Checkout</a>
`
