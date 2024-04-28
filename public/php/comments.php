<?php
	include("con_dbatlas.php");

	if (isset($client)) {
		// function php_func() {
			$consulta = "SELECT id, email, control, fech_reg FROM contacto";
			$resultado = MongoDB\Client($client, $consulta);
			if ($resultado->num_rows > 0) {
				while ($row =  $resultado->fetch_assoc()) {
					echo 
					"<div class='trow'>" . 
		                $row["id"]. ": " . 
		                $row["email"] . " " . 
		                $row["control"]. " " . 
		                $row["fech_reg"]. " " . 
		                "<br><span><a href='delete.php?id=".$row['id']."'>Delete</a></span>" .
		                "<br><span class='editMember'><a href='#'>Edit</a></span>" . 
		                "<br></div>";
				}
			} else {
				  	echo "0 results";
		}
	}
	MongoDB\Client($client);
?>