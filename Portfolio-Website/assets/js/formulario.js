//Realizar un formulario de registro de estudiantes

/*
con cabecera
Datos: 
ci- entero
nombre-> string
fecha -> date
direccion -> string
registrar en n array
listarlo
todo con jquery
*/

$(document).ready(function(){
    var estudiantes = [];

    $("#registrar").click(function(){
        // Obtener los valores de los campos
        var ci = $("#ci").val();
        var nombre = $("#nombre").val();
        var fecha = $("#fecha").val();
        var direccion = $("#direccion").val();

        // Validar que los campos no estén vacíos
        if(ci === '' || nombre === '' || fecha === '' || direccion === '') {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Crear el objeto estudiante
        var estudiante = {
            ci: ci,
            nombre: nombre,
            fecha: fecha,
            direccion: direccion
        };

        // Agregar el estudiante al array
        estudiantes.push(estudiante);
        
        // Mostrar los estudiantes
        mostrarEstudiantes();

        // Limpiar el formulario
        limpiarFormulario();

        // Mostrar mensaje de éxito
        alert("Estudiante registrado correctamente.");
    });

    function mostrarEstudiantes() {
        $("#lista tbody").empty();
        $.each(estudiantes, function(index, estudiante) {
            $("#lista tbody").append("<tr><td>" + estudiante.ci + "</td><td>" + estudiante.nombre + "</td><td>" + estudiante.fecha + "</td><td>" + estudiante.direccion + "</td></tr>");
        });
    }

    function limpiarFormulario() {
        $("#ci").val("");
        $("#nombre").val("");
        $("#fecha").val("");
        $("#direccion").val("");
    }
});
