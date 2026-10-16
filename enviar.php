<?php
/**
 * Script de envío de presupuestos para SLG Transportes
 * No requiere servicios externos si tu hosting soporta PHP (Hostinger, cPanel, DonDominio, etc.)
 */

// Correo de destino
$destinatario = "moritomatamoros03@gmail.com";

// Permitir solicitudes
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitizar entradas
    $nombre        = strip_tags(trim($_POST["nombre"] ?? ""));
    $empresa       = strip_tags(trim($_POST["empresa"] ?? "Particular"));
    $correoCliente = filter_var(trim($_POST["correo"] ?? ""), FILTER_SANITIZE_EMAIL);
    $telefono      = strip_tags(trim($_POST["telefono"] ?? ""));
    $tipoServicio  = strip_tags(trim($_POST["tipo_servicio"] ?? "No especificado"));
    $origen        = strip_tags(trim($_POST["origen"] ?? "No especificado"));
    $destino       = strip_tags(trim($_POST["destino"] ?? "No especificado"));
    $mensaje       = strip_tags(trim($_POST["mensaje"] ?? ""));

    // Validar campos obligatorios
    if (empty($nombre) || empty($correoCliente) || empty($telefono) || empty($mensaje)) {
        http_response_code(400);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(["error" => "Por favor, completa todos los campos obligatorios."]);
        exit;
    }

    // Asunto del correo
    $asunto = "🚛 Nuevo Presupuesto SLG: $nombre (" . ($tipoServicio) . ")";

    // Cuerpo del correo
    $cuerpo = "Has recibido una nueva solicitud de presupuesto desde la web:\n\n";
    $cuerpo .= "--------------------------------------------------\n";
    $cuerpo .= "DATOS DEL CLIENTE:\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Empresa: $empresa\n";
    $cuerpo .= "Email: $correoCliente\n";
    $cuerpo .= "Teléfono: $telefono\n\n";
    $cuerpo .= "DATOS DEL ENVÍO:\n";
    $cuerpo .= "Servicio: $tipoServicio\n";
    $cuerpo .= "Origen: $origen\n";
    $cuerpo .= "Destino: $destino\n\n";
    $cuerpo .= "DETALLES Y MENSAJE:\n";
    $cuerpo .= "$mensaje\n";
    $cuerpo .= "--------------------------------------------------\n";

    // Cabeceras del correo
    $cabeceras = "From: web@slg-transportes.es\r\n";
    $cabeceras .= "Reply-To: $correoCliente\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();

    // Enviar correo
    $enviado = @mail($destinatario, $asunto, $cuerpo, $cabeceras);

    // Responder
    header('Content-Type: application/json; charset=utf-8');
    if ($enviado) {
        echo json_encode(["success" => true, "mensaje" => "Correo enviado con éxito."]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "No se pudo enviar el correo desde el servidor."]);
    }
} else {
    http_response_code(405);
    echo "Método no permitido";
}
