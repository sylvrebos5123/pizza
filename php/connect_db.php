<?php

try{
    $db = new PDO('mysql:host=localhost;dbname=pizza','root',''
    , array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES "UTF8"'));

    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
}catch(PDOException $e){
    echo 'Database connexion failed : '.$e->getMessage();
    die();
}