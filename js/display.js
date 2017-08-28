	window.onload=function(){
			/*var oimg=document.getElementById("img");
			var opic=document.getElementById('picture');
			var oimgul=document.getElementById("imgul");
			var oimgp=document.getElementById("imgp");
			var arrli=oimgul.getElementsByTagName('li');
			var arrimg=['../pic/img6.jpg','../pic/img2.jpg','../pic/img3.jpg','../pic/img4.jpg','../pic/img5.jpg','../pic/img6.jpg'];
			var arrname=['教师论谈','优越课堂','教师讲堂','师院校门','教授讲解','夜景'];
			var num=0;
			var timer=null;
			for(i=1;i<arrimg.length+1;i++){
				oimgul.innerHTML+='<li>'+i+'</li>';
			}
			fun2();
			function fun2(){
				arrli[num].style.background='red';
				clearInterval(timer);
				timer=setInterval(function(){
					num++;
					if(num==arrli.length){
					arrli[arrli.length-1].style.background='yellow';
					}
					num%=arrimg.length;
					fun1();
				},1500);
				}
				opic.onmouseover=function(){
				clearInterval(timer);
				}
				opic.onmouseout=function(){
				fun2();
				}
			function fun1(){
				oimg.src=arrimg[num];
				oimgp.innerHTML=arrname[num];
				arrli[num].style.background='red';
				arrli[num-1].style.background='yellow';
				}*/
			var otime=document.getElementById("time");
			time();
			setInterval(time,1000);
			function time(){
				var myTime=new Date();
				var year=myTime.getFullYear();
				var month=myTime.getMonth()+1;
				var date=myTime.getDate();
				var week=myTime.getDay();
				var hour=myTime.getHours();
				var minute=myTime.getMinutes();
				var second=myTime.getSeconds();
				var str="";
				if (week===0) week='星期日';
				if (week===1) week='星期一';
				if (week===2) week='星期二';
				if (week===3) week='星期三';
				if (week===4) week='星期四';
				if (week===5) week='星期五';
				if (week===6) week='星期六';
				str=year+'年'+month+'月'+date+'日'+week+' '+hour+':'+tWOTO(minute)+':'+tWOTO(second);
				otime.innerHTML=str;
				}
				function tWOTO(n){
					return n<10?'0'+n:''+n;
					}
};
