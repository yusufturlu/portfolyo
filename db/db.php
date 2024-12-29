<?php
    try {
        $db = new PDO("mysql:host=localhost;dbname=dbname;charset=utf8", "your_username", "your_password"); ;
        echo "Connection Succesfull!" ;
    }
    catch (PDOException $e) {
        echo "Connection Failed! : ". $e->getMessage() ;
    }
?> 