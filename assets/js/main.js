$(function () {
	$('.item .up').click(function () {
		$('.up').hide();
		$('.down').show();
		$('.content-select').slideUp(3000);
	});
	$('.item .down').click(function () {
		$('.down').hide();
		$('.up').show();
		$('.content-select').slideDown(3000);
	});
});

