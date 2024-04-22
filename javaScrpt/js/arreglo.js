//Compras a un supermecado
/*let carrito=[  "leche",1,
               "carne",2,
               "papa",3,
               "fideos",1,];
            
console.log("Item:"+carrito[0]);
console.log("Cantidad:"+carrito[1]);
console.log("Item:"+carrito[2]);
console.log("Cantidad:"+carrito[3]);
console.log("Item:"+carrito[4]);
console.log("Cantidad:"+carrito[5]);
console.log("Item:"+carrito[6]);
console.log("Cantidad:"+carrito[7]);
console.log("IMPRESION COMPLETA");
console.log(carrito);
// Agregar un nuevo artículo y cantidad al carrito
carrito.push("arroz", 2);
carrito.push("azucar", 4);


// Imprimir el nuevo artículo y cantidad agregados
console.log("Nuevo item agregado: " + carrito[carrito.length - 0]);
console.log("Cantidad: " + carrito[carrito.length - 1]);
console.log(carrito);
*/
/*
let item = {nombre:'leche',cantidad:1};
console.log("Item: "+item.nombre);
console.log("Cantidad:"+item.cantidad);

let carrito=[{nombre:'leche',cantidad:1},
             {nombre:'carne',cantidad:2},
             {nombre:'fideo',cantidad:1},
             {nombre:'papa',cantidad:3}];

// Definir el objeto nuevo a agregar al carrito
let nuevoItem = { nombre: 'manzana', cantidad: 4 };

// Imprimir los elementos del carrito con etiquetas
carrito.forEach(function(item, index) {
    console.log("Item " + (index + 1) + ": " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
});

// Agregar el nuevo ítem al carrito
carrito.push(nuevoItem);

console.log(carrito)

// Definir los objetos con nombre, cantidad y precio
let items = [
    { nombre: 'leche', cantidad: 1, precio: 5, },
    { nombre: 'carne', cantidad: 2, precio: 4 },
    { nombre: 'fideo', cantidad: 1, precio: 3 },
    { nombre: 'papa', cantidad: 3, precio: 2 }
];

let totalCarrito = 0; // Variable para almacenar el total del carrito

// Imprimir los elementos del carrito con etiquetas
items.forEach(function(item, index) {
    console.log("Item " + (index + 1) + ": " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    let totalItem = item.cantidad * item.precio; // Calcula el total para este ítem
    console.log("Total: Bs" + totalItem); // Muestra el total para este ítem
    totalCarrito += totalItem; // Agrega el total de este ítem al total del carrito
});

console.log("Total del carrito: Bs" + totalCarrito); // Muestra el total del carrito
*/

/// generar un array de 10elementos nombre: "" nota:ramdomico 20-100

//mostrar la nota mayor , menor y promedio.


// dar número aleatorio entre 20 y 100

// Array de objetos con nombres y notas
// Función para generar un número aleatorio entre 20 y 100
function notarandom() {
    return Math.floor(Math.random() * 81) + 20; // Genera un número entre 20 y 100
}

// Array de objetos con nombres y notas inicializadas en 0
const Item = [
    { nombre: 'leo', nota: 0 },
    { nombre: 'jefferson', nota: 0 },
    { nombre: 'samuel', nota: 0 },
    { nombre: 'ano', nota: 0 },
    { nombre: 'luis', nota: 0 },
    { nombre: 'laura', nota: 0 },
    { nombre: 'carlos', nota: 0 },
    { nombre: 'sofia', nota: 0 },
    { nombre: 'diego', nota: 0 },
    { nombre: 'elena', nota: 0 }
];

// Generar las notas aleatorias para cada estudiante en el array Item
Item.forEach(estudiante => {
    estudiante.nota = notarandom();
});

// Mostrar el array actualizado con nombres y notas aleatorias
console.log(Item);

// Calcular la nota mayor, menor y promedio
const notas = Item.map(estudiante => estudiante.nota);
const notaMayor = Math.max(...notas);
const notaMenor = Math.min(...notas);
const promedioNotas = notas.reduce((total, nota) => total + nota, 0) / notas.length;

// Mostrar la nota mayor, menor y promedio
console.log(`Nota mayor: ${notaMayor}`);
console.log(`Nota menor: ${notaMenor}`);
console.log(`Promedio de notas: ${promedioNotas}`);