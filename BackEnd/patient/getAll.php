<?php
	header('Access-Control-Allow-Origin: *'); 
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	header("Access-Control-Allow-Methods: GET");

	require_once(__DIR__."/modelDao/PatientDao.php");

	$elems = null;

	$patient = new PatientDao();
	
	$elems = $patient->getAll();
	
	$datos1 =json_encode(array('list' => $elems));
	echo $datos1;

	header('Content-Type: application/json');

?>	