// Promedio de notas
//		let contadorNotas = 0;
//		let notasUsuario = 0;
//		let promedioUsuario = 0;
//
//		function promedioAlumno(){
//		for (let i = 0; i < 4; i++) {
//			notasUsuario = parseInt(prompt("Ingrese las 4 notas del cuatrimestre"));
//		 	contadorNotas = contadorNotas + notasUsuario;	
//		 	promedioUsuario = contadorNotas / 4;
//		}
//		console.log("El promedio de la materia es: " + promedioUsuario)
//		}

//		promedioAlumno();


//Objeto creado.
//		const coders = {
//			usuarioUno: "Juan",
//			usuarioDos : "Nicolas",
//			usuarioTres : "Matías",
//		};
//
//		console.log(coders) //coders.usuarioTres

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
// console.log (persona1.nombre);
// console.log (persona1.edad);
// console.log (persona1.dni);

if ("nombre" in usuario1) {
	console.log (usuario1.nombre)
}else {
	console.log ("ERROR");
}




