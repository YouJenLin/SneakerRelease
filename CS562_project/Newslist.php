<?php

include("db_conn.php");

$sql = "SELECT * FROM News ";

$stmt = $mysqli->prepare($sql);
if ($stmt === FALSE) {
   die($mysqli->error);
}
$result_exe = $stmt->execute();
$stmt->store_result();


if ($result_exe) {
   $result_bind = $stmt->bind_result($nid, $des, $picture, $name);
   if ($result_bind) {
      while ($stmt->fetch()) {
         $return_arr[] = array(
         "nid" => $nid,
         "des" => $des,
         "name" => $name,
         "picture" => base64_encode($picture)
      );
      }
      echo json_encode($return_arr);
   }
}

$mysqli->close();

?>