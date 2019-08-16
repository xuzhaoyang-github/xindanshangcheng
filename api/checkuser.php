<?php
    $username = $_GET['username'];
    include "conn.php";
    $sql = "
        SELECT `id` FROM `users` WHERE `username`='$username'
    ";
    $result = $conn->query($sql);
    if($result->num_rows > 0) {
        echo '{"result":false}';
    } else {
        echo '{"result":true}';
    }

    $conn->close();