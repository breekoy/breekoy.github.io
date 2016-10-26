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

<<<<<<< HEAD
=======
	$('#social-media-icons').css({
		'transform': 'translate(0px, '+ wScroll * 1.2 +'%)'
	});

>>>>>>> dd73afb1cf52973166320c5d16ae8de23d236f15
});