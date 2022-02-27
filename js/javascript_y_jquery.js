/*	//$('#preg_form2a').css({'display':'none'});
$(".validar_form").submit( function(){
	
	var formuA=false;
	var formuB=false;
	var formuC=false;
	var formuPP=false;
	var fo1=false;
	var fo2=false;
	var fo3=false;
	
var sexo = $("sexo_id option:selected").val();
var edad = $("edad_id option:selected").val();
var educacion = $("educacion_id option:selected").val();
var pregunta1 = $("red2 option:selected").val();
var pregunta2 = $("red3 option:selected").val();
var pregunta3 = $("red4 option:selected").val();
var pregunta4 = $("red5 option:selected").val();
var pregunta5 = $("red6 option:selected").val();
var pregunta6 = $("red7 option:selected").val();
var pregunta7 = $("red8 option:selected").val();

var rad1 = $("input[type='radio'][name='pre_si1']:checked").length;
var rad2 = $("input[type='radio'][name='pre_si2']:checked").length;    
var rad3 = $("input[type='radio'][name='pre_si3']:checked").length;    
var rad4 = $("input[type='radio'][name='pre_si4']:checked").length; 
var rad5 = $("input[type='radio'][name='pre_si5']:checked").length;
var rad6 = $("input[type='radio'][name='pre_si6']:checked").length;    
var rad7 = $("input[type='radio'][name='pre_si7']:checked").length;    
var rad8 = $("input[type='radio'][name='pre_si8']:checked").length;
var rad9 = $("input[type='radio'][name='pre_si9']:checked").length;
var rad10 = $("input[type='radio'][name='pre_si10']:checked").length;
var rad11 = $("input[type='radio'][name='pre_si11']:checked").length;   
var rad12 = $("input[type='radio'][name='pre_si12']:checked").length;    
var rad13 = $("input[type='radio'][name='pre_si13']:checked").length;   
var rad14 = $("input[type='radio'][name='pre_si14']:checked").length;
var rad15 = $("input[type='radio'][name='pre_si15']:checked").length;    
var rad16 = $("input[type='radio'][name='pre_si16']:checked").length;    
var rad17 = $("input[type='radio'][name='pre_si17']:checked").length;   
var rad18 = $("input[type='radio'][name='pre_si18']:checked").length;
var rad19 = $("input[type='radio'][name='pre_si19']:checked").length;    
var rad20 = $("input[type='radio'][name='pre_si20']:checked").length;    
var rad21 = $("input[type='radio'][name='pre_si21']:checked").length;  
	
var radio1 = $("input[type='radio'][name='pre1']:checked").length;
var radio2 = $("input[type='radio'][name='pre2']:checked").length;
var radio3 = $("input[type='radio'][name='pre3']:checked").length;
var radio4 = $("input[type='radio'][name='pre4']:checked").length;
var radio5 = $("input[type='radio'][name='pre5']:checked").length;
var radio6 = $("input[type='radio'][name='pre6']:checked").length;    	
var radio7 = $("input[type='radio'][name='pre7']:checked").length;    	
var radio8 = $("input[type='radio'][name='pre8']:checked").length; 
var radio9 = $("input[type='radio'][name='pre9']:checked").length;    	
var radio10 = $("input[type='radio'][name='pre10']:checked").length;    	
var radio11 = $("input[type='radio'][name='pre11']:checked").length;    	
var radio12 = $("input[type='radio'][name='pre12']:checked").length; 
var radio13 = $("input[type='radio'][name='pre13']:checked").length;    	
var radio14 = $("input[type='radio'][name='pre14']:checked").length;    	
var radio15 = $("input[type='radio'][name='pre15']:checked").length; 

if(sexo==""){ alert("sexo"); return false; 
}else if(edad==""){ alert("edad"); return false; 
}else if(educacion==""){ alert("educacion"); return false; 
}else if(pregunta1==""){ alert("pregunta1"); return false; 
}else if(pregunta2==""){ alert("pregunta2"); return false; 
}else if(pregunta3==""){ alert("pregunta3"); return false; 
}else if(pregunta4==""){ alert("pregunta4"); return false; 
}else if(pregunta5==""){ alert("pregunta5"); return false; 
}else if(pregunta6==""){ alert("pregunta6"); return false;
}else if(pregunta6=="si"){ alert('Continue el formulario parte A1'); formuA=true; fo1=true;    //formulario SIIIII------
}else if(pregunta6=="no"){ alert('Continue el formulario parte B'); formuPP=true; fo1=true;   //pregunta para formulario no ---------
}else if(formuPP==true){ 
if(pregunta7==""){ alert("pregunta7"); return false; 
}else if(pregunta7=="1"){ alert("Continue el formulario parte B1"); formuB=true;     //Formulario NOOOO SIIIIII----
}else if(pregunta7!="1"){ alert("continue con el formulario parte B2"); formuC=true;  //Formulario NOOOOOOOOO------------
}
}else if(formuA==true || formuC==true){

if(rad1==""){ alert("1"); return false; 
}else if(rad2==""){ alert("2"); return false; 
}else if(rad3==""){ alert("3"); return false; 
}else if(rad4==""){ alert("4"); return false; 
}else if(rad5==""){ alert("5"); return false; 
}else if(rad6==""){ alert("6"); return false; 
}else if(rad7==""){ alert("7"); return false; 
}else if(rad8==""){ alert("8"); return false; 
}else if(rad9==""){ alert("9"); return false; 
}else if(rad10==""){ alert("10"); return false; 
}else if(rad11==""){ alert("11"); return false; 
}else if(rad12==""){ alert("12"); return false; 
}else if(rad13==""){ alert("13"); return false; 
}else if(rad14==""){ alert("14"); return false;
}else if(rad15==""){ alert("15"); return false;
}else if(rad16==""){ alert("16"); return false; 
}else if(rad17==""){ alert("17"); return false;
}else if(rad18==""){ alert("18"); return false; 
}else if(rad19==""){ alert("19"); return false;
}else if(rad20==""){ alert("20"); return false; 
}else if(rad21==""){ alert("21"); return false; 
}else{ fo2=true; }
}else if(formuA==true || formuB==true || formuC==true){

if(radio1==""){ alert("1"); return false; 
}else if(radio2==""){ alert("2"); return false; 
}else if(radio3==""){ alert("3"); return false; 
}else if(radio4==""){ alert("4"); return false; 
}else if(radio5==""){ alert("5"); return false; 
}else if(radio6==""){ alert("6"); return false; 
}else if(radio7==""){ alert("7"); return false;
}else if(radio8==""){ alert("8"); return false; 
}else if(radio9==""){ alert("9"); return false; 
}else if(radio10==""){ alert("10"); return false;
}else if(radio11==""){ alert("11"); return false; 
}else if(radio12==""){ alert("12"); return false; 
}else if(radio13==""){ alert("13"); return false; 
}else if(radio14==""){ alert("14"); return false; 
}else if(radio15==""){ alert("15"); return false;
}else{ fo3=true; }
}

//

if(fo1==true && fo2==true && fo3==true){
 $('.errors').hide(); alert('Ok!'); return true; 
}



});
*/





function validar(){
   for(var i=0;i<=4;i++){
      if(document.getElementsByName("campo"+i)[0].value==""){
         alert("Por favor llene todos los campos.");
         return false;
      }
   }
}



function validarForm(formulario) {
if(formulario.sexo_id.value=='0') { //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false; //devolvemos el foco
}
if(formulario.edad_id.value=='0') { //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}
if(formulario.educacion_id.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}
if(formulario.red2.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}
if(formulario.red3.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}
if(formulario.red4.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}
if(formulario.red5.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}
if(formulario.red6.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}
if(formulario.red7.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}

}









if(f.sexo_id.value=='0') { //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false; //devolvemos el foco
}else 
if(f.edad_id.value=='0') { //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}else
if(f.educacion_id.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}else
if(f.red2.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}else
if(f.red3.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}else
if(f.red4.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}else
if(f.red5.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}else
if(f.red6.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}else
if(f.red7.value=='0') {  //comprueba que no esté vacío
    alert('Hay Preguntas sin responder'); 
    return false;
}



$('#cor').html( 'ancho '+e.pageX+  '</br>alto ' +e.pageY+  '</br>pos X ' +posicion.left+  '</br>pos Y ' +posicion.top+  '</br>med_ancho ' +med_ancho+ '</br>med_alto ' +med_alto );

 $('#cor').draggable( {
    containment: 'this',
    cursor: 'move',
    snap: 'this'
  } )






var mou_x;
var mou_y;
$(this).click( function() {
var van = e.pageX; 
var val = e.pageY; 

var div_cor = $('#cor');
if(key=='e'){
$('#cor').css({ 'left':van , 'top':val});
}
});