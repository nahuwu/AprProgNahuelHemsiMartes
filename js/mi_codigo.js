
let indice_pregunta_actual;
let total_puntos;
let resultadomsg="";
const nombre_alumno="Nahuel";
const maximo_preguntas_por_jugada=1;
const puntos_resultado_bien=10;


function mostrarResultado(){
	if (total_puntos >= puntos_resultado_bien) {
	resultadomsg = '¡Muy bien!';
}
else{
	resultadomsg = '¡Oh no!';
}
}

function obtenerSiguientePregunta() {
	indice_pregunta_actual++;
	return indice_pregunta_actual;
// length es una propiedad de un objeto, toUpperCase() es un método y por eso se escribe con ()

}

function mostrarPregunta(pregunta){
	document.querySelector("#pregunta-numero").textContent = (indice_pregunta_actual+1);
	document.querySelector("#pregunta-texto").textContent = pregunta.texto_pregunta; // preguntar
	document.querySelector("#pregunta-imagen").src = pregunta.imagen_src
}


console.log(resultadomsg+" "+resultadomsg.toUpperCase());
console.log("La longitud del mensaje es: "+resultadomsg.length);
console.log("El total de puntos son: "+total_puntos);


//id=“pantalla-inicio”  d-none .add .remove
function iniciarJuego(){
	document.querySelector("#pantalla-inicio").classList.add("d-none");
	document.querySelector("#header").classList.remove("d-none");
	document.querySelector("#pantalla-juego").classList.remove("d-none");
	mostrarPregunta(indice_pregunta_actual);
}
	indice_pregunta_actual = 0;
	total_puntos = 0;
// Iniciamos el juego con la variable iniciarJuego
let botonJugar = document.querySelector("#inicio-boton-jugar");
botonJugar.addEventListener("click", iniciarJuego);

// ●  Bonus: Vamos a mostrar tu nombre en la pantalla “Acerca de”.“vista-nombre”. Mostrá el valor de la constante “nombre_alumno” dentro de ese elemento.
let html_nombre_alumno = document.querySelector("#vista-nombre");
html_nombre_alumno = nombre_alumno;

