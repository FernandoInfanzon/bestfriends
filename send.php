<?php

function is_ajax(){
	return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
}

if(is_ajax()){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$telefono = $_POST['telefono'];
	$message = $_POST['message'];
	$header = 'From: ' . $email . "\r\n";
	$header .= 'X-Mailer: PHP/' . phpversion() . "\r\n";
	$header .= 'Mime-version: 1.0 \r\n';
	$header .= 'Content-Type: text/html';
	$bodyMessage = "This message was sent by: " . $name . "\r\n";
	$bodyMessage .= "Email: " . $email . "\r\n";
	$bodyMessage .= "Telefono: " . $telefono . "\r\n";
	$bodyMessage .= "Message: " . $message . "\r\n";
	$for = "hello@fernandoim.com";
	$subject = "Mensaje enviado desde pagina de BestFriends";
	mail($for, $subject, utf8_encode($bodyMessage), $header);

	echo json_encode(array(
		'message' => sprintf('Tu mensaje ha sido enviado, pronto te contactaremos')
	));

}else{
	die("No está permitido");
}


?>
