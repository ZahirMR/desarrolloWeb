/*
Descripción: En base a 2 array de nombres y apellidos, genere un nuevo array combinando de forma
aleatoria ambos, formatee los nombres convirtiendo el primer elemento del nombre y apellido en
mayúscula y el resto en minúscula .
Desarrollador: [Zahir Moron Ramirez]
Fecha: 2024-04-21
Cambios: Ninguno
*/
const NELEMNTOS = 20;

// Arrays de nombres y apellidos
const nombres = ['juan', 'maría', 'pedro', 'luis', 'ana', 'carlos', 'laura', 'marta', 'josé', 'sofía', 'david', 'andrea', 'alejandro', 'claudia', 'manuel', 'patricia', 'pablo', 'elena', 'daniel', 'raquel'];
const apellidos = ['gómez', 'rodríguez', 'fernández', 'lópez', 'martínez', 'sánchez', 'pérez', 'gonzález', 'romero', 'garcía', 'torres', 'díaz', 'ruiz', 'vázquez', 'castro', 'navarro', 'morales', 'ramírez', 'jiménez', 'herrero'];
let nomape=[];


// Función para formatear un nombre, convirtiendo la primera letra en mayúscula y el resto en minúscula
const formatearNombre = nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

// Función para generar un nombre completo aleatorio
function generarNombre() {
    for (let i = 0; i < NELEMNTOS; i++) {
        let nomal = nombres[Math.floor(Math.random() * nombres.length)];
        let apeal = apellidos[Math.floor(Math.random() * apellidos.length)];
        nomape.push(`${formatearNombre(nomal)} ${formatearNombre(apeal)}`);
    }
    console.log("Nombres completos generados:");
}

// Función para imprimir los nombres completos generados
function imprimirNomApe() {
    nomape.forEach(persona => {
        console.log(persona);
    })
}

generarNombre();
imprimirNomApe();