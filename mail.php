<?php

header("Access-Control-Allow-Origin: thecreartstore.com"); // Adjust '*' to your domain if needed
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");

$name = $_POST['fulname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

/*
$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "zaxarioudakievita157@gmail.com";

mail($recipient, $phone, $message, $mailheader) or die("Error!");

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Thank you for contacting me. I will get back to you as soon as possible!</h1>
        <p class="back">Go back to the <a href="index.html">homepage</a>.</p>
        
    </div>
</body>
</html>



';

*/
require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "paintingsbyevita158@gmail.com";
$mail->Password = "yourpassword";

$mail->setFrom($email, $name);
$mail->addAddress("paintingsbyevita158@gmail.com", "evita");

// $mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

header("Location: sent.html");


?>
