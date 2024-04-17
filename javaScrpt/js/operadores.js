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
/*genera un array de 10 elementos 
Nombre:"juan" nota: randomico entre 20-100.
- Mostrar la nota mayor, menor y promedio
*/
// Función para generar un número aleatorio entre min (incluido) y max (incluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// Array de nombres predefinidos
let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Sofía", "Carlos", "Laura", "Diego", "Lucía"];

// Generar un array de objetos con nombres y notas aleatorias
let estudiantes = nombres.map(nombre => {
    return { nombre: nombre, nota: getRandomInt(20, 100) };
});

// Mostrar el array generado
console.log("Array de estudiantes:");
console.log(estudiantes);

// Calcular la nota mayor, menor y promedio
let notas = estudiantes.map(estudiante => estudiante.nota);
let notaMayor = Math.max(...notas);
let notaMenor = Math.min(...notas);
let sumaNotas = notas.reduce((total, nota) => total + nota, 0);
let promedio = sumaNotas / estudiantes.length;

// Encontrar al estudiante con la nota mayor
let estudianteNotaMayor = estudiantes.reduce((estudianteMax, estudiante) => {
    return estudiante.nota === notaMayor ? estudiante : estudianteMax;
}, {});

// Encontrar al estudiante con la nota menor
let estudianteNotaMenor = estudiantes.reduce((estudianteMin, estudiante) => {
    return estudiante.nota === notaMenor ? estudiante : estudianteMin;
}, {});

// Mostrar la nota mayor, menor y promedio, así como el estudiante correspondiente
console.log("Nota mayor:", notaMayor, "del estudiante:", estudianteNotaMayor.nombre);
console.log("Nota menor:", notaMenor, "del estudiante:", estudianteNotaMenor.nombre);
console.log("Promedio:", promedio);
