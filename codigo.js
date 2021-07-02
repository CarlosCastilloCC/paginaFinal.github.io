/*  evento cambio de vista  */ 

const btnDarkLigth = document.querySelector("#light-dark-mode");
let x = 0;
btnDarkLigth.addEventListener("click", function (){
    document.body.classList.toggle("light");

});

/*  variables carrito   */ 

const añadiralcarrito = document.querySelectorAll('.añadircarrito');
añadiralcarrito.forEach(añadircard => {
    añadircard.addEventListener('click', añadirConClick);
});
const almacenCarrito = document.querySelector('.almacen-carrito');

/*  funsiones carrito   */ 

function añadirConClick(event) {
   const button = event.target;
   const item = button.closest('.item');


   const itemTitulos = item.querySelector('.item-tirulo').textContent;
   const itemPrecio = item.querySelector('.item-precio').textContent;
   const itemImagen = item.querySelector('.item-imagen').src;

añadirItemsCarrito(itemTitulos, itemPrecio, itemImagen);
}

function añadirItemsCarrito(itemTitulos, itemPrecio, itemImagen){
    const filaCarrito = document.createElement('div');
    const carritoContenido = `
        <div  class="row  almacen-carrito   h-100 w-100 mx-2">
                <div class="col-8 ">
                    <div class=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <img src=${itemImagen} class="imagen-carrito">
                        <h6 class="text-truncate ml-3 mb-0">${itemTitulos}
                        </h6>
                    </div>
                </div>
                <div class="col-2 ">
                    <div class=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <p class=" mb-0 ">${itemPrecio}</p>
                    </div>
                </div>
                <div class="col-2 ">
                    <div
                        class="  text-white d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                        <button class="btn text-white border-primary  boton-borrar " type="button class="">X</button>
                    </div>
                </div>
            </div> 
            


    `;
    
    filaCarrito.innerHTML = carritoContenido

    almacenCarrito .append(filaCarrito);

    filaCarrito.querySelector('.boton-borrar').addEventListener('click', borrarfila); 
    
    carVacio.classList.add('d-none');
      carVacio.classList.remove('d-flex');

}




const carVacio = document.querySelector('#vacio');


/*  borrar todos los productos  */ 
var boton = document.getElementById("eliminar");

var boton = document.getElementById("eliminar");
boton.addEventListener("click", function() {
  document.getElementById("vaciar").innerHTML = '';
},false);



/*  borrar productos  */ 
function borrarfila(event) {
    const buttonclicked = event.target;
    buttonclicked.closest('.almacen-carrito').remove();
    
}

const  NumItem = document.querySelector('#numero-item');
NumItem.textContent = almacenCarrito.children.length;
console.log();






