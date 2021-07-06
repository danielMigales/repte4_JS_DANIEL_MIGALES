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

/*El codi javaScript que hauràs d’afegir en aquest tres primers condicional s’ha d’escriure al fitxer “codigo_ervigio0.js” (que es troba a la carpeta js ).*/

/*Així, al fitxer " act0_JAB.html / codigo_ervigio0.js " quan l’usuari premi el botó "Aceptar":*/

/*1. SI el nom escrit en el primer <INPUT> és " ervigi " o " ardabasto " (que és el seu pare) , i en qualsevol
cas té igual o més de 18 anys , s’accedeix al fitxer 1: ( act1_JAB .html ).

També ha de funcionar amb els noms en majúscules (“ ERVIGI ” o “ ARDABASTO ”) o en format
oració (“ Ervigi ” o “ Ardabasto ”).

També ha de funcionar amb els noms en majúscules (“ ERVIGI ” o “ ARDABASTO ”) o en format
oració (“ Ervigi ” o “ Ardabasto ”).

Traducció resumida:

S’accedeix a “ act1_JAB.html ” quan:
... l’usuari és ervigi (o ERVIGI o Ervigi) i té 18 anys o més.
... l’usuari és ardabasto (o ARDABASTO o Ardabasto) i té 18 anys o més.
(Si per exemple el nom de l'usuari és "ervigi", però té menys de 18 anys, no podrà accedir i
passarà al següent condicional).*/


function acceso() {

	let nombre = document.getElementById("nombre").value.toLowerCase();
	let edad = Number(document.getElementById("edad").value);

	if ((nombre == "ervigi" || nombre == "ardabasto") && edad >= 18) {
		// Se accede al apartado (fichero) que corresponda		
		location.href = "act1_JAB.html";
	}
	else {
		// o act2_JAB.html o act3_JAB.html (según el nombre y edad del usuario)
		alert("Aun no tienes acceso");
	}
}



