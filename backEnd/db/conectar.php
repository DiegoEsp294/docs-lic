<?php
// Para php 7

 function getConection(){
 	$host     = "localhost";
	$user     = "root";
	$password = "";
	$db       = "docslic";
	
 	$con = new mysqli($host,$user,$password,$db);
	if ($con -> connect_errno) {
	  echo "Failed to connect to MySQL: " . $con -> connect_error;
	  exit();

	}
	return $con;	
 }

?>