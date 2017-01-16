/**
 * Created by Wence on 21/12/16.
 */

// Variable global para poder trabajar con dos funciones

var ventanas;

// Función que abre una ventana con los parámetros que se le indican, como el tamaño, o que se pueda redimensionar ( solo en I.E )
function ventana() {

    ventanas = window.open('emergente.html','ventana1','width=680,height=350,scrollbars=NO,resizable=NO');

}

// Función que a través de la variable ventanas cierra la ventana emergente que hemos abierto
function cVentana(){
    ventanas.close();
}

// Función que a través de unos parámetors "los id's de nuestros elementos HTML " a través de la propiedad InnerHTML de los anteriores, indicamos características como por ejemplo el tipo de navegador, en caso de Java si el navegador lo soporta, diremos que versión tiene.

function cargar(url,prot,nav,java) {




    document.getElementById(url).innerHTML = window.location;

    document.getElementById(prot).innerHTML = document.location.protocol;

    document.getElementById(nav).innerHTML = navigator.appCodeName;
    if (navigator.javaEnabled() == true){

// El método deployJava.getJREs(), nos indica la versión, para ello hay que indicar en el HTML una libreria para poder trabajar

        document.getElementById(java).innerHTML = "Versión de java : "+ deployJava.getJREs();;
    }
    else{

        document.getElementById(java).innerHTML = "No tienes java instalado";
    }
}

