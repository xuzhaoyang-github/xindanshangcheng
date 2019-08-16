<?php
header('content-type:text/json');
if (!empty($_COOKIE['userid'])) {
    $userid = $_COOKIE['userid'];
} else {
    echo '[]';
}
$conn = new mysqli("localhost", "root", "", "chuanyichuan");
if ($conn->connect_error) {
    echo "连接失败";
    return;
}
$conn->query("set names utf8"); 
$sql = "
    SELECT `name`, `price`, `img`, `count` FROM `cart`
    WHERE `userid`=$userid
";
$result = $conn->query($sql);
$resp = array(); 
if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc(); 
    while ($row != null) {
        $resp[] = $row; 
        $row = $result->fetch_assoc();
    }
    echo json_encode($resp); 
} else {
    echo "[]";
}