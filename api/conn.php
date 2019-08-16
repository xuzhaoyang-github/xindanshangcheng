<?php
$mysql_username = 'root';
$servername = 'localhost';
$mysql_password = '';
$db_name = 'chuanyichuan';
$conn = new mysqli($servername, $mysql_username, $mysql_password, $db_name);
if ($conn->connect_error) {
    echo "连接数据库失败。error:" . $conn->connect_error;
    return;
}
$conn->query("set names utf8");
?>