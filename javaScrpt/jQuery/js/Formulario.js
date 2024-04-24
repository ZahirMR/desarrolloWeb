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
        var ci = $("#ci").val();
        var nombre = $("#nombre").val();
        var fecha = $("#fecha").val();
        var direccion = $("#direccion").val();

        var estudiante = {
            ci: ci,
            nombre: nombre,
            fecha: fecha,
            direccion: direccion
        };

        estudiantes.push(estudiante);
        mostrarEstudiantes();
        limpiarFormulario();
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

