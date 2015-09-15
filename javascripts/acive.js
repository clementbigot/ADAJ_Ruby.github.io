$(function() {

	//highlight the current nav
	$("#photo a:contains('GALERIE')").parent().addClass('active');
	$("#principal a:contains('ACCUEIL')").parent().addClass('active');
	$("#renseignements a:contains('CONTACT')").parent().addClass('active');
    $("#cours a:contains('PLANNING')").parent().addClass('active');
    $("#prix a:contains('TARIFS')").parent().addClass('active');

	//if($("#photo a:contains('GALERIE')").parent().hasClass('active')){
	//$(".dropdown a:contains('NOUS SUIVRE')").parent().addClass('active');
	//}
	
	//if($("#photo a:contains('GALERIE')").parent().hasClass('active')){
	//$(".dropdown a:contains('NOUS SUIVRE')").parent().addClass('active');
	//}

	//make menus drop automatically
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//hover
	
}); //jQuery is loaded
;
