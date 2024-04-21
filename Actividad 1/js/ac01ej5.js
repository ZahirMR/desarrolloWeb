const NELEMNTOS = 20;

// Arrays de nombres y apellidos
const nombres = ['juan', 'maría', 'pedro', 'luis', 'ana', 'carlos', 'laura', 'marta', 'josé', 'sofía', 'david', 'andrea', 'alejandro', 'claudia', 'manuel', 'patricia', 'pablo', 'elena', 'daniel', 'raquel'];
const apellidos = ['gómez', 'rodríguez', 'fernández', 'lópez', 'martínez', 'sánchez', 'pérez', 'gonzález', 'romero', 'garcía', 'torres', 'díaz', 'ruiz', 'vázquez', 'castro', 'navarro', 'morales', 'ramírez', 'jiménez', 'herrero'];
let nomape=[];

const formatearNombre = nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

// Función para generar un nombre completo aleatorio
function generarNombre() {
    let nomal, apeal;
    for (let i=0;i<NELEMNTOS;i++){ 
        nomal = nombres[Math.floor(Math.random() * nombres.length)];
        apeal = apellidos[Math.floor(Math.random() * apellidos.length)];
        nomape.push(`${formatearNombre(nomal)} ${formatearNombre(apeal)}`);
    }
}

function imprimirNomApe() {
    nomape.forEach(persona => {
        console.log(persona);
    })
}

generarNombre();
imprimirNomApe();
