
document.getElementById("sobremi").addEventListener("click",funcionalerta);

document.getElementById("sobremi").addEventListener("mouseover",funcionmover);

document.getElementById("sobremi").addEventListener("mouseout",funcionmover2);

function funcionalerta(){
    alert ("Actualmente, me encuentro estudiando en la UTN-FRBA, la carrera de Ingeniería en Sistemas de la Información,en este momento estoy trabajando como profesor particular de matematica y de community manager. Estoy en la búsqueda de mi primera experiencia laboral en una empresa relacionado a la programacion, tengo muchas ganas de aprender y crecer tanto en lo personal como en lo laboral.")
}

var botonmover = document.getElementById("sobremi");

function funcionmover (){
    botonmover.style.transform = "translateY(-10px)"
}

function funcionmover2 (){
    botonmover.style.transform = "translateY(0px)"
}