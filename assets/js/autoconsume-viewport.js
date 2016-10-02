var banner = $('.banner');
var section = $('.section');

var autoConsumeViewport = function(){
	var height = $(window).height();
	var width = $(window).width();
	var reducewidth = width * 0.01;
	/*width = width - reducewidth;*/
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