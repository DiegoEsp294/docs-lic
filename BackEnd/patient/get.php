<?php
	header('Access-Control-Allow-Origin: *'); 
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

	require_once(__DIR__."/modelDao/PatientDao.php");

	$json = file_get_contents('php://input');
	$data = json_decode($json);

	$dniValue = $data->dni; 
	$error = false;

	$patient = new PatientDao();
	if(!is_numeric($dniValue)):
		echo json_encode(array(
			'message' => 'invalid dni ',
			'status' => 'bad',
			'elem' => null));
		$error = true;
	else:
		$elem = $patient->getByDni($dniValue);
		if($elem == 0):
			echo json_encode(array(
				'message' => 'non-existent dni ',
				'status' => 'bad',
				'elem' => null));
			$error = true;
		endif;
	endif;

	if(!$error){
		echo json_encode(array(
			'status' => 'ok',
			'message' => 'correct',
			'patient' => $elem
		));
	}
	header('Content-Type: application/json');
?>