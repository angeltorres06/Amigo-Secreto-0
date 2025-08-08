// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creación de lista que recopilará los nombres de los amigos que el usuario ingrese.
let amigosIngresados = [];

//función para limpiar el recuadro donde se solicita ingresar nombres de amigos.
function limpiarCaja() {
    document.getElementById("amigo").value = "";
    return;
}

//Generar función para añadir los amigos a la lista. 
function agregarAmigo(){
    let solicitud = String(document.getElementById("amigo").value);
    if(solicitud == ""){
        alert("Por favor, inserte un nombre...");
    } else {
        amigosIngresados.push(solicitud);
        console.log (amigosIngresados);
    }
    limpiarCaja();
    return;
}





