// Cuando se cargan todos los elementos del <body> se ejecuta la función inicio
window.onload = inicio;

function inicio() {
	// Se indican todos los eventos que tiene la página
	document.getElementById("boton_acceso").onclick = acceso;
	window.onkeydown = teclado;
}

function teclado(e) {
	// codigo_tecla indica el código de tecla de la tecla pulsada por el usuario almacenada automáticamente en e
	let codigo_tecla = e.keyCode;
	// Detecta la pulsación del ENTER (código 13)
	if (codigo_tecla == 13) {
		acceso();
	}
}

function acceso() {

	let nombre = document.getElementById("nombre").value.toLowerCase(); //con el toLowerCase pasa todo lo escrito en el input a minusculas
	let edad = Number(document.getElementById("edad").value);

	//punto 1: cuando se llama ervigi o ardabasto y tiene igual o mas de 18 pasa a fichero act1. 
	if ((nombre == "ervigi" || nombre == "ardabasto") && edad >= 18) {
		// Se accede al apartado (fichero) que corresponda		
		location.href = "act1_JAB.html";
		// o act2_JAB.html o act3_JAB.html (según el nombre y edad del usuario)
	}

	//punto 2: cuando se llama ataulf o o ataülf y la edad esta entre 70 y 100 años pasa a fichero act3.
	else if ((nombre == "ataulf" || nombre == "ataülf") && (edad >= 70 && edad <= 100)) {
		location.href = "act3_JAB.html";
	}

	//punto 3: si se llama cixilona y tiene 18 o se llama recesvint y tiene entre 70 y 99 años se limpian todos los inputs.
	else if (nombre == "cixilona" && edad == 18 || nombre == "recesvint" && (edad >= 70 && edad <= 99)) {
		reset(); //al cumplirse estas condiciones llamo a la funcion reset que limpia los inputs
	}

	//punto 4: si el usuario deja vacio algun campo no se accede a nada, vaciandose los dos inputs y fijandose el cursor.
	else if ((nombre == "" || edad == "")) {
		reset(); //si estan vacios se llama a la funcion de limpiar inputs
	}

	//punto 3: Al no cumplirse las condiciones (cixilona y 18 o recesvint y 70-99) todo lo demas pasa aqui y accede a fichero act2.
	else {
		location.href = "act2_JAB.html";
	}
}

//(punto 4) Funcion para limpiar los dos inputs y fijar cursor
function reset() {
	document.getElementById("nombre").value = "";
	document.getElementById("edad").value = "";
	document.getElementById("nombre").focus();
}



