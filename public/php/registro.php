<?php

include("con_dbatlas.php");

if (isset($_POST['register'])){
	if (strlen($_POST['email']) >= 1 && strlen($_POST['control']) >= 1) {
		$email = trim($_POST['email']);
		$control = trim($_POST['control']);
		$fechareg = date("d/m/y");
		$consulta = "INSERT INTO contacto(email, control, fech_reg) VALUES ('$email', '$control', '$fechareg')";
		$resultado = MongoDB\Client($client, $consulta);
		if ($resultado) {
			?>
			<h3 class="ok">¡Se ha enviado con exito!</h3>
			<?php

		} else {
			?>
			<h3 class="bad">¡Ups ha ocurrido un error!</h3>
			<?php
		}
	} else {
		?>
		<h3 class="bad">¡Complete los campos!</h3>
		<?php
	}
}
?>
