<?php

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	header("Access-Control-Allow-Methods: POST");

	require_once(__DIR__."/modelDao/PatientDao.php");

    $json = file_get_contents('php://input');
	$data = json_decode($json);

	$patientId = $data->patientId;

	$patientDao = new PatientDao();

	$status = 'ok';
	$message = 'deleted';

	if(is_numeric($patientId)){
		
		$patient = $patientDao->getById($patientId);
        var_dump($patient);
		if($patient == 0){
			$status = 'error';
			$message = 'non-existen patient_id';	
		}
		else{
			$patientDao->delete($patientId);
		}

	}
	else{
		$status = 'error';
		$message = 'invalid commands';
	}
	echo json_encode(array(
		'status' => $status,
		'message' => $message
	));
?>