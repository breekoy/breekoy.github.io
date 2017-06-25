//js workaround to make the section consume the whole viewport
function consumeWholeViewport(){
	var height = $(window).height();
	var width = $(window).width();
	var sec1 = $('#heroSection');
	var sec2 = $('.sections');
	sec1.css({"height":height});
	sec2.css({"height":height});
}

$(window).on('load', function(){
	consumeWholeViewport();
});

$(window).on('resize', function(){
	consumeWholeViewport();
});