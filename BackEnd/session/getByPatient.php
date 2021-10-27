<?php
	header('Access-Control-Allow-Origin: *'); 
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

	require_once(__DIR__."/modelDao/SessionDao.php");

	$json = file_get_contents('php://input');
	$data = json_decode($json);

	$patientId = $data->patientId; 

	$status = 'ok';
	$message = null;
	$elems = null;

	$patient = new SessionDao();
	if(is_numeric($patientId)):
		$elems = $patient->getByPatient($patientId);
	else:
		$status = 'bad';
		$message = 'invalid patientId';
	endif;

	$datos1 =json_encode(array(
		"status" => $status,
		"message" => $message,
		"sessions" => $elems
	));
	echo $datos1;
	header('Content-Type: application/json');
?>