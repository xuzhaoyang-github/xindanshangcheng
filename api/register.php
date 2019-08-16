<?php
include "./conn.php";
$user = $_POST['username'];
$pw = $_POST['password'];
$sql = "
        SELECT `id` FROM `users` WHERE `username`='$user'
    ";
header("content-type:text/json");
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    header("location: http://localhost:80/xindanshangcheng/dist/html/register.html");
    return;
}
$sql = "
        INSERT INTO `users`
        (`id`, `username`, `password`)
        VALUES
        (NULL, '$user', '$pw')
    ";
$result = $conn->query($sql);
if ($result) {
    echo '{"result":true}';
} else {
    echo '{"result":false}';
}


$conn->close();