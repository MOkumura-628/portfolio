$(function(){
	$('#js-contactShow').click(function(){
		$('#js-modal').fadeIn('slow');
		$('#js-modal-contact').fadeIn('slow');
	});

	$('#js-modal-closeBtn').click(function(){
		$('#js-modal-contact').fadeOut('fast');
		$('#js-modal').fadeOut('fast');
	});

	$('#js-infoShow').click(function(){
		$('#js-modal').fadeIn('slow');
		$('#js-modal-info').fadeIn('slow');
	});

	$('#js-modal-closeInfoBtn').click(function(){
		$('#js-modal-info').fadeOut('fast');
		$('#js-modal').fadeOut('fast');
	});

	$('#js-aboutShow').click(function(){
		$('#js-modal').fadeIn('slow');
		$('#js-modal-about').fadeIn('slow');
	});

	$('#js-modal-closeAboutBtn').click(function(){
		$('#js-modal-about').fadeOut('fast');
		$('#js-modal').fadeOut('fast');
	});
});