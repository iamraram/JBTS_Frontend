jQuery(document).ready(function() {
	$('.navi > li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(300)
	}).mouseout(function() {
		$(this).find('.submenu').stop().slideUp(300)
	})

	$('.imgslide a:gt(0)').hide();
	setInterval(function() {
		$('.imgslide a:first-child').fadeOut()
		.next('a').fadeIn()
		.end().appendTo('.imgslide');
	}, 3000)

	$(function() {
		$('.tabmenu > li > a').click(function() {
			$(this).parent().addClass("active").siblings().removeClass("active")
			return false
		})
	})

	$(".notice li:first-child").click(function() {
		$("#modal").addClass("active");
	})
	$(".btn").click(function() {
		$("#modal").removeClass("active")
	})
})