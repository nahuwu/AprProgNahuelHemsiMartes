
/* 
Archivo mi_codigo.js
En este archivo programaremos el código correspondiente
al juego de Trivia.
 */
let indice_pregunta_actual=5;
let total_puntos=2;
let nombre_alumno="Nahuel";
let resultadomsg="";
const maximo_preguntas_por_jugada=1;
const puntos_resultado_bien=10;
console.log(indice_pregunta_actual,total_puntos,nombre_alumno,maximo_preguntas_por_jugada,puntos_resultado_bien)




console.log("Total de puntos: ",total_puntos);


function mostrarResultado(){
	if (total_puntos >= puntos_resultado_bien) {
	resultadomsg = '¡Muy bien!';
}
else{
	resultadomsg = '¡Oh no!';
}
}

let siguiente_pregunta = obtenerSiguientePregunta();
mostrarPregunta(siguiente_pregunta);
mostrarResultado();

console.log(resultadomsg+" "+resultadomsg.toUpperCase());
console.log("¡Hola! Soy un texto amigable, la longitud del mensaje es: "+resultadomsg.length);
console.log("Hola, soy yo otra vez. El total de puntos son: "+total_puntos);
function obtenerSiguientePregunta() {
	indice_pregunta_actual++;
	return indice_pregunta_actual;
// length es una propiedad de un objeto, toUpperCase() es un método y por eso se escribe con ()

}

function mostrarPregunta(pregunta){
	console.log(pregunta+") ¿Pregunta?")
}












