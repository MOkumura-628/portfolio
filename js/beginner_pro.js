$(function () {
	var targetPosition = $('#frontAndBack').offset().top;

	$(window).scroll(function () {
		var nowScroll = $(window).scrollTop();
		if (nowScroll > targetPosition) {
			$("#js-show-scroll").fadeIn();
		} else {
			$("#js-show-scroll").fadeOut();
		}
	});

	$('a[href^="#"]').click(function () {
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});
});
