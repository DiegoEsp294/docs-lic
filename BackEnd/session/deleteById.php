<?php

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

	require_once(__DIR__."/modelDao/SessionDao.php");

	$json = file_get_contents('php://input');
	$data = json_decode($json);


	$idSessionValue = $data->sessionId;
    $idPatientValue = $data->patientId;

	$sessionDao = new SessionDao();

	$status = 'ok';
	$message = 'deleted';

	if(is_numeric($idSessionValue) && is_numeric($idPatientValue)){
        $existsSession = $sessionDao->getById($idPatientValue, $idSessionValue);
        if($existsSession != 0){
            $sessionDao->deletebyId($idPatientValue, $idSessionValue);
        }
        else{
            $status = 'bad';
            $message = 'non-existen sessionId by patientId';    
        }
	}
	else{
		$status = 'bad';
		$message = 'invalid param';
	}
	echo json_encode(array(
		'status' => $status,
		'message' => $message
	));
?>