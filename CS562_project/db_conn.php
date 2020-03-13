<?php

$dbhost = 'oniddb.cws.oregonstate.edu';
$dbname = 'linyou-db';
$dbuser = 'linyou-db';
$dbpass = 'oUNFumEAljf5x8Bc';

$mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

//$mysqli->close();

?>