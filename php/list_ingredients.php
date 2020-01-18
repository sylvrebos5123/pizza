<?php

//database connexion file
require dirname(__FILE__).'/connect_db.php';

// SQL request
$query = $db->prepare('SELECT * FROM ingredients;');

$query->execute();
//return a result as an array
$array_ingredients = $query->fetchAll();
$output_arrays=array();
$i=0;

//To display the array
//print_r($array_ingredients);
foreach($array_ingredients as $k=>$v){
    $output_arrays[$i]['id'] = $v->id;
    $output_arrays[$i]['label'] = $v->label;

    $i++;
}
//To transform the array to a JSON object
echo json_encode($output_arrays);