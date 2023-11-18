import { barcelona, roma, paris, londres } from "./ciudades.js";

// obtener los elemnetos del DOM
let enlaces = document.querySelectorAll("a");
let titleElement = document.getElementById("titulo");
let subTitleElement = document.getElementById("subtitulo");
let parrafoElement = document.getElementById("parrafo");
let precio = document.getElementById("precio");

// evento click

enlaces.forEach(function (enlace) {
	enlace.addEventListener("click", function () {
		enlaces.forEach(function (enlace) {
			enlace.classList.remove("active");
		});
		//agregar active
		// enlace.classList.add("active");
		this.classList.add("active");

		//traer informacion
		let contenido = obtenerContenido(enlace.textContent);

		titleElement.innerHTML = contenido.titulo;
		subTitleElement.innerHTML = contenido.subtitulo;
		parrafoElement.innerHTML = contenido.parrafo;
        precio.innerHTML = contenido.precio;
	});

	//mostrar contenido
});

function obtenerContenido(enlace) {
	let contenido = {
		Barcelona: barcelona,
		Roma: roma,
		París: paris,
		Londres: londres,
	};
	return contenido[enlace];
}
