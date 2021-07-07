// Cuando se cargan todos los elementos del <body> se ejecuta la función inicio
window.onload = inicio;
// imagen indica qué imagen se está mostrando en cada momento
// total indica el número total de imágenes que hay
var imagen = 1;
var total = 5;

function inicio() {
	// Inicialmente, al acceder directamente a la imagen 1, el botón de "imagen anterior" debe estar oculto (visibility:hidden), posteriormente cuando se avance a otra imagen siguiente vuelve a mostrarse (visility:visible)

	//punto 12: inicialmente el boton de anterior no se visualiza
	document.getElementsByClassName("flecha")[0].style.visibility = "hidden";

	// Se indican todos los eventos que tiene la página		
	document.getElementById("anterior").onclick = imagen_anterior;
	document.getElementById("siguiente").onclick = imagen_siguiente;
	window.onkeydown = teclado;
	actualizar();
	// Como existen varios elementos class, se usa "getElementsClassName" (en vez del habitual "getElementById"), añadiendo el nº de elemento entre corchetes [?], teniendo en cuenta que el primero es siempre [0].
	document.getElementsByClassName("circulos")[2].style.backgroundColor = "crimson";
	document.getElementsByClassName("circulos")[0].onclick = acceder_parte1;
	document.getElementsByClassName("circulos")[1].onclick = acceder_parte2;


}

function acceder_parte1() {
	location.href = "act1_jab.html";
}

function acceder_parte2() {
	location.href = "act2_jab.html";
}

function teclado(e) {
	// codigo_tecla indica el código de tecla de la tecla pulsada por el usuario almacenada automáticamente en e
	let codigo_tecla = e.keyCode;
	// Detecta la pulsación de la tecla cursor izquierdo (código 37)
	if (codigo_tecla == 37) {
		imagen_anterior();
	}
	// Detecta la pulsación de la tecla cursor derecho (código 39)
	if (codigo_tecla == 39) {
		imagen_siguiente();
	}

	//punto 15: si se pulsa tecla espacio pasa a fichero act0.
	if (codigo_tecla == 32) {
		location.href = "act0_jab.html";
	}
}

function imagen_anterior() {
	// Al llegar a la primera imagen el botón de imagen anterior se oculta (visibility:hidden), posteriormente cuando se avance a otra imagen siguiente vuelve a mostrarse (visility:visible)
	// Decrementa en 1 la variable imagen y actualiza todos los cambios		
	imagen--;

	//punto 13: cuando este la primera imagen el boton anterior no se visualiza.
	if (imagen == 1) {
		document.getElementsByClassName("flecha")[0].style.visibility = "hidden";
	}
	actualizar();
}

function imagen_siguiente() {
	// Al llegar a la última imagen el botón de imagen siguiente se oculta (visibility:hidden), posteriormente cuando se retroceda a otra imagen anterior vuelve a mostrarse (visility:visible)
	// Incrementa en 1 la variable imagen y actualiza todos los cambios
	imagen++;

	//punto 14: cuando llegue a la ultima imagen el boton desaparece.
	if (imagen == 5) {
		document.getElementsByClassName("flecha")[1].style.visibility = "hidden";
	}
	actualizar();
}

function actualizar() {
	// Actualiza el número 1/7 en numero y actualiza la imagen
	document.getElementById("numero").innerHTML = imagen + "/" + total;
	document.getElementById("img").src = "img/producto" + imagen + ".png";

	//puntos 13 y 14: aprovechando la funcion actualizar, esta comprueba en que numero de imagen esta y desoculta los botones.

	if (imagen >= 2 && imagen <= 4) {
		document.getElementsByClassName("flecha")[0].style.visibility = "visible";
		document.getElementsByClassName("flecha")[1].style.visibility = "visible";
	}


}