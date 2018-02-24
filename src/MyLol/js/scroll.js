/**
 * Created by zhuliang on 2018/2/22.
 */
var scrollTemp = null;
window.onscroll = function(){
  scrollTemp = document.documentElement.scrollTop;
    RedPackagePage();
    gorgeWar();
    welfare();
    newsTimeLimit();
    asYouPlay();

 }

function RedPackagePage(){
   var redPagePack = document.getElementsByClassName('red-package-page')[0];
  var bg1 = document.getElementsByClassName('red-package-bg1')[0];
  var bg2 = document.getElementsByClassName('red-package-bg2')[0];
  var bg3 = document.getElementsByClassName('red-package-bgs')[0];
   if(scrollTemp >= 880 && scrollTemp <= 1749){
     if(addActive(redPagePack)){
       setTimeout(function(){
         (bg1.className.indexOf(' to-right') >0)|| (bg1.className = bg1.className+ ' to-right');
         (bg2.className.indexOf(' to-left') >0)|| (bg2.className = bg2.className+ ' to-left');
         (bg3.className.indexOf(' to-left') >0)|| (bg3.className = bg3.className+ ' to-left');
       },0)
     }
   }

  if(scrollTemp <= 880 || scrollTemp > 1920){
    if(removeActive(redPagePack)){
      (bg1.className.indexOf(' to-right') >0) && (bg1.className = bg1.className.replace(' to-right',''));
      (bg2.className.indexOf(' to-left') >0)&& (bg2.className = bg2.className.replace(' to-left',''));
      (bg3.className.indexOf(' to-left') >0)&& (bg3.className = bg3.className.replace(' to-left',''));
    }
   }
}

function gorgeWar(){
  var gorgeWar = document.getElementsByClassName('gorge-war')[0];
  var bg1 = document.getElementsByClassName('war-bg1')[0];
  var bg2 = document.getElementsByClassName('war-bg2')[0];
  var bg3 = document.getElementsByClassName('war-bgs')[0];
  if(scrollTemp >= 1278 && scrollTemp <= 2900){
    if(addActive(gorgeWar)){
        (bg1.className.indexOf(' to-right') >0)|| (bg1.className = bg1.className+ ' to-right');
        (bg2.className.indexOf(' to-left') >0)|| (bg2.className = bg2.className+ ' to-left');
        (bg3.className.indexOf(' to-left') >0)|| (bg3.className = bg3.className+ ' to-left');
    }
  }
  if(scrollTemp <= 1176 || scrollTemp > 2900){
    if(removeActive(gorgeWar)){
      (bg1.className.indexOf(' to-right') >0) && (bg1.className = bg1.className.replace(' to-right',''));
      (bg2.className.indexOf(' to-left') >0)&& (bg2.className = bg2.className.replace(' to-left',''));
      (bg3.className.indexOf(' to-left') >0)&& (bg3.className = bg3.className.replace(' to-left',''));
    }

  }
}

function welfare(){
  var welfare = document.getElementsByClassName('welfare')[0];
  if(scrollTemp >= 2245 && scrollTemp <= 3920){
    addActive(welfare)
  }
  if(scrollTemp <= 2135 || scrollTemp > 3920){
    removeActive(welfare)
  }
}

function newsTimeLimit(){
  var newsTimeLimit = document.getElementsByClassName('news-time-limit')[0];
  if(scrollTemp >= 3237 && scrollTemp <= 5110){
    addActive(newsTimeLimit)
  }
  if(scrollTemp <= 3135 || scrollTemp > 5110){
    removeActive(newsTimeLimit)
  }
}

function asYouPlay(){
  var asYouPlay = document.getElementsByClassName('as-you-play')[0];
  if(scrollTemp >= 5220 && scrollTemp <= 6580){
    addActive(asYouPlay)
  }
  if(scrollTemp <= 5120 || scrollTemp > 6580){
    removeActive(asYouPlay)
  }
}

function addActive(dom){
  if(dom.className.indexOf(' active') <0 ){
    dom.className = dom.className +' active'
    return true;
  }else{
    return false;
  }
}

function removeActive(dom){
  if(dom.className.indexOf(' active') > 0){
    dom.className = dom.className.replace(' active','')
    return true;
  }else{
    return false;
  }
}






