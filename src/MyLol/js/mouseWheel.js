/**
 * Created by zhuliang on 2018/2/21.
 */
var scrollerLastValue = document.documentElement.scrollTop;
var step =30;
var timer=null;
var scrollerFlag = true;
var scrollDownHeigh = 945;

function mouseWheel(){
  /*IE注册事件*/
  if(document.attachEvent){
    document.attachEvent('onmousewheel',scrollFunc);
  }

  /*Firefox注册事件*/
  if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
  }
  window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
}
mouseWheel();




function scrollFunc(e){

  var scrollTop = document.documentElement.scrollTop;
  (e.deltaY<0 && scrollTop<880) &&  scrollTo0();
  (e.deltaY>0 && scrollTop<scrollDownHeigh) &&  scrollTo945();
  e.stopPropagation();
}

function disabledMouseWheel() {
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFuncT, false);
  }//W3C
  window.onmousewheel = document.onmousewheel = scrollFuncT;//IE/Opera/Chrome
}
function scrollFuncT(evt) {
  evt = evt || window.event;
  if (evt.preventDefault) {
    // Firefox
    evt.preventDefault();
    evt.stopPropagation();
  } else {
    // IE
    evt.cancelBubble = true;
    evt.returnValue = false;
  }
  return false;
}



function scrollTo945(){
  disabledMouseWheel();
  setTimeout(mouseWheel,500)
  document.getElementsByClassName('activity-nav')[0].style.position = 'fixed'
  setTimeout(function(){
    document.body.style.paddingTop = '142px';
  },40)
    var scrollTemp = document.documentElement.scrollTop;
    var scrollHeight = scrollDownHeigh - scrollTemp;
    var len = Math.floor(scrollHeight/step),i=1;
    var first_length = scrollHeight % step
    clearInterval(timer)
    timer = setInterval(function(){
      if(i>len) return;
      i==0 ?  window.scrollTo(0,first_length) : window.scrollTo(0,i*step+first_length);
      i === len && clearTimerDown()
      i++;
    },10)

}

function scrollTo0(){
  disabledMouseWheel();
  setTimeout(mouseWheel,500)
  setTimeout(function(){
    document.body.style.paddingTop = '0px';
  },80)
    var scrollTemp = document.documentElement.scrollTop;
    var scrollHeight = scrollTemp - 0;
    var len = Math.floor(scrollHeight/step),i=1;
    var last_langth =scrollHeight % step;
    clearInterval(timer)
    timer = setInterval(function(){
      if(i>len) return;
      i==0 ?  window.scrollTo(0,scrollTemp - last_langth) : window.scrollTo(0,scrollTemp -(i*step+last_langth));
      i === len && clearTimerUp()
      i++;
    },10)


}

function clearTimerDown(){
  clearInterval(timer);
  setTimeout(function(){
    /*console.log(document.documentElement.scrollTop)
    scrollerFlag = true;
    mouseWheel();*/
    scrollerLastValue = scrollDownHeigh;
  },10)
}


function clearTimerUp(){
  clearInterval(timer);
  setTimeout(function(){
    document.getElementsByClassName('activity-nav')[0].style.position = 'relative'
    scrollerLastValue = 0;
  },10)

}
