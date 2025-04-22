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

class Musica
{

    public function obtenerCanciones()
    {
        global $pdo; // Usamos la conexión global
    
        // Query para obtener todas las canciones
        $query = "SELECT 
                    c.id, 
                    c.titulo, 
                    DATE_FORMAT(c.fechaLanzamiento, '%Y-%m-%d') AS fechaLanzamiento,  -- Formateamos la fecha
                    c.generoId, 
                    c.restriccionEdad, 
                    c.portada, 
                    c.anioLanzamiento, 
                    c.archivo,
                    c.albumId,
                    gen.nombre,
                    u.apodo
                  FROM cancion c
                  INNER JOIN genero gen ON c.generoId = gen.id
                  INNER JOIN usuarioscanciones uc ON c.id = uc.cancionId
                  INNER JOIN usuario u ON u.id = uc.usuarioId";
    
        $stmt = $pdo->prepare($query);
        $stmt->execute();
    
        return $stmt->fetchAll(PDO::FETCH_ASSOC);  // Devuelve todas las canciones
    }
    


    function editarCancion($id, $data)
    {
        global $pdo;

        $titulo = $data['titulo'];
        $fechaLanzamiento = $data['fechaLanzamiento'];
        $generoId = $data['generoId'];
        $restriccionEdad = $data['restriccionEdad'];
        $anioLanzamiento = $data['anioLanzamiento'];
        $albumId = isset($data['albumId']) ? $data['albumId'] : null;

        // Obtener los datos actuales
        $actual = $pdo->prepare("SELECT archivo, portada FROM cancion WHERE id = :id");
        $actual->bindParam(':id', $id);
        $actual->execute();
        $datosActuales = $actual->fetch(PDO::FETCH_ASSOC);
        $archivo = $datosActuales['archivo'];
        $portada = $datosActuales['portada'];

        // Reemplazar archivo si viene uno nuevo
        if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
            $ext = pathinfo($_FILES['archivo']['name'], PATHINFO_EXTENSION);
            $nuevoNombreArchivo = $id . '_' . preg_replace('/[^a-zA-Z0-9]/', '_', $titulo) . '.' . $ext;
            move_uploaded_file($_FILES['archivo']['tmp_name'], 'musica/' . $nuevoNombreArchivo);

            if ($archivo && file_exists('musica/' . $archivo)) {
                unlink('musica/' . $archivo);
            }

            $archivo = $nuevoNombreArchivo;
        }

        // Reemplazar portada si viene una nueva
        if (isset($_FILES['portada']) && $_FILES['portada']['error'] === UPLOAD_ERR_OK) {
            $ext = pathinfo($_FILES['portada']['name'], PATHINFO_EXTENSION);
            $nuevoNombrePortada = $id . '_' . preg_replace('/[^a-zA-Z0-9]/', '_', $titulo) . '.' . $ext;
            move_uploaded_file($_FILES['portada']['tmp_name'], 'fotos/' . $nuevoNombrePortada);

            if ($portada && file_exists('fotos/' . $portada)) {
                unlink('fotos/' . $portada);
            }

            $portada = $nuevoNombrePortada;
        }

        // Actualizar datos
        $query = "UPDATE cancion SET 
                    titulo = :titulo,
                    fechaLanzamiento = :fechaLanzamiento,
                    generoId = :generoId,
                    restriccionEdad = :restriccionEdad,
                    portada = :portada,
                    anioLanzamiento = :anioLanzamiento,
                    albumId = :albumId,
                    archivo = :archivo 
                  WHERE id = :id";

        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':fechaLanzamiento', $fechaLanzamiento);
        $stmt->bindParam(':generoId', $generoId);
        $stmt->bindParam(':restriccionEdad', $restriccionEdad);
        $stmt->bindParam(':portada', $portada);
        $stmt->bindParam(':anioLanzamiento', $anioLanzamiento);
        $stmt->bindParam(':albumId', $albumId);
        $stmt->bindParam(':archivo', $archivo);
        $stmt->bindParam(':id', $id);

        if ($stmt->execute()) {
            return ["success" => true, "mensaje" => "Canción editada correctamente"];
        } else {
            return ["success" => false, "mensaje" => "Error al editar canción"];
        }
    }

    function agregarCancion($data)
    {
        global $pdo;

        $usuarioId = $data['usuarioId'];
        $titulo = $data['titulo'];
        $fechaLanzamiento = $data['fechaLanzamiento'];
        $generoId = $data['generoId'];
        $restriccionEdad = $data['restriccionEdad'];
        $anioLanzamiento = $data['anioLanzamiento'];
        $albumId = isset($data['albumId']) ? $data['albumId'] : null;

        $archivo = null;
        $portada = null;

        // Primero insertamos sin archivo y portada
        $query = "INSERT INTO cancion (titulo, fechaLanzamiento, generoId, restriccionEdad, portada, anioLanzamiento, albumId, archivo)
                  VALUES (:titulo, :fechaLanzamiento, :generoId, :restriccionEdad, '', :anioLanzamiento, :albumId, '')";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':fechaLanzamiento', $fechaLanzamiento);
        $stmt->bindParam(':generoId', $generoId);
        $stmt->bindParam(':restriccionEdad', $restriccionEdad);
        $stmt->bindParam(':anioLanzamiento', $anioLanzamiento);
        $stmt->bindParam(':albumId', $albumId);

        if ($stmt->execute()) {
            $cancionId = $pdo->lastInsertId();

            // Guardar archivo
            if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
                $ext = pathinfo($_FILES['archivo']['name'], PATHINFO_EXTENSION);
                $archivo = $cancionId . '_' . preg_replace('/[^a-zA-Z0-9]/', '_', $titulo) . '.' . $ext;
                move_uploaded_file($_FILES['archivo']['tmp_name'], 'musica/' . $archivo);
            }

            // Guardar portada
            if (isset($_FILES['portada']) && $_FILES['portada']['error'] === UPLOAD_ERR_OK) {
                $ext = pathinfo($_FILES['portada']['name'], PATHINFO_EXTENSION);
                $portada = $cancionId . '_' . preg_replace('/[^a-zA-Z0-9]/', '_', $titulo) . '.' . $ext;
                move_uploaded_file($_FILES['portada']['tmp_name'], 'fotos/' . $portada);
            }

            // Actualizar la canción con los nombres de archivo
            $update = $pdo->prepare("UPDATE cancion SET archivo = :archivo, portada = :portada WHERE id = :id");
            $update->bindParam(':archivo', $archivo);
            $update->bindParam(':portada', $portada);
            $update->bindParam(':id', $cancionId);
            $update->execute();

            // Relacionar canción con usuario
            $rel = "INSERT INTO usuarioscanciones (usuarioId, cancionId) VALUES (:usuarioId, :cancionId)";
            $relStmt = $pdo->prepare($rel);
            $relStmt->bindParam(':usuarioId', $usuarioId);
            $relStmt->bindParam(':cancionId', $cancionId);
            $relStmt->execute();

            return ["success" => true, "mensaje" => "Canción agregada correctamente"];
        } else {
            return ["success" => false, "mensaje" => "Error al guardar canción"];
        }
    }
}

$musica = new Musica();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tipo = isset($_POST['tipo']) ? $_POST['tipo'] : null;

    if ($tipo === "editar") {
        $id = $_POST['id'];
        echo json_encode($musica->editarCancion($id, $_POST));
    } elseif ($tipo === "agregar") {
        echo json_encode($musica->agregarCancion($_POST));
    } else {
        echo json_encode(["success" => false, "mensaje" => "Tipo de operación inválido"]);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Creamos una instancia de la clase Musica
    $musica = new Musica();
    
    // Llamamos al método obtenerCanciones sin usuarioId
    $canciones = $musica->obtenerCanciones();

    if ($canciones) {
        echo json_encode($canciones);  // Devolvemos las canciones en formato JSON
    } else {
        echo json_encode(['error' => 'No se encontraron canciones']);  // En caso de que no se encuentren canciones
    }
}
