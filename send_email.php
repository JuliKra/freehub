<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $firstName = htmlspecialchars($_POST["first-name"]);
    $lastName = htmlspecialchars($_POST["last-name"]);
    $email = htmlspecialchars($_POST["email"]);
    $projectDescription = htmlspecialchars($_POST["project-description"]);
    
    // Definir el destinatario, el asunto y el cuerpo del correo
    $to = "julieta.krawiecki@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    $subject = "Nuevo mensaje de contacto desde el sitio web";
    $message = "Nombre: $firstName $lastName\nCorreo: $email\n\nDescripción del proyecto:\n$projectDescription";
    $headers = "From: $email";
    
    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo "¡Mensaje enviado con éxito!";
    } else {
        echo "Hubo un problema al enviar el mensaje.";
    }
}
?>