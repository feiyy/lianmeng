// JavaScript Document
//nav
$(function(){
	$(".dh li").hover(function(){
		$(this).addClass("active");
		$(this).find("p").stop(true,true).slideDown(400);
		$(this).find("p").show();
	},function(){
		$(this).removeClass("active");
		$(this).find("p").stop(true,true).slideUp(400);
		$(this).find("p").hide();
	});
})
