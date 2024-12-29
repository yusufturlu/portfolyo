<?php 

include '../db/db.php' ;

if(isset($_POST['submit'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $querry = "INSERT INTO your_table (username, email, message) VALUES (:name, :email, :message)";
    $result = $db->prepare($querry);

    try {
        $result->execute([
            ':name' => $name,
            ':email' => $email,
            ':message' => $message,
        ],);
        header('Location: ../index.html');
    } catch (PDOException $e) {
        echo "<script>alert('There's a problem while sending message...')</script>";
        error_log($e->getMessage()); 
    }

}

?>