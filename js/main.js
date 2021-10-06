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


let ingreso = prompt("Ingrese su nombre")
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
