<?php
class PatientDao {
	
	public $dataArray = array();
	public $dataCount;
	public $con;

	function __construct(){

		 require(__DIR__."/../../db/conectar.php");
		 require(__DIR__."/Patient.php");

	 $this->con = getConection();
	}

	function getByDni($dni){

		$query = "SELECT * FROM PATIENT WHERE DNI ='$dni' LIMIT 1";
		$result = $this->con -> query($query);
		$row = $result->fetch_array(MYSQLI_ASSOC);
		
		if($row == null)
			return 0 ;
		
		$date = new DateTime($row['BIRTHDAY']);
		$now = new DateTime();
		$interval = $now->diff($date);
		$age = $interval->y;

		$patient = new Patient();
		$patient->id = $row['ID'];
		$patient->dni = $row['DNI'];
		$patient->firstname = $row['FIRST_NAME'];
		$patient->lastname = $row['LAST_NAME'];
		$patient->datetime = $row['DATE_TIME'];
		$patient->record = $row['RECORD'];
		$patient->birthday = $age;
		return $patient;
	}

	function getAll(){

		$query = "SELECT * FROM PATIENT ORDER BY DNI ASC";
		$result = $this->con -> query($query);

		$now = new DateTime();
		while ($row = $result->fetch_array(MYSQLI_ASSOC)){

			$date = new DateTime($row['BIRTHDAY']);
			$interval = $now->diff($date);
			$age = $interval->y;

			$patient = new Patient();
			$patient->id = $row['ID'];
			$patient->dni = $row['DNI'];
			$patient->firstname = $row['FIRST_NAME'];
			$patient->lastname = $row['LAST_NAME'];
			$patient->datetime = $row['DATE_TIME'];
			$patient->record = $row['RECORD'];
			$patient->birthday = $age;
	
			array_push($this->dataArray,$patient);
		}	
		return $this->dataArray;
	}

	function save($patient){

		$patient->datetime = date("Y-m-d H:i:s");

		if(is_null($patient->record)){
			$query = "INSERT INTO PATIENT(FIRST_NAME, LAST_NAME, DNI, DATE_TIME, BIRTHDAY) VALUES('$patient->firstname', '$patient->lastname', '$patient->dni', '$patient->datetime', '$patient->birthday')";
		} else {
			$query = "INSERT INTO PATIENT(FIRST_NAME, LAST_NAME, DNI, DATE_TIME, RECORD, BIRTHDAY) VALUES('$patient->firstname', '$patient->lastname', '$patient->dni', '$patient->datetime', '$patient->record', '$patient->birthday')";
		}

		if( $this->con -> query($query) !== TRUE)
			echo " ".$this->con->error." ";

		return 1;
	}

	function getById($id){
		$query = "SELECT * FROM PATIENT WHERE ID = '$id' LIMIT 1";
		$result = $this->con -> query($query);

		$row = $result->fetch_array(MYSQLI_ASSOC);

		return $row['ID'];

	}

	function delete($id){
	
		$query1 = "DELETE FROM SESSION WHERE PATIENT_ID='$id'";
	
		if( $this->con -> query($query1) !== TRUE)
			return false;

		$query2 = "DELETE FROM PATIENT WHERE ID='$id'";

		if( $this->con -> query($query2) !== TRUE)
			return false;
	
		return true;
	}
}
?>