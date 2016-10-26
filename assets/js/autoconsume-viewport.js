var banner = $('.banner');
var section = $('.section');

var autoConsumeViewport = function(){
	var height = $(window).height();
	var width = $(window).width();
<<<<<<< HEAD
	var reducewidth = width * 0.0128;
	width = width - reducewidth;
=======
	var reducewidth = width * 0.01;
	/*width = width - reducewidth;*/
>>>>>>> dd73afb1cf52973166320c5d16ae8de23d236f15
	return [height, width]
}

$(window).load(function(){
	var consumeViewport = new autoConsumeViewport();
	banner.css({"height":consumeViewport[0]});
	banner.css({"width":consumeViewport[1]});
	section.css({"height":consumeViewport[0]});
	section.css({"width":consumeViewport[1]});
});

$(window).resize(function(){
	var consumeViewport = new autoConsumeViewport();
	banner.css({"height":consumeViewport[0]});
	banner.css({"width":consumeViewport[1]});
	section.css({"height":consumeViewport[0]});
	section.css({"width":consumeViewport[1]});
});