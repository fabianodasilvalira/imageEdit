<?php
header("Access-Control-Allow-Origin: *");
header('Cache-Control: no-cache, must-revalidate'); 
header("Content-Type: text/plain; charset=UTF-8");
header("HTTP/1.1 200 OK");

$dados = file_get_contents("php://input");
$img = json_encode($dados);
echo $img ;