/**
 * Created by 洪海涛 on 2017/2/19.
 */
//我不知道整体框架的高度是需要获取到图片高度来设置的话，会不会影响性能。但是我先尝试下吧
$(function () {
	var $swipe=$('#swipe');
	var $img=$('.img');
	var $boxImg=$('.box-img');
	var $left=$('.left');
	var $right=$('.right');

	$right.click(function () {
		$boxImg.prepend($boxImg.children().eq(4));
	});
	$left.click(function () {
		$boxImg.append($boxImg.children().eq(0));
	});

	var right=function () {
		$boxImg.append($boxImg.children().eq(0));
	};

	var stop = setInterval(right,2000);
	$swipe.mousemove(function () {
		clearInterval(stop);
	}).mouseout(function () {
		stop = setInterval(right,1000);
	});
	setTimeout(function () {
		// $swipe.height($img.children('img').height());//
		$boxImg.width($img.children('img').width() * $boxImg.children().length);//
		$img.width($swipe.width());
		// $img.height($swipe.height());
	},1000);
})

