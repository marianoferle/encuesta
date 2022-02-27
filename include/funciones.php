<?php
// Usaremos este archivo para almacenar todas las funciones básicas.

function mysql_prep( $value ) {
	// Primero evaluamos si magic_quotes_gpc se encuentra activo
	// a través de la función get_magic_quotes_gpc.
	$magic_quotes_active = get_magic_quotes_gpc();
	// Segundo, evaluamos si nuestra versión PHP es lo suficiente-
	// mente nueva a través de la función function_exists.
	$new_enough_php = function_exists( "mysql_real_escape_string" ); // ej. PHP >= v4.3.0
	if( $new_enough_php ) { // PHP v4.3.0 o superior
		// Deshace cualquier efecto magic quote para que
		// mysql_real_escape_string pueda realizar el trabajo.
		if( $magic_quotes_active ) { $value = stripslashes( $value ); }
		$value = mysql_real_escape_string( $value );
	} else { // anterior a PHP v4.3.0
		// si magic quotes todavía no está activado entonces
		// utilizo addslashes de forma manual, explícita.
		if( !$magic_quotes_active ) { $value = addslashes( $value ); }
		// si magic quotes se encuentra activo, entonces los slashes ya existen
	}
	return $value;
}

function redirigir_a( $location = NULL ) {
	if ($location != NULL) {
		header("Location: {$location}");
		exit;
	}
}

function confirmar_consulta($result_set) {
	if (!$result_set) {
		die("La consulta a la base de datos ha fallado: " . mysql_error());
	}
}
	



?>