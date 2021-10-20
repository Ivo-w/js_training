/*
class CrearUsuarios {
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

console.log (usuario1);
console.log (usuario1.nombre);
console.log (usuario1.edad );
console.log (usuario1.dni);*/


/*let ingreso = prompt("Ingrese su nombre")
let boton = document.getElementById('btn_js');
	boton.addEventListener("click", respuesta);


function respuesta() {
	let mensaje = document.createElement ("div");
	mensaje.innerHTML = `<h1 class='btnEstilo'>El apartado productos puede facilitar tu navegación, <strong class='colorUsuario'>${ingreso}</strong>!!</h1>`
	document.body.appendChild(mensaje);
}

const productos = [{ id: 1,  producto: "Libro 1", precio: 110 },
                  {  id: 2,  producto: "Libro 2", precio: 120 },
                  {  id: 3,  producto: "Libro 3"  , precio: 130},
                  {  id: 4,  producto: "Libro 4" , precio: 140}];

const guardarLocal = (key, value) => { 
	localStorage.setItem(clave, valor)};

for (const producto of productos) {
    guardarLocal(productos.id, JSON.stringify(productos));
}
*/

/*$('body').append('<h2 id= "bnv" >Bienvenido</h2>');

on('click', function () {
    console.log("Respuesta a un click");
});
$('#bnv')

$('#bnv').on('dblclick', () => {
    console.log("Respuesta al doble click");*/

/*$("body").prepend('<button class="btn1 ">Usuario</button>');*/
/*$("body").prepend('<div class ="divBtn2"><button class="btnStyle" id="btn2">Más Información</button></div>');

$("#btn1").click(function () { 
    console.log(this);
});

$("#btn2").click((e) => { 
    console.log(e.target);
});*/

const URLGET = "https://jsonplaceholder.typicode.com/posts"

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
});

