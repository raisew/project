// JavaScript Document

$(function(){
	var thisBox = $('.sus');
	var defaultTop = thisBox.offset().top;
	// 页面滚动的同时，悬浮框也跟着滚动
	$(window).on('scroll',function(){scro();});
	$(window).onload = scro();
	function scro(){
		var offsetTop = defaultTop + $(window).scrollTop()+'px';
		thisBox.animate({top:offsetTop},
		{	duration: 600,	//滑动速度
	     	queue: false    //此动画将不进入动画队列
	     });
	}
	$(".tel").each(function(){
		$(this).hover(function(){
			$(this).find(".tel-show").show().stop().animate({right:"43px"},500);
		},function(){
			$(this).find(".tel-show").hide().stop().animate({right:"-200px"},500);
		});	
	});
});
