<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

date_default_timezone_set('America/Mexico_City'); // O tu zona horaria

// Configuración de CORS
header("Access-Control-Allow-Origin: *");  // Permite acceso desde cualquier dominio
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Si es una solicitud OPTIONS, no procesar más
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Incluir el archivo de conexión
include_once 'config/db.php';  // Asegúrate de que la ruta sea correcta

// Clase Usuario
class Usuario
{

    // Obtener datos del usuario por su ID
    public function obtenerDatos($id)
    {
        global $pdo; // Usamos la conexión global

        $query = "SELECT 
        id, 
        nombre, 
        email, 
        fechaNacimiento, 
        sexo, 
        nacionalidad, 
        direccion, 
        estado, 
        apodo, 
        CONCAT('http://localhost/Audiobase/audionase_backend_php/', foto) AS foto, 
        anioInicioCarrera, 
        rolId 
      FROM usuario 
      WHERE id = :id";

        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);  // Devuelve un solo registro
    }

    // Actualizar datos del usuario
    public function actualizarDatos($id, $data)
    {
        global $pdo; // Usamos la conexión global

        $query = "UPDATE usuario SET 
                  nombre = :nombre,
                  email = :email,
                  fechaNacimiento = :fechaNacimiento,
                  sexo = :sexo,
                  nacionalidad = :nacionalidad,
                  direccion = :direccion,
                  estado = :estado,
                  apodo = :apodo,
                  foto = :foto,
                  anioInicioCarrera = :anioInicioCarrera,
                  rolId = :rolId
                  WHERE id = :id";

        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':nombre', $data['nombre']);
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':fechaNacimiento', $data['fechaNacimiento']);
        $stmt->bindParam(':sexo', $data['sexo']);
        $stmt->bindParam(':nacionalidad', $data['nacionalidad']);
        $stmt->bindParam(':direccion', $data['direccion']);
        $stmt->bindParam(':estado', $data['estado']);
        $stmt->bindParam(':apodo', $data['apodo']);
        $stmt->bindParam(':foto', $data['foto']);
        $stmt->bindParam(':anioInicioCarrera', $data['anioInicioCarrera']);
        $stmt->bindParam(':rolId', $data['rolId']);

        return $stmt->execute(); // Regresa si la actualización fue exitosa
    }


    public function obtenerCanciones($usuarioId)
    {
        global $pdo; // Usamos la conexión global

        // Query para obtener las canciones del usuario
        $query = "SELECT 
                        c.id, 
                        c.titulo, 
                        c.fechaLanzamiento, 
                        c.generoId, 
                        c.restriccionEdad, 
                        c.portada, 
                        c.anioLanzamiento, 
                        c.albumId,
                        gen.nombre
                  FROM cancion c
                  INNER JOIN usuarioscanciones uc ON c.id = uc.cancionId
                  INNER JOIN genero gen ON  c.generoId=gen.id
                  WHERE uc.usuarioId = :usuarioId";

        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':usuarioId', $usuarioId);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);  // Devuelve todas las canciones asociadas al usuario
    }

}


// Lógica para manejar las solicitudes GET y POST

// ✅ Primero verificamos si se están pidiendo canciones
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id']) && isset($_GET['tipo']) && $_GET['tipo'] == 'canciones') {
    $usuario = new Usuario();
    $usuarioId = $_GET['id'];
    $canciones = $usuario->obtenerCanciones($usuarioId);

    if ($canciones) {
        echo json_encode($canciones);
    } else {
        echo json_encode(['error' => 'No se encontraron canciones para este usuario']);
    }
    exit; // Muy importante salir después de enviar la respuesta
}

// ✅ Luego, si solo hay ID, se devuelven los datos del usuario
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])) {
    $usuario = new Usuario();
    $id = $_GET['id'];
    $datosUsuario = $usuario->obtenerDatos($id);

    if ($datosUsuario && isset($datosUsuario['fechaNacimiento'])) {
        $datosUsuario['fechaNacimiento'] = date('Y-m-d', strtotime($datosUsuario['fechaNacimiento']));
    }

    if ($datosUsuario) {
        echo json_encode($datosUsuario);
    } else {
        echo json_encode(['error' => 'Usuario no encontrado']);
    }
}




if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['id'])) {
    // Actualizar los datos del usuario
    $usuario = new Usuario();
    $id = $_POST['id'];


    

    // Verificar si se subió una foto
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] == UPLOAD_ERR_OK) {
        // Definir la carpeta de destino para la foto
        $carpetaDestino = 'fotos/';

        // Obtener el nombre del archivo
        $nombreFoto = $_FILES['foto']['name'];

        // Renombrar la foto para que sea única (puedes usar el ID o un timestamp)
        $extension = pathinfo($nombreFoto, PATHINFO_EXTENSION);  // Obtener la extensión
        $nuevoNombreFoto = $id . "_" . time() . "." . $extension;  // Usamos el ID y timestamp

        // Definir el archivo de destino
        $rutaFoto = $carpetaDestino . $nuevoNombreFoto;

        // Mover el archivo a la carpeta destino
        if (move_uploaded_file($_FILES['foto']['tmp_name'], $rutaFoto)) {
            // ✅ Corrección aquí
            // Eliminar la foto anterior si existe
            $usuarioAnterior = $usuario->obtenerDatos($id);
            if ($usuarioAnterior && isset($usuarioAnterior['foto'])) {
                // Convertir la URL en ruta local
                $rutaFotoAnterior = str_replace('http://localhost/Audiobase/audionase_backend_php/', '', $usuarioAnterior['foto']);

                // Verificar si existe el archivo físico y eliminarlo
                if (file_exists($rutaFotoAnterior)) {
                    unlink($rutaFotoAnterior);
                }
            }

            // La nueva foto se subió correctamente
            $foto = $rutaFoto;
        } else {
            echo json_encode(['success' => false, 'error' => 'No se pudo subir la foto']);
            exit;
        }
    } else {
        // Si no hay foto nueva, usar la actual
        $stmtFoto = $pdo->prepare("SELECT foto FROM usuario WHERE id = :id");
        $stmtFoto->bindParam(':id', $id);
        $stmtFoto->execute();
        $fotoActual = $stmtFoto->fetchColumn();

        $foto = $fotoActual;
    }

    $data = [
        'nombre' => $_POST['nombre'],
        'email' => $_POST['email'],
        'fechaNacimiento' => $_POST['fechaNacimiento'],
        'sexo' => $_POST['sexo'],
        'nacionalidad' => $_POST['nacionalidad'],
        'direccion' => $_POST['direccion'],
        'estado' => $_POST['estado'],
        'apodo' => $_POST['apodo'],
        'foto' => $foto,
        'anioInicioCarrera' => ($_POST['anioInicioCarrera'] === '' || $_POST['anioInicioCarrera'] === 'null') ? null : (int)$_POST['anioInicioCarrera'],
        'rolId' => $_POST['rolId'],
    ];
    $resultado = $usuario->actualizarDatos($id, $data);

    // Respuesta JSON de éxito o error
    if ($resultado) {
        echo json_encode(['success' => true]);
    
    } else {
        echo json_encode(['success' => false, 'error' => 'No se pudo actualizar']);
    }
}



