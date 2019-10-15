/* 
Archivo mi_codigo.js
En este archivo programaremos el código correspondiente
al juego de Trivia.
 */
let indice_pregunta_actual=5;
let total_puntos=2;
let nombre_alumno="Nahuel";
const maximo_preguntas_por_jugada=1;
const puntos_resultado_bien=10;
console.log(indice_pregunta_actual,total_puntos,nombre_alumno,maximo_preguntas_por_jugada,puntos_resultado_bien)


if (total_puntos >= puntos_resultado_bien) {
	console.log("¡Muy bien!");
}
else{
	console.log("Ooh no!")
}

console.log("Total de puntos: ",total_puntos);









