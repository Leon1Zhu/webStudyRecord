/**
 * Created by zhuliang on 2018/2/22.
 */
var scrollTemp = null;
window.onscroll = function(){
  scrollTemp = document.documentElement.scrollTop;
    RedPackagePage();
    gorgeWar();

 }

function RedPackagePage(){
   var redPagePack = document.getElementsByClassName('red-package-page')[0];
   if(scrollTemp >= 880 || scrollTemp <= 1749){
     addActive(redPagePack)
   }

  if(scrollTemp <= 880 || scrollTemp > 1920){
     removeActive(redPagePack)
   }
}

function gorgeWar(){
  var gorgeWar = document.getElementsByClassName('gorge-war')[0];
  if(scrollTemp >= 1278 || scrollTemp <= 2900){
    addActive(gorgeWar)
  }
  if(scrollTemp <= 1176 || scrollTemp > 2900){
    removeActive(gorgeWar)
  }
}


function addActive(dom){
  (dom.className.indexOf(' active') >0 )|| (dom.className = dom.className +' active')
}

function removeActive(dom){
  (dom.className.indexOf(' active') > 0) && (dom.className = dom.className.replace(' active',''))
}






