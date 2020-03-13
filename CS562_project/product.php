<?php

if($_SERVER['REQUEST_METHOD']==='POST' && empty($_POST)) {
   $str = file_get_contents('php://input');
  }
$obj = json_decode($str, true);
$Listid = intval($obj['Uid']);

include("db_conn.php");
load_items($mysqli, $Listid);
$mysqli->close();


function load_items($mysqli, $id) {
  $sql = "SELECT * FROM Link WHERE uid = ?";
  $stmt = $mysqli->prepare($sql);
  $stmt->bind_param('i', $id);

  $result_exe = $stmt->execute();

  if ($result_exe) {
    $result_bind = $stmt->bind_result($uid, $lid, $name, $link);
    if ($result_bind) {
      while ($stmt->fetch()) {
        $return_arr[] = array(
          "uid" => $uid,
          "lid" => $lid,
          "name" => $name,
          "link" => $link,
        );
      };
      echo json_encode($return_arr);
    }
  }
}


?>