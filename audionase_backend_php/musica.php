<?php
// Permitir el acceso desde cualquier origen (en producción, podrías restringir esto a un dominio específico)
header("Access-Control-Allow-Origin: *");
// Permitir los métodos necesarios (puedes ajustar esto según tus necesidades)
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
// Permitir los encabezados necesarios (ajustar según lo que tu frontend necesita)
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Si es una solicitud OPTIONS, no es necesario continuar procesando la solicitud
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

include_once 'config/db.php';



?>