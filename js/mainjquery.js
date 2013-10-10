jQuery(document).ready(function(){

cajabu();
foto();


});
							
function cajabu(){
jQuery('#caja1').animate({
	'margin-left':'93%',}, 2000,'swing',cajaba)
}

function cajaba(){
jQuery('#caja1').animate({
	'margin-left':'0%',}, 2000,'swing',cajabu)
}

function foto() {


jQuery(".galeria li").click(function(e) {
fotico= e.target;

	miSrc= jQuery(fotico).attr('src');
	$(".modal-body img").attr('src', miSrc);

console.log("mi src es" + " " +miSrc);

});

}