$(function(){
	//图片滑动
	(function(){
		var i=0;
		var j=1;
		var timer=null;
		var time=null;
		var box=$('#webpic');
		var imgw=box.find('img').width();
		var len=box.find('img').size();
		box.css('width',len*imgw);
		timer=function junmper(){
			i++;
			if(i<3){
				j=i*-1000;
				$('#webpic').animate({left:j},1500);
			}
			else{
				$('#webpic').css('left','0px');
				$('#webpic').animate({left:'-1000px'},1500);
				i=1;
			}
		}
		autoplay();
		function autoplay(){
			time=setInterval(timer,2500);
		}
		box.hover(function(){
			clearInterval(time);
		},function(){
			autoplay();
		});
	})();
	//导航
	$('#title>ul>li').hover(function(){
		$(this).find('ul').slideDown();
	},function(){
		$(this).find('ul').slideUp();
	});
	//主题图片切换
	(function(){
		var ouli=$('.ul1').find('li');
		var oli=$('#imgul').find('li');
		var array=['教师论谈','优越课堂','教师讲堂','师院校门'];
		var now=0;
		var timer=null;
		var op=$('#imgp');
		oli.click(function(){
			now=$(this).index();
			fade();
		});
		autoPlay();
		function autoPlay(){
			timer=setInterval(function(){
				now++;
				now%=array.length;
				fade();
			},1500);
		};
		$('#picture').hover(function(){
			clearInterval(timer);
		},autoPlay);
		fade();
		function fade(){
			ouli.each(function(i){
				if(i!=now){
					ouli.eq(i).fadeOut(500).css('z-index',1);
					oli.eq(i).removeClass('active');
				}
				else{
					ouli.eq(i).fadeIn(500).css('z-index',1);
					oli.eq(i).addClass('active');
				}
				op.text(array[now]);
			});
		}
	})();
});