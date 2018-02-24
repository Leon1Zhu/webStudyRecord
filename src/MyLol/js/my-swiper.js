/**
 * Created by zhuliang on 2018/2/24.
 */
(function mySwiper(){

  setInterval(function(){
    var pos1 = document.getElementsByClassName('pos1')[0];
    var pos2 = document.getElementsByClassName('pos2')[0];
    var pos3 = document.getElementsByClassName('pos3')[0];
    pos1.className = pos1.className.replace(' pos1','')+' pos3';
    pos2.className = pos2.className.replace(' pos2','')+' pos1';
    pos3.className = pos3.className.replace(' pos3','')+' pos2';
     var card1 = document.getElementsByClassName('bg-card1')[0];
     var card2 = document.getElementsByClassName('bg-card2')[0];
     var card3 = document.getElementsByClassName('bg-card3')[0];
     if(card1.className.indexOf(' pos1')>0 && card3.className.indexOf(' pos3') >0){
       card1.style.zIndex = 3;
       card2.style.zIndex = 2;
       card3.style.zIndex = 1;
     }else{
       card1.style = null;
       card2.style = null;
       card3.style = null;
     }
     console.log(card1.style)


  },4000)
})()
