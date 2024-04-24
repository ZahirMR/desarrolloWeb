/*let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b: "+a);
a=11;
a+=b
console.log("a+=b: "+a);
a++;
console.log("a++: "+a);
a--;
console.log("a++: "+a);

if((a%2)==0)
    console.log("a es PAR");
else
    console.log("a es IMPAR");
console.log(a+b+Number("5"));*/
/// generar un array de 10elementos nombre: "" nota:ramdomico 20-100

//mostrar la nota mayor , menor y promedio.
const Item = [
    { nombre: 'Leonardo', nota: 0 },
    { nombre: 'Jefferson', nota: 0 },
    { nombre: 'Samuel', nota: 0 },
    { nombre: 'Alejandra', nota: 0 },
    { nombre: 'Naidar', nota: 0 },
    { nombre: 'Laura', nota: 0 },
    { nombre: 'Carlos', nota: 0 },
    { nombre: 'Sofía', nota: 0 },
    { nombre: 'Diego', nota: 0 },
    { nombre: 'Elena', nota: 0 }
];


// Función para generar un número aleatorio entre 2 y 10
function notarandom() {
    return Math.floor(Math.random() * 9)+ 2;
}

// Función para clasificar las notas en categorías
function clasificarNotas (nota){
    let clasificacion;
    switch (nota) {
        case 2: case 3: case 4:
            clasificacion = 'Insuficiente';
            break;
        case 5: case 6:
            clasificacion = 'Suficiente';
            break;
        case 7: case 8:
            clasificacion = 'Bien';
            break;
        case 9:
            clasificacion = 'Notable';
            break;
        case 10:
            clasificacion = 'Sobresaliente';
            break;
        default:
            clasificacion = 'Nota no válida';
    }
    return clasificacion;
};

// Array de objetos con nombres y notas inicializadas en 0

// Generar las notas aleatorias para cada estudiante en el array Item
Item.forEach(estudiante => {
    estudiante.nota = notarandom();
});

// Mostrar el array actualizado con nombres y notas aleatorias
console.log(Item);

// Calcular la nota mayor, menor y promedio
let notaMayor = -Infinity;
let notaMenor = Infinity;
let nombreMayor = '';
let nombreMenor = '';

Item.forEach(estudiante => {
    if (estudiante.nota > notaMayor) {
        notaMayor = estudiante.nota;
        nombreMayor = estudiante.nombre;
    }
    if (estudiante.nota < notaMenor) {
        notaMenor = estudiante.nota;
        nombreMenor = estudiante.nombre;
    }
});

const notas = Item.map(estudiante => estudiante.nota);
const promedioNotas = notas.reduce((total, nota) => total + nota, 0) / notas.length;

console.log(`La nota más alta es ${nombreMayor} con una nota de ${notaMayor}`);
console.log(`La nota más baja es ${nombreMenor} con una nota de ${notaMenor}`);
console.log(`Promedio de notas: ${promedioNotas}`);

// Listar las notas con sus categorías
function imprimirNotaYCategoria(estudiante) {
    console.log(`${estudiante.nombre}: ${estudiante.nota} - ${clasificarNotas(estudiante.nota)}`);
}

// Listar las notas con sus categorías
Item.forEach(imprimirNotaYCategoria);
