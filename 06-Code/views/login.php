<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="views/css/style.css">
    <title>ACCESO AL SISTEMA</title>
</head>
<body>
<div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="fadeIn first">
      <img class="image-login" src="https://findicons.com/files/icons/1035/human_o2/128/gdm_login_photo.png" id="icon" alt="User Icon" />
    </div>

    <!-- Login Form -->
    <form action="controller/validarusuario.php" method="post">
      <input type="text" id="txtUsuario" class="fadeIn second" name="txtUsuario" placeholder="Usuario">
      <input type="text" id="txtPassword" class="fadeIn third" name="txtPassword" placeholder="Contraseña">
      <input type="submit" class="fadeIn fourth" value="Ingresar">
    </form>

 

  </div>
</div>
</body>
</html>
