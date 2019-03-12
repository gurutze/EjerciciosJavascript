function gestionaClick(evento) {
    event.preventDefault();
    console.log("Enlace pulsado");
}
function risaMalvada() {
    console.log("MUAHAHAHAHAHAHA");
}
function loaded() {
	window.addEventListener("load", init);
	console.log("Página cargada");
}
function init(){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);
function domCargado (event) {
	dom.onload=init ;
	console.log("DOM cargado");
	 mienlace.onclick=gestionaClick
 	miboton.onclick=risaMalvada
}
document.addEventListener("DOMContentLoaded", domCargado);
 var mienlace() {
 }
