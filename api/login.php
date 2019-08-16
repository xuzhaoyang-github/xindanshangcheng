<?php
    include "./conn.php";
    $user = $_POST['username'];    
    $pw = $_POST['password']; 
    $sql = "
        SELECT `id` FROM `users`
        WHERE `username`='$user' AND `password`='$pw'
    ";
    $result = $conn->query($sql);
    if($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        $userid = $user['id'];
        header("set-cookie:userid=$userid;path=/");
        echo '{"result":true}';
    } else {
        echo '{"result":false}';
    }
    $conn->close()
?>