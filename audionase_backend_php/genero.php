<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

date_default_timezone_set('America/Mexico_City');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

include_once 'config/db.php';

class Genero {

    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function obtenerGeneros() {
        $query = "SELECT id, nombre FROM genero";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $generos = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $generos[] = $row;
        }

        echo json_encode($generos);
    }
}

// Instanciar y ejecutar
$genero = new Genero($pdo);  // Asegúrate de que $pdo es el nombre de la variable en db.php
$genero->obtenerGeneros();
?>
