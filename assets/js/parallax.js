$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('#me').css({
		'transform': 'translate(0px, '+ wScroll/3 +'px)'
	});

	$('#greetings').css({
		'transform': 'translate(0px, '+ wScroll/4 +'px)'
	});

	$('#socials').css({
		'transform': 'translate(0px, '+ wScroll/5 +'px)'
	});

	$('#description').css({
		'transform': 'translate(0px, '+ wScroll/6 +'px)'
	});
});