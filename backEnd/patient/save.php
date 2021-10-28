<?php

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	header("Access-Control-Allow-Methods: POST");

	require_once(__DIR__."/modelDao/PatientDao.php");
	// require_once(__DIR__."/Validation/validations.php");

	$json = file_get_contents('php://input');
	$data = json_decode($json);

	// $validation = new Validation();

	$firstnameValue = $data->firstname;
	$lastnameValue = $data->lastname;
	$dniValue = $data->dni;
	$record = $data->record;
	$birthday = $data->birthday;

	$patientDao = new PatientDao();

	$status = 'ok';
	$message = 'solved';

	if(!is_null($firstnameValue) && !is_null($lastnameValue) &&
		is_numeric($dniValue)){
		
		$patient = $patientDao->getByDni($dniValue);
		if($patient != 0){
			$status = 'error';
			$message = 'dni already exists';
		}
		else{
			$patient = new Patient();
			$patient->firstname = $firstnameValue;
			$patient->lastname = $lastnameValue;
			$patient->dni = $dniValue;
			$patient->record = $record;
			$patient->birthday = $birthday;
			$patientDao->save($patient);
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