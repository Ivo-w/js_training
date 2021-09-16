// Promedio de notas
let contadorNotas = 0;
let notasUsuario = 0;
let promedioUsuario = 0;

function promedioAlumno(){
for (let i = 0; i < 4; i++) {
	notasUsuario = parseInt(prompt("Ingrese las 4 notas del cuatrimestre"));
 	contadorNotas = contadorNotas + notasUsuario;	
 	promedioUsuario = contadorNotas / 4;
}
console.log("El promedio de la materia es: " + promedioUsuario)
}

promedioAlumno();





