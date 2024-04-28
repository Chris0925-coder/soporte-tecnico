<?php
    include("con_dbatlas.php");
    // sql to delete a record
    $consulta = "DELETE FROM contacto WHERE id='".$_GET['id']."' ";
    $resultado = mysqli_query($client, $consulta);
    if ($resultado) {
       header("Location: comments.php");
    } else {
        echo "Error deleting record: " . mysqli_error($client);
    }

    mysqli_close($client);

?>