var anch;
var alt;
var b_ayu=false;
$(document).ready(function() {


$('#bot_ayudd').click( function() {
	
	if(b_ayu==false) {	
	$('#ayudd').show(500).css({ 'display':'block','top':'10px','left':anch});
	$('#bot_ayudd').html('&uarr;');
	b_ayu=true;
	
	}else if(b_ayu==true){
	$('#ayudd').hide(500).css({ 'widht':'0px'});
	$('#bot_ayudd').html('+ Info');
	b_ayu=false;
	}
});

    
}); // funcion Ready ------------------------------------------------


$(document).mousemove(function(e){
var ventana_ancho = $(window).width();
var ventana_alto = $(window).height();
var med_an=ventana_ancho/2;
var med_alto=ventana_alto/2;
var med_ancho=med_an-450;
anch=med_ancho;

$('#ayudd').css({ 'left':anch});	
var elemento = $("#ayudd");
var posicion = elemento.position();
	
;



});  // funcion mousemove -------------------------------------------------------








	