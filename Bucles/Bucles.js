/** Created by Wence on 16/11/16. */
/*
    En los bucles hay que tener en cuenta que se pasa un valor como parámetro "elemento", este valor es el
    elemento que va a mostar por pantalla el resultado del bucle.
    Hay que destacar que para acceder aceder a tal elemento y poder escribir, hay que hacer uso de la propiedad
    inner.HTML . El funcionamiento es sencillo, se accede al elemento del que conocemos el ID, se accede a la
    propiedad y se le pasa la variable que contiene aquello que se quiere mostrar.

 */
// Función para calcular los números pares desde el 0 hasta el 100

function bucledo (elemento) {
    var numero = 0;
    var text = "";
    do {
        text += " " + numero;
        numero = numero + 2;
    }
    while (numero <= 100);
    document.getElementById(elemento).innerHTML = text;
}
// Función para calcular los números múltiplos de 4 desde el 4 hasta el 100
function buclefor (elemento) {

    var text = "";
    for(i=4;i<=100;i++) {

        text += " " + i;
        document.getElementById(elemento).innerHTML = text;
        i = i + 3;
    }
}
// Función para calcular los números múltiplos de 8 desde el 8 hasta el 100
function buclewhile (elemento) {

    var text = "";
    var iterador = 8;
    while (iterador <= 100) {
        text += " " + iterador;
        document.getElementById(elemento).innerHTML = text;
        iterador = iterador + 8;

    }
}

// Funciones para mostrar información del Bucle en los botones al entrar con puntero en su área y cuando se sale de ella

// Botón BucleDO al entrar en el área
function infoDo (info){

    info.innerHTML='Números pares del 0 al 100';
}
// Botón BucleDo al salir del área
function infoDoDef (info){

    info.innerHTML='Bucle Do';
}
// Botón BucleFor al entrar en el área
function infoFor (info){

    info.innerHTML='Múltiplos de 4, del 4 al 100';
}
// Botón BucleFor al salir del área
function infoForDef (info){

    info.innerHTML='Bucle For';
}
// Botón BucleWhile al entrar en el área
function infoWhile (info){

    info.innerHTML='Múltiplos de 8 del 8 al 100';
}
// Botón BucleWhile al salir del área
function infoWhiledef (info){

    info.innerHTML='Bucle While';
}