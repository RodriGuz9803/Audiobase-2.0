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

// Establecer la zona horaria
date_default_timezone_set('America/Mexico_City'); // Cambia a tu zona horaria si es necesario

// Habilitar la visualización de errores para depurar
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Verificar si se está enviando la solicitud POST y si la acción es válida
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener el cuerpo de la solicitud
    $inputData = file_get_contents('php://input');
    // Convertir el JSON en un array PHP
    $data = json_decode($inputData, true);

    // Verificar si el JSON se ha decodificado correctamente
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Error al procesar JSON']);
        exit;
    }

    // Verificar si se ha enviado la acción
    if (isset($data['action'])) {
        
        // Registro
        if ($data['action'] == 'register') {
            $email = $data['email'];
            $password = hash('sha256', $data['password']);
            $nombre = $data['nombre'];
            $direccion = $data['direccion'];
            $estado = $data['estado'];
            $fechaNacimiento = $data['fechaNacimiento'];
            $nacionalidad = $data['nacionalidad'];
            $sexo = $data['sexo'];
            $rolId = 3; // Valor fijo para rolId
        
            // Preparar la consulta con rolId
            $stmt = $pdo->prepare("INSERT INTO usuario (email, password, nombre, direccion, estado, fechaNacimiento, nacionalidad, sexo, rolId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        
            if ($stmt->execute([$email, $password, $nombre, $direccion, $estado, $fechaNacimiento, $nacionalidad, $sexo, $rolId])) {
                // Generar un token (utilizando md5 y uniqid como alternativa)
                $token = md5(uniqid(mt_rand(), true));
                echo json_encode(['message' => 'Usuario registrado con éxito', 'token' => $token]);
            } else {
                echo json_encode(['error' => 'Error al registrar usuario']);
            }
        }

        // Login
        if ($data['action'] == 'login') {
            $email = $data['email'];
            $password = hash('sha256', $data['password']); // usa el mismo hash que en el registro
        
            $stmt = $pdo->prepare("SELECT * FROM usuario WHERE email = ?");
            $stmt->execute([$email]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
            if ($user && $password === $user['password']) {
                // Genera un token
                $token = md5(uniqid(mt_rand(), true));
        
                // Incluye la información completa del usuario junto con el token
                echo json_encode([
                    'token' => $token, 
                    'user' => [
                        'id' => $user['id'],
                        'nombre' => $user['nombre'],
                        'nacionalidad' => $user['nacionalidad'],
                        'rolId'=> $user['rolId'],
                        'foto'=> 'http://localhost/Audiobase/audionase_backend_php/'.$user['foto']
                    ]
                ]);
            } else {
                echo json_encode(['error' => 'Credenciales incorrectas']);
            }
        }
        
        
    } else {
        // Respuesta si no se recibe la acción
        echo json_encode(['error' => 'No se recibió la acción']);
    }
} else {
    // Respuesta si no se recibe una solicitud POST
    echo json_encode(['error' => 'El método no es POST']);
}
?>
