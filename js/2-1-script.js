function insertar(num){
	var value = $('.display').val();
	$('.display').val(value + num);
}
function c(){
	$('.display').val('');
}
function del(){
	var value = $('.display').val();
	$('.display').val(value.substring(0,value.length-1));
}
function igual(){
	$('.display').val(eval($('.display').val()));
}