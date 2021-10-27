<?php
class SessionDao {
	
	public $dataArray = array();
	public $dataCount;
	public $con;

	function __construct(){

		 require(__DIR__."/../../db/conectar.php");
		 require(__DIR__."/Session.php");

	 $this->con = getConection();
	}

	function getByPatient($patientId){

		$query = "SELECT * FROM SESSION WHERE PATIENT_ID ='$patientId'";
		$result = $this->con -> query($query);
		while ($row = $result->fetch_array(MYSQLI_ASSOC)){

			$session = new Session();
			$session->id = $row['ID'];
			$session->patientId = $row['PATIENT_ID'];
			$session->data = $row['DATA'];
			$session->datetime =  date("d-m-Y", strtotime($row['DATE_TIME']));
			$session->num = $row['NUM'];
	
			array_push($this->dataArray,$session);
		}	
		return $this->dataArray;
	}

	function getById($patientId, $sessionId){
		$query = "SELECT * FROM SESSION WHERE PATIENT_ID ='$patientId' AND ID = '$sessionId' LIMIT 1";
		$result = $this->con -> query($query);
		$row = $result->fetch_array(MYSQLI_ASSOC);

		return $row['ID'];

	}

	function save($session){

		$session->datetime = date("Y-m-d H:i:s");

		$query = "SELECT MAX(NUM) AS MAX_NUM FROM SESSION WHERE PATIENT_ID = '$session->patientId'";
		$result = $this->con -> query($query);
		$row = $result->fetch_array(MYSQLI_ASSOC);

		$max_num = $row['MAX_NUM'] + 1;
		$query2 = "INSERT INTO SESSION(PATIENT_ID, DATA, DATE_TIME, NUM) VALUES('$session->patientId', '$session->data', '$session->datetime', '$max_num')";

		if( $this->con -> query($query2) !== TRUE)
			echo " ".$this->con->error." ";

		return 1;
	}

	function deleteById($patientId, $sessionId){
	
		$query = "DELETE FROM SESSION WHERE ID='$sessionId' AND PATIENT_ID = '$patientId'";
	
		if( $this->con -> query($query) !== TRUE)
			return false;
	
		return true;
	}
}
?>