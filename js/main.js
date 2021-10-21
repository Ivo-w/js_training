
/*class CrearUsuarios {
	constructor (nombre, edad, dni) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = dni;
	}
}
const usuario1 = new CrearUsuarios (
	prompt("Ingresa tu nombre"),
	parseInt (prompt ("Ingresa tu edad")),
	parseInt (prompt("Ingrese su número de DNI")),
);

console.log (usuario1);*/


/*const URLGET = "https://jsonplaceholder.typicode.com/posts"

$("body").append('<button class="btnGet" id="btn1">TRAER</button>');

$("#btn1").click(() => { 
    $.get(URLGET, function (response, estado, state) {
          if(state.status === 200){
            let misDatos = response;
            for (const dato of misDatos) {
              $("body").append(`<div>
                                   <h3>${dato.title}</h3>
                                   <p> ${dato.body}</p>
                                  </div>`);
            }  
          } else {
          	$("body").append('<h3>Error de dato</h3>');
          }
    });
});*/

const productosSeller = [{id: 1, nombre: 'A Promised Land. Barack Obama', precio: 2200, urlimg:"https://images-na.ssl-images-amazon.com/images/I/91K6nY47glL.jpg" },
                         {id: 2, nombre: 'Too Much and Never Enough: How My Family', precio: 2000, urlimg: "https://images-na.ssl-images-amazon.com/images/I/8116vy-AXCL.jpg" },
                         {id: 3, nombre: 'Where the Crawdads Sing. Delia Owens', precio: 1250, urlimg: "https://images-na.ssl-images-amazon.com/images/I/91JSPXvOobL.jpg"},
                         {id: 4, nombre: 'La madre de Frankenstein', precio: 1100, urlimg: "https://contentv2.tap-commerce.com/cover/large/9789876706094_1.jpg?id_com=1113"},
                        ];

    /*listarProductos (padre, data, callback)*/
    for (const producto of productosSeller) {

        $('#producto_Book').append(`
            <div class="productoBook">
              <input value="${producto.id}" type="hidden" >
              <img class="imgTamanio" src=${producto.urlimg}>
              <h3 class="paddingProducto titleBook"> ${producto.nombre} </h3>
              <div class="botonFlex">
               <h3 class="paddingProducto priceBook"> $${producto.precio} </h3>
               <div class ="flexBoton">
               <button type="button" class="styleBoton paddingBTN"><ion-icon class="iconCarrito" name="cart-outline"></ion-icon>COMPRAR</button>
                </div>
              </div>
            </div>
            `);
        };
    //$('.titleBook').prepend(`<img src="./assets/img/portadaFinal.png">`);

    /*{id: 5, nombre: 'Midnight Sun', precio: 250},
                         {id: 6, nombre: 'Untamed', precio: 250},
                         {id: 7, nombre: 'El fin y otros inicios', precio: 250},
                         {id: 8, nombre: 'La madre de Frankenstein ', precio: 250}*/