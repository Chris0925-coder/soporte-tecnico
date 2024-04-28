<?php
use MongoDB\Driver\ServerApi;

$uri = 'mongodb+srv://chris30:1987DarkSouls30!?@cluster0.jkdgz4b.mongodb.net/';

// Set the version of the Stable API on the client
$apiVersion = new ServerApi(ServerApi::V1);
// , [], ['serverApi' => $apiVersion]

// Create a new client and connect to the server
$client = new MongoDB\Client($uri);

try {
    // Send a ping to confirm a successful connection
    $client->selectDatabase('contacto')->command(['ping' => 1]);
    echo "Pinged your deployment. You successfully connected to MongoDB!\n";
} catch (Exception $e) {
    printf($e->getMessage());
}
?>