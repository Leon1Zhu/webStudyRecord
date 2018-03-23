/**
 * Created by zhuliang on 2018/2/22.
 */
var scrollTemp = null;
var canceTime ;
window.onscroll = function(){
  clearTimeout(canceTime);
   canceTime = setTimeout(() => {
     scrollTemp =  getScrollTop();
     /*(scrollTemp >40 && (document.body.style.paddingTop !== '142px')) && changeTop();*/
     (scrollTemp === 0  && (document.body.style.paddingTop === '142px')) && changeUp();
     switch(true){
       case 240<= scrollTemp <=2000:  RedPackagePage();
       case 1100<= scrollTemp <= 3000 : gorgeWar();
       case 2100<= scrollTemp <= 4000 : welfare();
       case 3100<= scrollTemp <=5200 : newsTimeLimit();
       case 4250<= scrollTemp <=6000 : playWithStar();
       case 5100<= scrollTemp <=6600 : asYouPlay();
       case 5700<= scrollTemp : lastStep();
     }
   },50)

 }
//通过scroll触发修改paddingtop
/*function changeTop(){
  console.log(document.documentElement.scroll)
  console.log(document.body.style.paddingTop)
  document.getElementsByClassName('activity-nav')[0].style.position = 'fixed'
    document.body.style.paddingTop = '142px';
}*/

function changeUp(){
  document.body.style.paddingTop = '0px';
  setTimeout(function(){
    document.getElementsByClassName('activity-nav')[0].style.position = 'relative'
  },400)
}

function RedPackagePage(){
   var redPagePack = document.getElementsByClassName('red-package-page')[0];
   var bg1 = document.getElementsByClassName('red-package-bg1')[0];
   var bg2 = document.getElementsByClassName('red-package-bg2')[0];
   var bg3 = document.getElementsByClassName('red-package-bgs')[0];
   if(scrollTemp >= 340 && scrollTemp <= 1749){
     if(addActive(redPagePack)){
       setTimeout(function(){
         (bg1.className.indexOf(' to-right') >0)|| (bg1.className = bg1.className+ ' to-right');
         (bg2.className.indexOf(' to-left') >0)|| (bg2.className = bg2.className+ ' to-left');
         (bg3.className.indexOf(' to-left') >0)|| (bg3.className = bg3.className+ ' to-left');
       },0)
     }
   }

  if(scrollTemp <= 243 || scrollTemp > 1920){
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

function playWithStar(){
  var playWithStar = document.getElementsByClassName('play-with-star')[0];
  if(scrollTemp >= 4430 && scrollTemp <= 5910){
    addActive(playWithStar)
  }
  if(scrollTemp <= 4300 || scrollTemp > 5910 ){
    removeActive(playWithStar)
  }
}


function asYouPlay(){
  var asYouPlay = document.getElementsByClassName('as-you-play')[0];
  if(scrollTemp >= 5220 && scrollTemp <= 6500){
    addActive(asYouPlay)
  }
  if(scrollTemp <= 5120 || scrollTemp > 6500 ){
    removeActive(asYouPlay)
  }
}

function lastStep(){
  var lastStep = document.getElementsByClassName('last-step')[0];
  if(scrollTemp >= 5820 ){
    addActive(lastStep)
  }
  if(scrollTemp <= 5720 ){
    removeActive(lastStep)
  }
}
function getScrollTop(){
  return document.documentElement.scrollTop || window.pageYOffset;
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






