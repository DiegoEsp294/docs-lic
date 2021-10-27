<?php

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

	require_once(__DIR__."/modelDao/SessionDao.php");
	// require_once(__DIR__."/Validation/validations.php");

	$json = file_get_contents('php://input');
	$data = json_decode($json);

	// $validation = new Validation();

	$dataValue = $data->data;
	$patientIdValue = $data->patientId;

	$sessionDao = new SessionDao();

	$status = 'ok';
	$message = 'solved';

	if(is_numeric($patientIdValue)){
		
		$session = new Session();
		$session->patientId = $patientIdValue;
		$session->data = $dataValue;
		$sessionDao->save($session);
	}
	else{
		$status = 'bad';
		$message = 'invalid commands';
	}
	echo json_encode(array(
		'status' => $status,
		'message' => $message
	));
?>