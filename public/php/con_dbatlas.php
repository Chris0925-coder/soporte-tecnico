<?php
use MongoDB\Driver\ServerApi;

$uri = 'mongodb+srv://chris09:Lrg7Fue3DqJ6DP5k@cluster0.jkdgz4b.mongodb.net/contacto';

// Set the version of the Stable API on the client
$apiVersion = new ServerApi(ServerApi::V1);
// , [], ['serverApi' => $apiVersion]

// Create a new client and connect to the server
$client = new MongoDB\Client($uri), [], ['serverApi' => $apiVersion];
if (isset($_POST['register'])){
    if (strlen($_POST['email']) >= 1 && strlen($_POST['control']) >= 1) {
        $email = trim($_POST['email']);
        $control = trim($_POST['control']);
    try {
        // Send a ping to confirm a successful connection
        $client->selectDatabase('contacto')->command(['ping' => 1]);
        echo "Pinged your deployment. You successfully connected to MongoDB!\n";
    } catch (Exception $e) {
        printf($e->getMessage());
    }
} else {
    ?>
    <h3 class="bad">¡Complete los campos!</h3>
    <?php
}
?>