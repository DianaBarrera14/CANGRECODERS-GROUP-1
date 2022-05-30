function registroMaterias (){
    var materia = $('#txtMateria').val();
    var year    = $('#yearLectivo').val();
    var departamento = $('#txtDepartamento').val();
    var nivel = $('#txtNivel').val();
    var paralelo = $('#txtParalelo').val();
    var docente = $('#txtDocente').val();
    var url = "http://localhost/CANGRECODERS-GROUP-1/06-Code/controller/insertarMateria.php"

    $.ajax({
        type: 'POST',
        url : url,
        data : {'materia':materia,'year':year,'departamento':departamento,'nivel':nivel,'paralelo':paralelo,'docente':docente},
        success : function (response)
        {
         
            console.log(response)


        }



    })




}