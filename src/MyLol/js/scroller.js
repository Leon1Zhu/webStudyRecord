/**
 * Created by zhuliang on 2018/2/21.
 */
var scrollerLastValue = document.documentElement.scrollTop;
var step =20;
window.onscroll = function(){
  var scrollTemp = document.documentElement.scrollTop;
  //判断为向下滚动

  if(scrollTemp <880 ){
    scrollTemp > scrollerLastValue ?   scrollTo945() : scrollTo0()
  }
}


function scrollTo945(){
  var scrollTemp = document.documentElement.scrollTop;
  var scrollHeight = 945 - scrollTemp;
  var len = Math.floor(scrollHeight/step),i=0,timer=null;
  timer = setInterval(function(){
    i==0 ?  window.scrollTo(0,scrollHeight % step) : window.scrollTo(0,(i+1)*len);
    i++;
  },30)
  scrollerLastValue = 945;

}


function scrollTo0(){
  window.scrollTo(0,0)
  scrollerLastValue = 0;
}

