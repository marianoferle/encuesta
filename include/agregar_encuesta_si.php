<?php require_once("conexion.php"); ?>
<?php require_once("funciones.php"); ?>
<?php

	$errores = array();
	
	// Validación de formulario
	$campos_requeridos = array('sexo_id', 'edad_id','educacion_id','red2','red3','red4','red5','red6','red7','pre_si1','pre_si2','pre_si3','pre_si4','pre_si5','pre_si6','pre_si7','pre_si8','pre_si9','pre_si10','pre_si11','pre_si12','pre_si13','pre_si14','pre_si15','pre_si16','pre_si17','pre_si18','pre_si19','pre_si20','pre_si21','pre_si22','pre1','pre2','pre3','pre4','pre5','pre6','pre7','pre8','pre9','pre10','pre11','pre12','pre13','pre14','pre15');
	foreach($campos_requeridos as $nombre_de_campo) {
		if (!isset($_POST[$nombre_de_campo]) || empty($_POST[$nombre_de_campo])) {
			$errores[] = $nombre_de_campo;
		}
	}

	if (!empty($errores)) {
		redirigir_a("../index.php");
	}

?>
<?php
	$sexo_id = mysql_prep($_POST['sexo_id']);
	$edad_id = mysql_prep($_POST['edad_id']);
	$educacion_id = mysql_prep($_POST['educacion_id']);
	$red2 = mysql_prep($_POST['red2']);	
	$red3 = mysql_prep($_POST['red3']);	
	$red4 = mysql_prep($_POST['red4']);		
	$red5 = mysql_prep($_POST['red5']);
	$red6 = mysql_prep($_POST['red6']);	
	$red7 = mysql_prep($_POST['red7']);	

	$pre_si1 = mysql_prep($_POST['pre_si1']);	
	$pre_si2 = mysql_prep($_POST['pre_si2']);
	$pre_si3 = mysql_prep($_POST['pre_si3']);
	$pre_si4 = mysql_prep($_POST['pre_si4']);	
	$pre_si5 = mysql_prep($_POST['pre_si5']);
	$pre_si6 = mysql_prep($_POST['pre_si6']);
	$pre_si7 = mysql_prep($_POST['pre_si7']);	
	$pre_si8 = mysql_prep($_POST['pre_si8']);
	$pre_si9 = mysql_prep($_POST['pre_si9']);
	$pre_si10 = mysql_prep($_POST['pre_si10']);	
	$pre_si11 = mysql_prep($_POST['pre_si11']);
	$pre_si12 = mysql_prep($_POST['pre_si12']);
	$pre_si13 = mysql_prep($_POST['pre_si13']);	
	$pre_si14 = mysql_prep($_POST['pre_si14']);
	$pre_si15 = mysql_prep($_POST['pre_si15']);
	$pre_si16 = mysql_prep($_POST['pre_si16']);	
	$pre_si17 = mysql_prep($_POST['pre_si17']);
	$pre_si18 = mysql_prep($_POST['pre_si18']);	
	$pre_si19 = mysql_prep($_POST['pre_si19']);	
	$pre_si20 = mysql_prep($_POST['pre_si20']);
	$pre_si21 = mysql_prep($_POST['pre_si21']);
	$pre_si22 = mysql_prep($_POST['pre_si22']);
	
	$pre1 = mysql_prep($_POST['pre1']);
	$pre2 = mysql_prep($_POST['pre2']);	
	$pre3 = mysql_prep($_POST['pre3']);
	$pre4 = mysql_prep($_POST['pre4']);
	$pre5 = mysql_prep($_POST['pre5']);
	$pre6 = mysql_prep($_POST['pre6']);	
	$pre7 = mysql_prep($_POST['pre7']);
	$pre8 = mysql_prep($_POST['pre8']);	
	$pre9 = mysql_prep($_POST['pre9']);
	$pre10 = mysql_prep($_POST['pre10']);	
	$pre11 = mysql_prep($_POST['pre11']);
	$pre12 = mysql_prep($_POST['pre12']);	
	$pre13 = mysql_prep($_POST['pre13']);
	$pre14 = mysql_prep($_POST['pre14']);	
	$pre15 = mysql_prep($_POST['pre15']);
	
	$total = $pre1+$pre2+$pre3+$pre4+$pre5+$pre6+$pre7+$pre8+$pre9+$pre10+$pre11+$pre12+$pre13+$pre14+$pre15;
?>
<?php
   	$query = "INSERT INTO encuesta_si
	(sexo, edad, educacion, tiempo_inicio_uso, frecuencia_uso, red_social, tiempo_uso, dispositivo, uso_trabajo, uso1, uso2, uso3, uso4, uso5, uso6, uso7,uso8, uso9, uso10, uso11, uso12, uso13, uso14, uso15, uso16, uso17, uso18, uso19, uso20, uso21, uso22,total_satisfaccion) 
	VALUES 	('{$sexo_id}','{$edad_id}','{$educacion_id}','{$red2}','{$red3}','{$red4}','{$red5}','{$red6}','{$red7}','{$pre_si1}','{$pre_si2}','{$pre_si3}','{$pre_si4}','{$pre_si5}','{$pre_si6}','{$pre_si7}','{$pre_si8}','{$pre_si9}','{$pre_si10}','{$pre_si11}','{$pre_si12}','{$pre_si13}','{$pre_si14}','{$pre_si15}','{$pre_si16}','{$pre_si17}','{$pre_si18}','{$pre_si19}','{$pre_si20}','{$pre_si21}','{$pre_si22}',{$total})";
				// $menu_name es texto por lo tanto
			//corresponde poner comillas simples.
	$result = mysql_query($query, $db_conexion);
	if ($result) {
		// Exitos! Nos redirigimos a index.php
		redirigir_a("../index.php");
	} else {
		// Muestra mensaje de error.
		echo "<p>La creación del tema ha fallado.</p>";
		echo "<p>" . mysql_error() . "</p>";
	}
?>
<?php mysql_close($db_conexion); ?>