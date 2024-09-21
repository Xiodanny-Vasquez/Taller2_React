//EJERCICIO 1

// import React from "react";

// const Saludo = ({xiodanny}) => {
//     return ( <div>
//          <h1>hola, {xiodanny}</h1>
//     </div>
//     );
// };


// export default Saludo;


// //EJERCICIO 2

// import React from "react";


// function Producto (props) {
//     return (
//         <div>
//             <h1>Producto: {props.nombre}</h1>
//             <h2>precio del producto: ${props.precio} </h2>
//         </div>
//     );
// }

// export default Producto;

//EJERCICIO 3

// import React, {useState} from "react"

// function ContadorFuncional() {
//     const [contador, setContador] =  useState(0);
    
//     return (
//         <div>
//             <h1>Contador Funcional: {contador}</h1>
//             <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//         </div>
        
//     );
// };

// export default ContadorFuncional


//EJERCICIO 4

// import React from "react";
// import Producto from "./producto";

// function ListaDeProductos (productos) {
//     return (
//         <div>
//             {productos.map((producto, index) => (
//                 <Producto
//                  key={index} 
//                  nombre={producto.nombre} 
//                  precio={producto.precio} />
//             ))}
//         </div>
//     );
// };

// export default ListaDeProductos;

//EJERCICIO 5
 
// import React from "react";

// function DetalleProducto (nombre, precio, descripcion){
//     return (
//         <div>
//             <h2>{nombre}</h2>
//             <p>Precio: ${precio}</p>
//             <p>{descripcion}</p>
//         </div>
//     );
// };

// export default DetalleProducto;