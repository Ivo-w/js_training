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
console.log (usuario1.dni);


// Desafio ARRAYS
	const NUMEROS = [1, 2, 3, 4, 5, 6, 7];

	let usuariosAprobados = ["Matías", "Marcelo", "Camila", "Leonel"];

	let usuariosRegulares = ["Hernan", "Santiago", "Lucas", "Sofía"];

	let usuariosFinales = usuariosAprobados.concat(usuariosRegulares);

	usuariosFinales.push("Martín");

	const encontrar = usuariosFinales.find (elemento => elemento = "Leonel");

	console.log (usuariosFinales);
	console.log (encontrar + " obtuvo un descuento.");*/


/*function nombre() {
  let mensaje = document.createElement ("main");
  mensaje.innerHTML = "<div><p> Desafio DOM </p></div>";
  document.body.appendChild(mensaje);
}
nombre();*/

//let hola = prompt("Ingrese su nombre")


let ingreso = prompt("Ingrese su nombre")
let boton = document.getElementById('btn');
	boton.addEventListener("click", respuesta);


function respuesta() {
	let mensaje = document.createElement ("div");
	mensaje.innerHTML = `<h1 class='btnEstilo'>Bienvenido,<strong class='colorUsuario'>${ingreso}</strong>!!</h1>`
	document.body.appendChild(mensaje);

}