// Cuando se cargan todos los elementos del <body> se ejecuta la función inicio
window.onload = inicio;
// imagen indica qué imagen se está mostrando en cada momento
// total indica el número total de imágenes que hay
var imagen = 1;
var total = 4;

function inicio() {
	// Se indican todos los eventos que tiene la página		
	document.getElementById("anterior").onclick = imagen_anterior;
	document.getElementById("siguiente").onclick = imagen_siguiente;
	window.onkeydown = teclado;
	actualizar();
	// Como existen varios elementos class, se usa "getElementsClassName" (en vez del habitual "getElementById"), añadiendo el nº de elemento entre corchetes [?], teniendo en cuenta que el primero es siempre [0].
	document.getElementsByClassName("circulos")[1].style.backgroundColor = "crimson";
	document.getElementsByClassName("circulos")[0].onclick = acceder_parte1;
	document.getElementsByClassName("circulos")[2].onclick = acceder_parte3;
}

function acceder_parte1() {
	location.href = "act1_jab.html";
}

function acceder_parte3() {
	location.href = "act3_jab.html";
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

	//punto 11: si se pulsa tecla espacio pasa a fichero act0.
	if (codigo_tecla == 32) {
		location.href = "act0_jab.html";
	}
}

function imagen_anterior() {
	// Al llegar a la primera imagen y hacer clic en este botón se muestra la última
	// Decrementa en 1 la variable imagen y actualiza todos los cambios		
	imagen--;
	actualizar();
}

function imagen_siguiente() {
	// Al llegar a la última imagen y hacer clic en este botón se muestra la primera
	// Incrementa en 1 la variable imagen y actualiza todos los cambios
	imagen++;
	actualizar();
}

function actualizar() {
	// Actualiza el número 1/7 en numero y actualiza la imagen
	document.getElementById("numero").innerHTML = imagen + "/" + total;
	document.getElementById("img").src = "img/producto" + imagen + ".png";
}