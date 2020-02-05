<?php

function load_items($mysqli) {
  $sql = "SELECT uid, name, picture, date, price FROM upcominglist";

  $stmt = $mysqli->prepare($sql);

  $result_exe = $stmt->execute();

  if ($result_exe) {
    $result_bind = $stmt->bind_result($uid, $name, $picture, $date, $price);
    if ($result_bind) {
      while ($stmt->fetch()) {
        $return_arr[] = array(
          "ID" => $uid,
          "Name" => $name,
          "Picture" => $picture,
          "Date" => $date,
          "Price" => $price
        );
      };
      echo json_encode($return_arr);
    }
  }
}


include("db_conn.php");
load_items($mysqli);
$mysqli->close();



?>