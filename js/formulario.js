
/* ''const nombre = document.getElementById("name")
const email = document.getElementById("email")
const slider = document.getElementById("slideForm")
const detalle = document.getElementById("detallesForm")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")*/



const form = document.getElementById("form")
form.addEventListener("submit", e =>{
	e.preventDefault()
})


function datosFormulario () {
let nombre = document.getElementById("name").value;
let email = document.getElementById("email").value;
let slider = document.getElementById("slideForm").value;
let detalle = document.getElementById("detallesForm").value;
let consulta = nombre + email + slider + detalle

function guardarLocal (){
	localStorage.setItem("consulta", JSON.stringify (consulta) ); 

}
guardarLocal();

}


function obtenerLocal(){
	let objLocal = localStorage.getItem("consulta")
	console.log( objLocal);

}

 function limpiarFormulario() {
    document.getElementById("form").reset();
  }

