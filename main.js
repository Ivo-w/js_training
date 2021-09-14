//Entrada de datos con prompt y parseInt

//let nombre = prompt("Ingrese su nombre");
//let apellido = prompt ("Ingrese su apellido");
//let edad = parseInt(prompt("Ingrese su edad"));

//alert ("Hola," + " " + nombre + " " + apellido + "\n" + edad + " años.");

//Calculo de edad

//let añoActual = "2021";
//let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));

//let CalculoEdad = añoActual - añoNacimiento;

//alert ("Tu edad es: " + CalculoEdad);


//let numero = parseInt(prompt ("Ingrese su numero de habitación"));

//alert ("Su numero de habitación es: " + numero)


// Desafio 2

// |-- 1 --|

//	let edad = parseInt(prompt("Ingrese su edad."))
//
//	if (edad >= 18){
//		alert ("Es mayor de edad.")
//	} else {
//		alert("Es menor de edad.")
//	}

// |-- 2 --|

//	let passwordIngresada = prompt("Ingrese su contraseña.")
//	const passwordRegistrada = "coder";
//
//	if (passwordIngresada == passwordRegistrada){
//		alert("Ingreso exitoso !!")
//	} else {
//		alert ("Contraseña incorrecta. Vuelve a intentarlo.")
//	}

//For
let inicio = parseInt(prompt ("Ingrese el día actual"))
let finDeMes = 30;

for (inicio; inicio <= finDeMes ; inicio++) {
	console.log ("Inicio vale: ", inicio);
}

// While
let numero = prompt("Ingresa tu nota.");

while (numero != "OK") {
	console.log(numero);
	numero = parseFloat(prompt("Ingresar otra nota."));
}

// Do while
let nota = 0;

do{
	nota = parseFloat(prompt("Ingrese las notas del semestre."));
	console.log(nota);
}while (parseFloat(nota));