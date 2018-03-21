

var viewheight = document.documentElement.clientHeight;

function lazyload () {
   var eles = document.querySelectorAll('img[data-src][lazyload]');
   console.log(viewheight)
   Array.prototype.forEach.call(eles,function(item,index){
      /*if(item.dataset.src === '')return;*/
      rect = item.getBoundingClientRect();
      console.log(rect)
      if(rect.bottom >= 0 && rect.top<viewheight){
          !function(){
            //将data的url赋值给图片的属性
            var img = new Image();
            img.src = item.dataset.src;
            console.log(item.dataset.src)
            img.onload = function() {
              item.src = img.src;
            }
            //去掉懒加载属性
            item.removeAttribute("data-src");
            item.removeAttribute("lazyload")
          }()
      }
   })
}

lazyload();




document.addEventListener("scroll",lazyload)
