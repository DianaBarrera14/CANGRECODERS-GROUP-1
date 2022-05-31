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
         if (response == 'registrado') {
            $('#myModal').modal('show');
         }else{
            alert(error);

         }


        }



    })

}

function registroDocente (){
    var nombre = $('#txtNombre').val();
    var apellidos = $('#txtApellido').val();
    var nivel = $('#txtNivel').val();
    var telefono    = $('#txtTelefono').val();
    var direccion = $('#txtDireccion').val();
    var email = $('#txtCorreo').val();
    var paralelo = $('#txtParalelos').val();
    var docente = $('#txtDocente').val();
    var materias = $('#txtMaterias').val();
    var year    = $('#yearLectivo').val();
    var nummaterias = $('#numMateria').val(); 
    var salario = $('#numSalario').val(); 
    var usuario = $('#txtUsuario').val();
    var password = $('#txtPassword').val();
    var tipo_usuario = $('#txtTipo').val();
    var estatus = $('#txtStatus').val();


    var url = "http://localhost/CANGRECODERS-GROUP-1/06-Code/controller/insertarDocente.php"

    $.ajax({
        type: 'POST',
        url : url,
        data : {'nombre':nombre,'apellidos':apellidos,'nivel':nivel,'telefono':telefono,'direccion':direccion,'paralelo':paralelo,'docente':docente,'materias':materias,'year':year,'nummaterias':nummaterias,'salario':salario,'usuario':usuario,'password':password,'tipo_usuario':tipo_usuario,'estatus':estatus},
        success : function (response)
        {
         if (response == 'registrado') {
            $('#myModal').modal('show');
         }else{
            alert(error);

         }


        }
    })
}

    function validaUsuario() {
        var usuario =  $('#txtUsuario').val();
        var password = $('#txtPassword').val();

        console.log(usuario);
        console.log(password);
        var url = "http://localhost/CANGRECODERS-GROUP-1/06-Code/controller/validarUsuario.php"

        $.ajax({
            type: 'POST',
            url : url,
            data : {'usuario': usuario, 'password':password},
            success: function(response)
             
            {
                if (response =! 'validado') {
                    console.log(response);
                 }else{
                    alert("Bienvenido " + usuario);
                    window.location = "http://localhost/CANGRECODERS-GROUP-1/06-Code/views/principal.php";
                    console.log(response);
                    
                 }

            }



        })


    }