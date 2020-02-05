<?php

include("db_conn.php");

$sql = "SELECT * FROM UpcomingList ORDER BY date";

$stmt = $mysqli->prepare($sql);
if ($stmt === FALSE) {
   die($mysqli->error);
}
$result_exe = $stmt->execute();
$stmt->store_result();


if ($result_exe) {
   $result_bind = $stmt->bind_result($uid, $name, $picture, $date, $price);
   if ($result_bind) {
      while ($stmt->fetch()) {
         $return_arr[] = array(
         "uid" => $uid,
         "name" => $name,
         "price" => $price,
         "date" => $date,
         "picture" => base64_encode($picture)
      );
      }
      echo json_encode($return_arr);
   }
}

$mysqli->close();

?>