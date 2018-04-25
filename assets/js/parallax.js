$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('#me').css({
		'transform': 'translate(0px, '+ wScroll/3 +'px)'
	});

	$('#greetings').css({
		'transform': 'translate(0px, '+ wScroll/5 +'px)'
	});

	$('.social').css({
		'transform': 'translate(0px, '+ wScroll/4 +'px)'
	});
});