function mostrarOcultar() { 

if (document.getElementById('red7').value=='si'){ 
    document.getElementById('preg_form2a').style.display='none';
	document.getElementById('formulario2').style.display='block';
	document.getElementById('formulario3').style.display='block'; 
	document.getElementById('titulo_formu_2').innerHTML ="Utilizo las redes sociales en el trabajo para…";
    document.forms["formulario"].action = "include/agregar_encuesta_si.php";
}
if (document.getElementById('red7').value=='no'){ 
    document.getElementById('preg_form2a').style.display='block'; 
	document.getElementById('formulario2').style.display='none';
	document.getElementById('formulario3').style.display='none'; 
	document.getElementById('titulo_formu_2').innerHTML ="Me gustaría poder utilizar las redes sociales en el trabajo para…";
		document.getElementById('red8').value='0';
}
if (document.getElementById('red7').value=='0'){ 
    document.getElementById('preg_form2a').style.display='block'; 
	document.getElementById('formulario2').style.display='block';
	document.getElementById('formulario3').style.display='block';
}
} 


function mostrarOcultar2() { 
if (document.getElementById('red8').value=='1' && document.getElementById('red7').value=='no'){
	document.getElementById('formulario2').style.display='block';
	document.getElementById('formulario3').style.display='block';
    document.forms["formulario"].action = "include/agregar_encuesta_nosi.php";
}else{
document.getElementById('formulario2').style.display='none';
document.getElementById('formulario3').style.display='block';
document.forms["formulario"].action = "include/agregar_encuesta_no.php";
if(document.getElementById('red8').value=='0'){
document.getElementById('formulario3').style.display='none';	
}
}
} 



function validar(f) {
	
if(f.sexo_id.value=='0') { 
	f.sexo_id.focus();
    alert('Respuesta necesaria: ¿Sexo?'); 
    return false;
}
if(f.edad_id.value=='0') { 
	f.edad_id.focus(); 
    alert('Respuesta necesaria: ¿Edad?');
    return false;
}
if(f.educacion_id.value=='0') {  
	f.educacion_id.focus();
    alert('Respuesta necesaria: ¿Educacion?'); 
    return false;
}
if(f.red2.value=='0') {  
	f.red2.focus();
    alert('Respuesta necesaria: ¿Hace cuanto utiliza redes sociales?'); 
    return false;
}
if(f.red3.value=='0') {  
	f.red3.focus();
    alert('Respuesta necesaria: ¿Con que frecuencia utiliza las redes sociales?'); 
    return false;
}
if(f.red4.value=='0') { 
	f.red4.focus();
    alert('Respuesta necesaria: ¿Que red social utiliza con mayor frecuencia?'); 
    return false;
}
if(f.red5.value=='0') {
	f.red5.focus(); 
    alert('Respuesta necesaria: ¿Cual es el tiempo empleado en el uso de las redes sociales?'); 
    return false;
}
if(f.red6.value=='0') { 
	f.red6.focus();
    alert('Respuesta necesaria: ¿?Que dispositivo utiliza para navegar en las redes sociales con mayor frecuencia?'); 
    return false;
}
if(f.red7.value=='0') { 
	f.red7.focus(); 
    alert('Respuesta necesaria: ¿Utiliza las redes sociales en el trabajo?'); 
    return false;
}

var noo=false;
var noo2=false;
var sii=false;
var nosi=false;

if(f.red7.value=='si'){ sii=true; noo==false;}  // HABILITA EL SIIIIIIIIIIIIIIIIIII --------------------------
if(f.red7.value=='no'){ noo=true; sii==false; }
if(noo==true && f.red8.value=='1'){ nosi=true; noo2=false;  }  //HABILITA LOS NOOOOOOOOOOSIIIIIIIIIIII-------------------
if(noo==true && f.red8.value!='1'){ noo2=true; nosi=false;  }   // HABILITA LOS NOOOOOOOOOOOOOOOO------------------------------


var si_f=false;

if(sii==true){
if((f.pre_si1[0].checked == false) && (f.pre_si1[1].checked == false) && (f.pre_si1[2].checked == false) && (f.pre_si1[3].checked == false)){
alert('Tienes una pregunta por responder 1'); return false; }else 
if((f.pre_si2[0].checked == false) && (f.pre_si2[1].checked == false) && (f.pre_si2[2].checked == false) && (f.pre_si2[3].checked == false)){
alert('Tienes una pregunta por responder 2'); return false; }else
if((f.pre_si3[0].checked == false) && (f.pre_si3[1].checked == false) && (f.pre_si3[2].checked == false) && (f.pre_si3[3].checked == false)){
alert('Tienes una pregunta por responder 3');  return false; }else
if((f.pre_si4[0].checked == false) && (f.pre_si4[1].checked == false) && (f.pre_si4[2].checked == false) && (f.pre_si4[3].checked == false)){
alert('Tienes una pregunta por responder4'); return false; }else
if((f.pre_si5[0].checked == false) && (f.pre_si5[1].checked == false) && (f.pre_si5[2].checked == false) && (f.pre_si5[3].checked == false)){
alert('Tienes una pregunta por responder5'); return false; }else
if((f.pre_si6[0].checked == false) && (f.pre_si6[1].checked == false) && (f.pre_si6[2].checked == false) && (f.pre_si6[3].checked == false)){
alert('Tienes una pregunta por responder6'); return false; }else
if((f.pre_si7[0].checked == false) && (f.pre_si7[1].checked == false) && (f.pre_si7[2].checked == false) && (f.pre_si7[3].checked == false)){
alert('Tienes una pregunta por responder7'); return false; }else 
if( (f.pre_si8[0].checked == false) && (f.pre_si8[1].checked == false) && (f.pre_si8[2].checked == false) && (f.pre_si8[3].checked == false)){
alert('Tienes una pregunta por responder8'); return false; }else
if((f.pre_si9[0].checked == false) &&	(f.pre_si9[1].checked == false) && (f.pre_si9[2].checked == false) && (f.pre_si9[3].checked == false)){
alert('Tienes una pregunta por responder9'); return false; }else
if((f.pre_si10[0].checked == false) &&	(f.pre_si10[1].checked == false) &&	(f.pre_si10[2].checked == false) && (f.pre_si10[3].checked == false)){
alert('Tienes una pregunta por responder10'); return false; }else
if((f.pre_si11[0].checked == false) && (f.pre_si11[1].checked == false) &&	(f.pre_si11[2].checked == false) &&(f.pre_si11[3].checked == false)){
alert('Tienes una pregunta por responder11');  return false; }else
if((f.pre_si12[0].checked == false) &&	(f.pre_si12[1].checked == false) &&	 (f.pre_si12[2].checked == false) &&(f.pre_si12[3].checked == false)){
alert('Tienes una pregunta por responder12'); return false; }else
if((f.pre_si13[0].checked == false) &&	(f.pre_si13[1].checked == false) &&	(f.pre_si13[2].checked == false) &&(f.pre_si13[3].checked == false)){
alert('Tienes una pregunta por responder13'); return false; }else
if((f.pre_si14[0].checked == false) &&	(f.pre_si14[1].checked == false) &&	(f.pre_si14[2].checked == false) && (f.pre_si14[3].checked == false)){
alert('Tienes una pregunta por responder14'); return false; }else
if((f.pre_si15[0].checked == false) &&	(f.pre_si15[1].checked == false) && (f.pre_si15[2].checked == false) &&(f.pre_si15[3].checked == false)){
alert('Tienes una pregunta por responder15'); return false; }else
if((f.pre_si16[0].checked == false) &&	(f.pre_si16[1].checked == false) &&	(f.pre_si16[2].checked == false) && (f.pre_si16[3].checked == false)){ alert('Tienes una pregunta por responder16'); return false; }else
if((f.pre_si17[0].checked == false) &&	(f.pre_si17[1].checked == false) &&	(f.pre_si17[2].checked == false) && (f.pre_si17[3].checked == false)){ alert('Tienes una pregunta por responder17'); return false; }else
if((f.pre_si18[0].checked == false) &&	(f.pre_si18[1].checked == false) && (f.pre_si18[2].checked == false) && (f.pre_si18[3].checked == false)){
alert('Tienes una pregunta por responder18'); return false; }else
if((f.pre_si19[0].checked == false) &&	(f.pre_si19[1].checked == false) &&	(f.pre_si19[2].checked == false) && (f.pre_si19[3].checked == false)){
alert('Tienes una pregunta por responder19'); return false; }else
if((f.pre_si20[0].checked == false) &&	(f.pre_si20[1].checked == false) && (f.pre_si20[2].checked == false) && (f.pre_si20[3].checked == false)){
alert('Tienes una pregunta por responder20'); return false; }else
if((f.pre_si21[0].checked == false) &&	(f.pre_si21[1].checked == false) &&	(f.pre_si21[2].checked == false) && (f.pre_si21[3].checked == false)){
alert('Tienes una pregunta por responder21'); return false; }else
if((f.pre_si22[0].checked == false) &&	(f.pre_si22[1].checked == false) &&	(f.pre_si22[2].checked == false) && (f.pre_si22[3].checked == false)){
alert('Tienes una pregunta por responder22'); return false;
}else{
si_f=true;   // ACA TERMINA EL FORMULARIO 2222222222222------------------
} 
}

if(si_f==true){
if((f.pre1[0].checked == false) && (f.pre1[1].checked == false) && (f.pre1[2].checked == false) && (f.pre1[3].checked == false) && (f.pre1[4].checked == false)&& (f.pre1[5].checked == false)&& (f.pre1[6].checked == false)){
alert('Tienes una pregunta por responder1'); return false; }else 
if((f.pre2[0].checked == false) && (f.pre2[1].checked == false) && (f.pre2[2].checked == false) && (f.pre2[3].checked == false)&& (f.pre2[4].checked == false)&& (f.pre2[5].checked == false)&& (f.pre2[6].checked == false)){
alert('Tienes una pregunta por responder2'); return false; }else
if((f.pre3[0].checked == false) && (f.pre3[1].checked == false) && (f.pre3[2].checked == false) && (f.pre3[3].checked == false)&& (f.pre3[4].checked == false)&& (f.pre3[5].checked == false)&& (f.pre3[6].checked == false)){
alert('Tienes una pregunta por responder3');  return false; }else
if((f.pre4[0].checked == false) && (f.pre4[1].checked == false) && (f.pre4[2].checked == false) && (f.pre4[3].checked == false)&& (f.pre4[4].checked == false)&& (f.pre4[5].checked == false)&& (f.pre4[6].checked == false)){
alert('Tienes una pregunta por responder4'); return false; }else
if((f.pre5[0].checked == false) && (f.pre5[1].checked == false) && (f.pre5[2].checked == false) && (f.pre5[3].checked == false)&& (f.pre5[4].checked == false)&& (f.pre5[5].checked == false)&& (f.pre5[6].checked == false)){
alert('Tienes una pregunta por responder5'); return false; }else
if((f.pre6[0].checked == false) && (f.pre6[1].checked == false) && (f.pre6[2].checked == false) && (f.pre6[3].checked == false)&& (f.pre6[4].checked == false)&& (f.pre6[5].checked == false)&& (f.pre6[6].checked == false)){
alert('Tienes una pregunta por responder6'); return false; }else
if((f.pre7[0].checked == false) && (f.pre7[1].checked == false) && (f.pre7[2].checked == false) && (f.pre7[3].checked == false)&& (f.pre7[4].checked == false)&& (f.pre7[5].checked == false)&& (f.pre7[6].checked == false)){
alert('Tienes una pregunta por responder7'); return false; }else 
if( (f.pre8[0].checked == false) && (f.pre8[1].checked == false) && (f.pre8[2].checked == false) && (f.pre8[3].checked == false)&& (f.pre8[4].checked == false)&& (f.pre8[5].checked == false)&& (f.pre8[6].checked == false)){
alert('Tienes una pregunta por responder8'); return false; }else
if((f.pre9[0].checked == false) && (f.pre9[1].checked == false) && (f.pre9[2].checked == false) && (f.pre9[3].checked == false)&& (f.pre9[4].checked == false)&& (f.pre9[5].checked == false)&& (f.pre9[6].checked == false)){
alert('Tienes una pregunta por responder9'); return false; }else
if((f.pre10[0].checked == false) &&	(f.pre10[1].checked == false) && (f.pre10[2].checked == false) && (f.pre10[3].checked == false)&& (f.pre10[4].checked == false)&& (f.pre10[5].checked == false)&& (f.pre10[6].checked == false)){
alert('Tienes una pregunta por responder10'); return false; }else
if((f.pre11[0].checked == false) && (f.pre11[1].checked == false) && (f.pre11[2].checked == false) &&(f.pre11[3].checked == false)&&(f.pre11[4].checked == false)&&(f.pre11[5].checked == false)&&(f.pre11[6].checked == false)){
alert('Tienes una pregunta por responder11');  return false; }else
if((f.pre12[0].checked == false) &&	(f.pre12[1].checked == false) && (f.pre12[2].checked == false) &&(f.pre12[3].checked == false)&&(f.pre12[4].checked == false)&&(f.pre12[5].checked == false)&&(f.pre12[6].checked == false)){
alert('Tienes una pregunta por responder12'); return false; }else
if((f.pre13[0].checked == false) &&	(f.pre13[1].checked == false) && (f.pre13[2].checked == false) &&(f.pre13[3].checked == false)&&(f.pre13[4].checked == false)&&(f.pre13[5].checked == false)&&(f.pre13[6].checked == false)){
alert('Tienes una pregunta por responder13'); return false; }else
if((f.pre14[0].checked == false) &&	(f.pre14[1].checked == false) && (f.pre14[2].checked == false) && (f.pre14[3].checked == false)&& (f.pre14[4].checked == false)&& (f.pre14[5].checked == false)&& (f.pre14[6].checked == false)){
alert('Tienes una pregunta por responder14'); return false; }else
if((f.pre15[0].checked == false) &&	(f.pre15[1].checked == false) && (f.pre15[2].checked == false) &&(f.pre15[3].checked == false)&&(f.pre15[4].checked == false)&&(f.pre15[5].checked == false)&&(f.pre15[6].checked == false)){
alert('Tienes una pregunta por responder15'); return false; }
else{
alert('Gracias por su tiempo');  // ACA TERMINA EL FORMULARIO  3333333333333333333333------------------
}
}



//---------------------------------------------------------------------- NOOOOOOOOSIIIIIIIIIIIIII-----------------------------------


var nosi_f=false;

if(nosi==true){
if((f.pre_si1[0].checked == false) && (f.pre_si1[1].checked == false) && (f.pre_si1[2].checked == false) && (f.pre_si1[3].checked == false)){
alert('Tienes una pregunta por responder1'); return false; }else 
if((f.pre_si2[0].checked == false) && (f.pre_si2[1].checked == false) && (f.pre_si2[2].checked == false) && (f.pre_si2[3].checked == false)){
alert('Tienes una pregunta por responder2'); return false; }else
if((f.pre_si3[0].checked == false) && (f.pre_si3[1].checked == false) && (f.pre_si3[2].checked == false) && (f.pre_si3[3].checked == false)){
alert('Tienes una pregunta por responder3');  return false; }else
if((f.pre_si4[0].checked == false) && (f.pre_si4[1].checked == false) && (f.pre_si4[2].checked == false) && (f.pre_si4[3].checked == false)){
alert('Tienes una pregunta por responder4'); return false; }else
if((f.pre_si5[0].checked == false) && (f.pre_si5[1].checked == false) && (f.pre_si5[2].checked == false) && (f.pre_si5[3].checked == false)){
alert('Tienes una pregunta por responder5'); return false; }else
if((f.pre_si6[0].checked == false) && (f.pre_si6[1].checked == false) && (f.pre_si6[2].checked == false) && (f.pre_si6[3].checked == false)){
alert('Tienes una pregunta por responder6'); return false; }else
if((f.pre_si7[0].checked == false) && (f.pre_si7[1].checked == false) && (f.pre_si7[2].checked == false) && (f.pre_si7[3].checked == false)){
alert('Tienes una pregunta por responder7'); return false; }else 
if( (f.pre_si8[0].checked == false) && (f.pre_si8[1].checked == false) && (f.pre_si8[2].checked == false) && (f.pre_si8[3].checked == false)){
alert('Tienes una pregunta por responder8'); return false; }else
if((f.pre_si9[0].checked == false) &&	(f.pre_si9[1].checked == false) && (f.pre_si9[2].checked == false) && (f.pre_si9[3].checked == false)){
alert('Tienes una pregunta por responder9'); return false; }else
if((f.pre_si10[0].checked == false) &&	(f.pre_si10[1].checked == false) &&	(f.pre_si10[2].checked == false) && (f.pre_si10[3].checked == false)){
alert('Tienes una pregunta por responder10'); return false; }else
if((f.pre_si11[0].checked == false) && (f.pre_si11[1].checked == false) &&	(f.pre_si11[2].checked == false) &&(f.pre_si11[3].checked == false)){
alert('Tienes una pregunta por responder11');  return false; }else
if((f.pre_si12[0].checked == false) &&	(f.pre_si12[1].checked == false) &&	 (f.pre_si12[2].checked == false) &&(f.pre_si12[3].checked == false)){
alert('Tienes una pregunta por responder12'); return false; }else
if((f.pre_si13[0].checked == false) &&	(f.pre_si13[1].checked == false) &&	(f.pre_si13[2].checked == false) &&(f.pre_si13[3].checked == false)){
alert('Tienes una pregunta por responder13'); return false; }else
if((f.pre_si14[0].checked == false) &&	(f.pre_si14[1].checked == false) &&	(f.pre_si14[2].checked == false) && (f.pre_si14[3].checked == false)){
alert('Tienes una pregunta por responder14'); return false; }else
if((f.pre_si15[0].checked == false) &&	(f.pre_si15[1].checked == false) && (f.pre_si15[2].checked == false) &&(f.pre_si15[3].checked == false)){
alert('Tienes una pregunta por responder15'); return false; }else
if((f.pre_si16[0].checked == false) &&	(f.pre_si16[1].checked == false) &&	 (f.pre_si16[2].checked == false) && (f.pre_si16[3].checked == false)){ alert('Tienes una pregunta por responder16'); return false; }else
if((f.pre_si17[0].checked == false) &&	(f.pre_si17[1].checked == false) &&	 (f.pre_si17[2].checked == false) && (f.pre_si17[3].checked == false)){ alert('Tienes una pregunta por responder17'); return false; }else
if((f.pre_si18[0].checked == false) &&	(f.pre_si18[1].checked == false) && (f.pre_si18[2].checked == false) && (f.pre_si18[3].checked == false)){
alert('Tienes una pregunta por responder18'); return false; }else
if((f.pre_si19[0].checked == false) &&	(f.pre_si19[1].checked == false) &&	(f.pre_si19[2].checked == false) && (f.pre_si19[3].checked == false)){
alert('Tienes una pregunta por responder19'); return false; }else
if((f.pre_si20[0].checked == false) &&	(f.pre_si20[1].checked == false) && (f.pre_si20[2].checked == false) && (f.pre_si20[3].checked == false)){
alert('Tienes una pregunta por responder20'); return false; }else
if((f.pre_si21[0].checked == false) &&	(f.pre_si21[1].checked == false) &&	(f.pre_si21[2].checked == false) && (f.pre_si21[3].checked == false)){
alert('Tienes una pregunta por responder21'); return false; }else
if((f.pre_si22[0].checked == false) &&	(f.pre_si22[1].checked == false) &&	(f.pre_si22[2].checked == false) && (f.pre_si22[3].checked == false)){
alert('Tienes una pregunta por responder22'); return false;
}else{
nosi_f=true;   // ACA TERMINA EL FORMULARIO 2222222222222------------------
} 
}

if(nosi_f==true){
if((f.pre1[0].checked == false) && (f.pre1[1].checked == false) && (f.pre1[2].checked == false) && (f.pre1[3].checked == false) && (f.pre1[4].checked == false)&& (f.pre1[5].checked == false)&& (f.pre1[6].checked == false)){
alert('Tienes una pregunta por responder1'); return false; }else 
if((f.pre2[0].checked == false) && (f.pre2[1].checked == false) && (f.pre2[2].checked == false) && (f.pre2[3].checked == false)&& (f.pre2[4].checked == false)&& (f.pre2[5].checked == false)&& (f.pre2[6].checked == false)){
alert('Tienes una pregunta por responder2'); return false; }else
if((f.pre3[0].checked == false) && (f.pre3[1].checked == false) && (f.pre3[2].checked == false) && (f.pre3[3].checked == false)&& (f.pre3[4].checked == false)&& (f.pre3[5].checked == false)&& (f.pre3[6].checked == false)){
alert('Tienes una pregunta por responder3');  return false; }else
if((f.pre4[0].checked == false) && (f.pre4[1].checked == false) && (f.pre4[2].checked == false) && (f.pre4[3].checked == false)&& (f.pre4[4].checked == false)&& (f.pre4[5].checked == false)&& (f.pre4[6].checked == false)){
alert('Tienes una pregunta por responder4'); return false; }else
if((f.pre5[0].checked == false) && (f.pre5[1].checked == false) && (f.pre5[2].checked == false) && (f.pre5[3].checked == false)&& (f.pre5[4].checked == false)&& (f.pre5[5].checked == false)&& (f.pre5[6].checked == false)){
alert('Tienes una pregunta por responder5'); return false; }else
if((f.pre6[0].checked == false) && (f.pre6[1].checked == false) && (f.pre6[2].checked == false) && (f.pre6[3].checked == false)&& (f.pre6[4].checked == false)&& (f.pre6[5].checked == false)&& (f.pre6[6].checked == false)){
alert('Tienes una pregunta por responder6'); return false; }else
if((f.pre7[0].checked == false) && (f.pre7[1].checked == false) && (f.pre7[2].checked == false) && (f.pre7[3].checked == false)&& (f.pre7[4].checked == false)&& (f.pre7[5].checked == false)&& (f.pre7[6].checked == false)){
alert('Tienes una pregunta por responder7'); return false; }else 
if( (f.pre8[0].checked == false) && (f.pre8[1].checked == false) && (f.pre8[2].checked == false) && (f.pre8[3].checked == false)&& (f.pre8[4].checked == false)&& (f.pre8[5].checked == false)&& (f.pre8[6].checked == false)){
alert('Tienes una pregunta por responder8'); return false; }else
if((f.pre9[0].checked == false) && (f.pre9[1].checked == false) && (f.pre9[2].checked == false) && (f.pre9[3].checked == false)&& (f.pre9[4].checked == false)&& (f.pre9[5].checked == false)&& (f.pre9[6].checked == false)){
alert('Tienes una pregunta por responder9'); return false; }else
if((f.pre10[0].checked == false) &&	(f.pre10[1].checked == false) && (f.pre10[2].checked == false) && (f.pre10[3].checked == false)&& (f.pre10[4].checked == false)&& (f.pre10[5].checked == false)&& (f.pre10[6].checked == false)){
alert('Tienes una pregunta por responder10'); return false; }else
if((f.pre11[0].checked == false) && (f.pre11[1].checked == false) && (f.pre11[2].checked == false) &&(f.pre11[3].checked == false)&&(f.pre11[4].checked == false)&&(f.pre11[5].checked == false)&&(f.pre11[6].checked == false)){
alert('Tienes una pregunta por responder11');  return false; }else
if((f.pre12[0].checked == false) &&	(f.pre12[1].checked == false) && (f.pre12[2].checked == false) &&(f.pre12[3].checked == false)&&(f.pre12[4].checked == false)&&(f.pre12[5].checked == false)&&(f.pre12[6].checked == false)){
alert('Tienes una pregunta por responder12'); return false; }else
if((f.pre13[0].checked == false) &&	(f.pre13[1].checked == false) && (f.pre13[2].checked == false) &&(f.pre13[3].checked == false)&&(f.pre13[4].checked == false)&&(f.pre13[5].checked == false)&&(f.pre13[6].checked == false)){
alert('Tienes una pregunta por responder13'); return false; }else
if((f.pre14[0].checked == false) &&	(f.pre14[1].checked == false) && (f.pre14[2].checked == false) && (f.pre14[3].checked == false)&& (f.pre14[4].checked == false)&& (f.pre14[5].checked == false)&& (f.pre14[6].checked == false)){
alert('Tienes una pregunta por responder14'); return false; }else
if((f.pre15[0].checked == false) &&	(f.pre15[1].checked == false) && (f.pre15[2].checked == false) &&(f.pre15[3].checked == false)&&(f.pre15[4].checked == false)&&(f.pre15[5].checked == false)&&(f.pre15[6].checked == false)){
alert('Tienes una pregunta por responder15'); return false; }
else{
alert('Gracias por su tiempo');  // ACA TERMINA EL FORMULARIO  3333333333333333333333------------------
}

}
// ------------------------------ NOOOOOOOOOOOOOOOOOOO -----------------------------

if(noo2==true){
if((f.pre1[0].checked == false) && (f.pre1[1].checked == false) && (f.pre1[2].checked == false) && (f.pre1[3].checked == false) && (f.pre1[4].checked == false)&& (f.pre1[5].checked == false)&& (f.pre1[6].checked == false)){
alert('Tienes una pregunta por responder1'); return false; }else 
if((f.pre2[0].checked == false) && (f.pre2[1].checked == false) && (f.pre2[2].checked == false) && (f.pre2[3].checked == false)&& (f.pre2[4].checked == false)&& (f.pre2[5].checked == false)&& (f.pre2[6].checked == false)){
alert('Tienes una pregunta por responder2'); return false; }else
if((f.pre3[0].checked == false) && (f.pre3[1].checked == false) && (f.pre3[2].checked == false) && (f.pre3[3].checked == false)&& (f.pre3[4].checked == false)&& (f.pre3[5].checked == false)&& (f.pre3[6].checked == false)){
alert('Tienes una pregunta por responder3');  return false; }else
if((f.pre4[0].checked == false) && (f.pre4[1].checked == false) && (f.pre4[2].checked == false) && (f.pre4[3].checked == false)&& (f.pre4[4].checked == false)&& (f.pre4[5].checked == false)&& (f.pre4[6].checked == false)){
alert('Tienes una pregunta por responder4'); return false; }else
if((f.pre5[0].checked == false) && (f.pre5[1].checked == false) && (f.pre5[2].checked == false) && (f.pre5[3].checked == false)&& (f.pre5[4].checked == false)&& (f.pre5[5].checked == false)&& (f.pre5[6].checked == false)){
alert('Tienes una pregunta por responder5'); return false; }else
if((f.pre6[0].checked == false) && (f.pre6[1].checked == false) && (f.pre6[2].checked == false) && (f.pre6[3].checked == false)&& (f.pre6[4].checked == false)&& (f.pre6[5].checked == false)&& (f.pre6[6].checked == false)){
alert('Tienes una pregunta por responder6'); return false; }else
if((f.pre7[0].checked == false) && (f.pre7[1].checked == false) && (f.pre7[2].checked == false) && (f.pre7[3].checked == false)&& (f.pre7[4].checked == false)&& (f.pre7[5].checked == false)&& (f.pre7[6].checked == false)){
alert('Tienes una pregunta por responder7'); return false; }else 
if( (f.pre8[0].checked == false) && (f.pre8[1].checked == false) && (f.pre8[2].checked == false) && (f.pre8[3].checked == false)&& (f.pre8[4].checked == false)&& (f.pre8[5].checked == false)&& (f.pre8[6].checked == false)){
alert('Tienes una pregunta por responder8'); return false; }else
if((f.pre9[0].checked == false) && (f.pre9[1].checked == false) && (f.pre9[2].checked == false) && (f.pre9[3].checked == false)&& (f.pre9[4].checked == false)&& (f.pre9[5].checked == false)&& (f.pre9[6].checked == false)){
alert('Tienes una pregunta por responder9'); return false; }else
if((f.pre10[0].checked == false) &&	(f.pre10[1].checked == false) && (f.pre10[2].checked == false) && (f.pre10[3].checked == false)&& (f.pre10[4].checked == false)&& (f.pre10[5].checked == false)&& (f.pre10[6].checked == false)){
alert('Tienes una pregunta por responder10'); return false; }else
if((f.pre11[0].checked == false) && (f.pre11[1].checked == false) && (f.pre11[2].checked == false) &&(f.pre11[3].checked == false)&&(f.pre11[4].checked == false)&&(f.pre11[5].checked == false)&&(f.pre11[6].checked == false)){
alert('Tienes una pregunta por responder11');  return false; }else
if((f.pre12[0].checked == false) &&	(f.pre12[1].checked == false) && (f.pre12[2].checked == false) &&(f.pre12[3].checked == false)&&(f.pre12[4].checked == false)&&(f.pre12[5].checked == false)&&(f.pre12[6].checked == false)){
alert('Tienes una pregunta por responder12'); return false; }else
if((f.pre13[0].checked == false) &&	(f.pre13[1].checked == false) && (f.pre13[2].checked == false) &&(f.pre13[3].checked == false)&&(f.pre13[4].checked == false)&&(f.pre13[5].checked == false)&&(f.pre13[6].checked == false)){
alert('Tienes una pregunta por responder13'); return false; }else
if((f.pre14[0].checked == false) &&	(f.pre14[1].checked == false) && (f.pre14[2].checked == false) && (f.pre14[3].checked == false)&& (f.pre14[4].checked == false)&& (f.pre14[5].checked == false)&& (f.pre14[6].checked == false)){
alert('Tienes una pregunta por responder14'); return false; }else
if((f.pre15[0].checked == false) &&	(f.pre15[1].checked == false) && (f.pre15[2].checked == false) &&(f.pre15[3].checked == false)&&(f.pre15[4].checked == false)&&(f.pre15[5].checked == false)&&(f.pre15[6].checked == false)){
alert('Tienes una pregunta por responder15'); return false; }
else{
alert('Gracias por su tiempo');  // ACA TERMINA EL FORMULARIO  3333333333333333333333------------------
}
}


}  // -------------------------------------------------------------final de validacion


function vali_color(obj){
   if(obj.value == "0"){
        obj.style.color = "#FFF";    
        obj.style.backgroundColor = "#F00";
		//obj.style.border = "1px #F00 solid";
   }else{
        //esta todo bien => vuelvo a la normalidad los colores
         obj.style.color = "#000";   
        obj.style.backgroundColor = "#FFF";
   }
}


//var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox/') > -1; if(is_firefox ){ }



















