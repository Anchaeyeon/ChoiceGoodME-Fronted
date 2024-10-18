<?php
    $id = $_POST['userid'];
    $title = $_POST['usertitle'];
    $description = $_POST['userdescription'];
    $image = $_POST['userimage'];

    $conn = mysqli_connect('localhost', 'root', '111111', 'mysql');

    mysqli_query($conn, "insert into management values('$id', '$title', '$description', '$image')");
    echo "inserted!";
?>