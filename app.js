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
        actualizandoLista();
        console.log (amigosIngresados);
    }
    limpiarCaja();
    return;
}

//Implementando una función para actualizar la lista de amigos!
function actualizandoLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigosIngresados.length; i++){
        let amigo = amigosIngresados[i];
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigo;
        lista.appendChild(elementoLista);
    }
}

//Función para sortear a los amigos¡!
function sortearAmigo(){
    if(amigosIngresados.length < 1){
        alert("Es preciso que ingrese al menos un nombre para poder sortear...");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigosIngresados.length);
        let amigoSeleccionado = amigosIngresados[indiceAleatorio];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo que he seleccionado es: " + amigoSeleccionado;
    }
}


