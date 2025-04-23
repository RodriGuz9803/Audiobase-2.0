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

class Musica_genero
{
    public function obtenerCanciones($generoId)
    {
        global $pdo; // Usamos la conexión global

        // Query para obtener las canciones del género
        $query = "SELECT 
                        c.id, 
                        c.titulo, 
                        DATE_FORMAT(c.fechaLanzamiento, '%Y-%m-%d') AS fechaLanzamiento, 
                        c.generoId, 
                        c.restriccionEdad, 
                        c.portada, 
                        c.anioLanzamiento, 
                        c.archivo,
                        c.albumId,
                        gen.nombre
                  FROM cancion c
                  INNER JOIN usuarioscanciones uc ON c.id = uc.cancionId
                  INNER JOIN genero gen ON  c.generoId=gen.id
                  WHERE gen.id = :id";

        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':id', $generoId);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $generoId = isset($_GET['id']) ? $_GET['id'] : null;

    if ($generoId) {
        $musica = new Musica_genero();
        $canciones = $musica->obtenerCanciones($generoId);

        if ($canciones) {
            echo json_encode($canciones);
        } else {
            echo json_encode(['error' => 'No se encontraron canciones para este género']);
        }
    } else {
        echo json_encode(['error' => 'Falta el ID de género']);
    }
}
