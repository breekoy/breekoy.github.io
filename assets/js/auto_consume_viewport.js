//breekoy2015

//js workaround to make #section1 div consume the whole viewport
var height = $(window).height();
var width = $(window).width();
var sec1 = $('#section1');
var sec2 = $('#section2');
sec1.css({"height":height});
sec2.css({"height":height});

//smooth-scroll when clicking the scroll button
$('#scrollIndicator').click(function(){
	$('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 2000);
});