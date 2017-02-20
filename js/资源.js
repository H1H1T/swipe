$(function () {
	var $boxImg = $('.box-img');
	var $divImg = $boxImg.children('div');
	var $imgHeight = $divImg.eq(0).height();
	var $imgWidth = $divImg.eq(0).width();

	//统一设置图片高度为平时的一半
	$divImg.children('img').height($imgHeight / 2);

	/*设置第一张图片为平时高的一半*/
	$divImg.eq(0).children('img').height($imgHeight * 0.8);

	/*设置除第一张外，其他元素的z-index都是0*/
	function position() {
		$divImg.eq(0).siblings().css('z-index', '0').css('top', $imgHeight * 0.14);
		$divImg.eq(0).css('z-index', '3').css('left', $imgWidth * 0.3);
		$divImg.eq(1).css('left', $imgWidth * 0.9);
	}

	position();
	/*设置点击*/
	$('.left').click(function () {
		$boxImg.first().before($boxImg.children().last());
	});
	$('.right').click(function () {
		console.log('right');
	})
});