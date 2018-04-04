/**
 * Created by zhuliang on 2018/2/21.
 */
var scrollerLastValue = getScrollTop();
var step =30;
var timer=null;
var scrollDownHeigh = 945;
var cacRun = false;

function mouseWheel(){
  EventUtil.removeHander(document,'mousewheel',scrollFuncT)
  EventUtil.addHader(document,'mousewheel',scrollFunc)
}
mouseWheel();



function scrollFunc(e){
  if(cacRun){
    return;
  }
  cacRun = true;
  setTimeout(function(){
    var scrollTop =  getScrollTop() ;
    console.log(scrollTop);
    (e.deltaY<0 && scrollTop<880) &&  scrollTo0();
    (e.deltaY>0 && scrollTop<scrollDownHeigh) &&  scrollTo945();
    cacRun = false;
  },1000/60)

}

function disabledMouseWheel() {
  EventUtil.removeHander(document,'mousewheel',scrollFunc);
  EventUtil.addHader(document,'mousewheel',scrollFuncT);
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
  setTimeout(mouseWheel,2000);
  document.getElementsByClassName('activity-nav')[0].style.position = 'fixed'

  setTimeout(function(){
    document.body.style.paddingTop = '142px';
  },50)
    var scrollTemp =  getScrollTop();
    var scrollHeight = scrollDownHeigh - scrollTemp;
    var len = Math.floor(scrollHeight/step),i=0;
    var first_length = scrollHeight % step
    function animate(){
      if(i>len) return;
      i==0 ?  window.scrollTo(0,first_length) : window.scrollTo(0,i*step+first_length);
      i++;
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

}

function scrollTo0(){
  disabledMouseWheel();
  setTimeout(mouseWheel,2000)
  document.body.style.paddingTop = '0px';
    var scrollTemp =  getScrollTop();
    var scrollHeight = scrollTemp - 0;
    var len = Math.floor(scrollHeight/step),i=0;
    var last_langth =scrollHeight % step;
    /*learInterval(timer)
    timer = setInterval(function(){
      if(i>len) return;
      i==0 ?  window.scrollTo(0,scrollTemp - last_langth) : window.scrollTo(0,scrollTemp -(i*step+last_langth));
      i === len && clearTimerUp()
      i++;
    },1000/60)*/
    function animate(){
      if(i>len) return;
      i==0 ?  window.scrollTo(0,scrollTemp - last_langth) : window.scrollTo(0,scrollTemp -(i*step+last_langth));
      i++;
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

}

function getScrollTop(){
  return document.documentElement.scrollTop || window.pageYOffset;
}

function clearTimerDown(){
  clearInterval(timer);
  setTimeout(function(){
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


window.requestAnimationFrame= (function () {
  return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame||
      function (callback) {
        setTimeout(callback,1000/60)
      }
})()

window.cancelAnimationFrame = (function(){
  return window.cancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      window.clearTimeout
})()
