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

let edad = parseInt(prompt("Ingrese su edad."))

if (edad >= 18){
	alert ("Es mayor de edad.")
} else {
	alert("Es menor de edad.")
}

// |-- 2 --|

let passwordIngresada = prompt("Ingrese su contraseña.")
const passwordRegistrada = "coder";

if (passwordIngresada == passwordRegistrada){
	alert("Ingreso exitoso !!")
} else{
	alert ("Contraseña incorrecta. Vuelve a intentarlo.")
}

