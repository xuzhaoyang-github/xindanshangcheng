var $divs=$("#accordion .accordion .hot_comment .hot_comment");$divs.on("mouseover",function(){$(this).css({width:"677px"}),$(this).siblings().css({width:"176px"})}),$divs.eq(0).on("mouseover",function(){$divs.eq(1).css({left:"675px"}),$divs.eq(2).css({left:"851px"}),$divs.eq(3).css({left:"1026px"})}),$divs.eq(1).on("mouseover",function(){$(this).css({left:"175px"}),$divs.eq(0).css({left:"0"}),$divs.eq(2).css({left:"851px"}),$divs.eq(3).css({left:"1026px"})}),$divs.eq(2).on("mouseover",function(){$(this).css({left:"350px"}),$divs.eq(0).css({left:"0"}),$divs.eq(1).css({left:"175px"}),$divs.eq(3).css({left:"1026px"})}),$divs.eq(3).on("mouseover",function(){$(this).css({left:"525px"}),$divs.eq(0).css({left:"0"}),$divs.eq(1).css({left:"175px"}),$divs.eq(2).css({left:"350px"})});var backTop=document.getElementById("back-top");function ceilingX(){window.onscroll=function(){var e=document.querySelector(".ceiling");120<=document.documentElement.scrollTop?(e.style.position="fixed",e.style.top=0,e.style.display="block"):e.style.display="none"}}window.onscroll=function(){var e=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;backTop.style.display=500<e?"block":"none"},backTop.onclick=function(){id=setInterval(function(){var e=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;0===e&&clearInterval(id),document.documentElement.scrollTop=e-50,document.body.scrollTop=e-50},16)},window.onmousewheel=function(){clearInterval(id)},ceilingX();var d=new Date,year=d.getFullYear(),month=d.getMonth(),date1=+new Date(year,month+1,0),cc=date1+"",dd=cc.slice(0,-3),dat=+new Date,aa=dat+"",bb=aa.slice(0,-3),count=dd-bb,a=setInterval(function(){var e=parseInt(count/3600),o=parseInt(count/60),t=count;24<e?e%=24:24==e&&(e=0),60<o?o%=60:(o=60)&&(o=0),60<t?t%=60:60==t&&(t=0),e<10&&(e="0"+e),o<10&&(o="0"+o),t<10&&(t="0"+t),document.querySelector(".hour").innerHTML=e,document.querySelector(".minute").innerHTML=o,document.querySelector(".second").innerHTML=t,--count<=0&&clearInterval(a)},1e3),hor_currentIndex=0;function hor_slideTo(e){var o,t=document.querySelector(".hor_list li").offsetWidth,n=document.querySelector(".hor_list");if(5===e)return n.style.transitionDuration="0s",n.style.left=0,hor_currentIndex=1,setTimeout(function(){n.style.transitionDuration="",n.style.left=-t+"px"},50),document.querySelector(".hor_focus").className="",void(document.querySelectorAll(".hor_pagination li")[1].className="hor_focus");if(-1===e)return n.style.transitionDuration="0s",n.style.left=-4*t+"px",hor_currentIndex=3,setTimeout(function(){n.style.transitionDuration="",n.style.left=-3*t+"px"},50),document.querySelector(".hor_focus").className="",void(document.querySelectorAll(".hor_pagination li")[3].className="hor_focus");var r=-e*t;document.querySelector(".hor_list").style.left=r+"px",o=hor_currentIndex<4?e:0,document.querySelector(".hor_focus").className="",document.querySelectorAll(".hor_pagination li")[o].className="hor_focus"}function hor_slideNext(){hor_slideTo(++hor_currentIndex)}function hor_slidePrev(){hor_slideTo(--hor_currentIndex)}var hor_prev=document.querySelector("#wrap .wraper .horizontal_slider .hor_prev"),hor_next=document.querySelector("#wrap .wraper .horizontal_slider .hor_next");function hor_autoplay(){hor_id=setInterval(function(){hor_slideNext()},2e3)}function hor_stop(){clearInterval(hor_id)}hor_prev.onclick=function(){hor_slidePrev()},hor_next.onclick=function(){hor_slideNext()},hor_autoplay();for(var lis=document.querySelectorAll(".hor_pagination li"),i=0;i<lis.length;i++)lis[i].setAttribute("index",i),lis[i].onmouseenter=function(){var e=parseInt(this.getAttribute("index"));hor_slideTo(hor_currentIndex=e)};document.querySelector("#wrap .wraper .horizontal_slider").onmouseover=function(){hor_stop()},document.querySelector("#wrap .wraper .horizontal_slider").onmouseout=function(){hor_autoplay()};var currentIndex=0;function slideTo(e){4===e&&(currentIndex=e=0),-1===e&&(currentIndex=e=3),document.querySelector(".current").className="",document.querySelectorAll(".list li")[e].className="current",document.querySelector(".focus").className="",document.querySelectorAll(".pagination li")[e].className="focus"}function slideNext(){slideTo(++currentIndex)}function slidePrev(){slideTo(--currentIndex)}function autoplay(){id=setInterval(function(){slideNext()},3e3)}function stop(){clearInterval(id)}var prev=document.querySelector("#wrap .wraper .opacity_slider .prev"),next=document.querySelector("#wrap .wraper .opacity_slider .next");prev.onclick=function(){slidePrev()},next.onclick=function(){slideNext()};var id,bullets=document.querySelectorAll("#wrap .wraper .pagination li");for(i=0;i<bullets.length;i++)bullets[i].setAttribute("index",i),bullets[i].onmouseenter=function(){var e=parseInt(this.getAttribute("index"));slideTo(currentIndex=e)};autoplay(),document.querySelector("#wrap .wraper .opacity_slider").onmouseover=function(){stop()},document.querySelector("#wrap .wraper .opacity_slider").onmouseout=function(){autoplay()};