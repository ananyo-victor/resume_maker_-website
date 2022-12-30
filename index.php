<?php

$server = "localhost";
$username = "root";
$password = "";

$con = mysqli_conect($server,$username,$password);

if(!$con){
    die("connection to tis database failed due to ". mysqli_conect_error);
}
else{
    echo "Success connecting to the db";
}

for ($i=1; $i <= 10; $i++) {
    function ach(){
        return "Ainput" + $i;
    } 
    function hob(){
        return "Hinput" + $i;
    } 
    function cer(){
        return "Cinput" + $i;
    } 
    function pro(){
        return "Pinput" + $i;
    } 
    $achievement = $_POST[ach()];
    $hobbies = $_POST[hob()];
    $certificate = $_POST[cer()];
    $project = $_POST[pro()];
    $sql = "INSERT INTO `resume_achievement`.`resume_achievement` (`t6_id`, `achievement`, `project`, `certificate`, `internship`, `date`) VALUES (NULL, '$achievement', '$hobbies', '$certificate', '$project', current_timestamp())";
}
?>