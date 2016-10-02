$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('#profile-img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('#header-text').css({
		'transform':'translate(0px, '+ wScroll/2 +'%)'
	});

	$('#description-text').css({
		'transform':'translate(0px, '+ wScroll*1.5 +'%)'
	});

	$('#social-media-icons').css({
		'transform': 'translate(0px, '+ wScroll * 1.2 +'%)'
	});

});