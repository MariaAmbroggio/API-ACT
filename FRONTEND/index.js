import ProductoController from "../JS/ProductoJS";



window.onload= async()=>{
   let producto = await new ProductoController().obtenerProducto();
   
  
   console.log(planetas);

   let panelProductoElement = document.querySelector("#panelProducto");
   producto.forEach(producto => {
      panelProductoElement.innerHTML +=`
         <div class='${producto.id}'>
            <button style="background-image: image(planeta.image);" class="buttonclick" id="${planeta.name}" bac onclick="">
               <img src="${planeta.image}">  
            </button>
            <p>${planeta.name}</p>  
         </div>
      `;
      });  
}