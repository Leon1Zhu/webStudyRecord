

今年过年的时候和小伙伴们看到了LOL的狗年活动官网。不得不感叹，搞IT的看的和别人就是不一样，别人看活动，我看设计、看特效,看完头脑一热，决定用原生js搞一波。。。。

抽了7、8天的空闲时间，搞的差不多了，在谷歌下显示的还是可以的，其他浏览器的兼容性并没有测试。

写完之后收获了很多，对于css属性以及css3动画的进一步学习以及应用，对原生js的练习、运用，加强了对于html标签语义化的应用，避免过去对于div的魔性依赖。。。还有就是对于html布局的新理解，自己写的布局到最后总是感觉没有原版写的好（难道是因为我没有设计的原因？？？），最后不得不感叹有一个好的视觉设计师（美工）对于程序员是多么滴重要

[仿写地址](http://www.wlmfang.com:9080/MyLol//index.html)

[官网地址](http://lol.qq.com/act/a20180212spring/index.html)

注：

* 目前只对谷歌浏览器做了测试，并且没有手机端界面，所以建议用pc端的chrom浏览
* 鉴于自己的服务器网速实在是比不起腾讯爸爸的，所以减少了很多资源（音频，明星与你同乐模块的三个视频）
* 纯粹个人兴趣

### 一些知识点的总结

#### 1.使用浏览器的navigator对象判断当前是否是在手机端和微信端

```	javascript
function is_pc(){
	var os = new Array("Android","iPhone","Windows Phone","iPod","BlackBerry","MeeGo","SymbianOS");  
	var info = navigator.userAgent;
	var len = os.length;
	for (var i = 0; i < len; i++) {
	    if (info.indexOf(os[i]) > 0){
	        return false;
	    }
	}
	return true;
}
function isWeixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == 'micromessenger'){
		return true; 
	}else{
	   return false;
	}
}
```
 
#### 2.减少if for在编程中的使用

```	javascript	
	1.三元运算符
	2.if分支多的话改用switch
	3.使用短路判断 &&、||
	if(XXX){
		 test()
	}
	// 改动后
	XXX && test() 表示如果XXX为真，返回test，否则返回XXX
	
	if(!XXX){
		test()
	}
	// 改动后
	XXX ||  test()表示如果XXX为假，返回test，否则返回XXX
	
```
#### 3.使用background做颜色渐变字体
  
  
```css 
    1.首先使用color设置hack，对于这些新的API，除了敬业的chrom，其他浏览器的支持性还不是很好。
    2.使用background-image颜色渐变linear-gradient来设置渐变属性
    3.使用text-fill-color:transparent;来设置文字的填充颜色为透明，当这个属性声明时，color将失效
    4.最后使用background-clip:text；声明只显示文字区域，就出现渐变色颜色的文字啦
    color: #ef8247;
	 font-size:14px;
	 background-image: linear-gradient(to right,#fee3b5,#f8bb87);
     background-clip: text;
	 -webkit-background-clip: text;
	 -webkit-text-fill-color: transparent;
	 te
	 
	 xt-fill-color:transparent;
```

#### 4.始终让元素保持居中或者垂直居中（在知道元素大小的情况下）

  
```css 
    1.首先使用position:absolute绝对定位。
    2.使用margin-left: -50%的宽度,margin-top:-50%的高度
    3.再使用left:50%的宽度,top:50%的高度即可实现界面缩小放大时元素始终垂直居中
    .bg1 .video{
	  position: absolute;
	  width: 1920px;
	  height:900px;
	  margin-left:-960px;
	  left:50%;
	}
```

#### 5.按钮闪效果实现

```css 
    1.首先画好按钮。
    2.使用before伪元素绘制透明菱形的滑动方块，闪的效果就是来自菱形的移动
    3.使用动画让菱形伪元素移动起来即可
    .first-page .bottom-btn span{
	  display: block;
	  height:40px;
	  line-height:40px;
	  overflow: hidden;
	  margin:0 9px 0 7px;
	  position: relative;
	}
	
	.first-page .bottom-btn  span:before{
	  content: ' ';
	  position: absolute;
	  width:80px;
	  height:350px;
	  top:0;
	  left:-150px;
	  transform: skew(-25deg);
	  background: linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,.5) 50%,rgba(255,255,255,0) 100%);
	}
	@keyframes leftToRight {
	  0%{left:-150px;}
	  100%{left:250px}
	}
``` 
![效果展示](http://otdc3q7z7.bkt.clouddn.com/%E6%8C%89%E9%92%AE.gif)

#### 6.transform属性

```css
    transform:rotate3d(x,y,z,d)
    这个比较好理解，3d旋转，4个参数，分别对应x,y,z轴，类型是number，最后一个参数是旋转的角度，最后旋转的角度为x*d,y*d,z*d,所以前面三个参数为1时就正常旋转角度，0时不旋转
    
    transform:perspective
    
    1. perspective属性设置镜头到元素平面的距离。所有元素都是放置在z=0的平面上。比如perspective(300px)表示，镜头距离元素表面的位置是300像素。
    2. perspective-origin属性规定了镜头在平面上的位置。默认是放在元素的中心。
    
```
#### 7.好看的hover效果
![效果展示](http://otdc3q7z7.bkt.clouddn.com/hover1.gif)


```css
	
	1.正常些元素属性
	2.在元素hover的时候，使用before伪元素，给before伪元素添加动画，使用opacity和scale进行实现
	
	@keyframes coruscate {
	  0%{
	    opacity:.3;
	    transform: scale(1);
	  }
	  100%{
	    opacity:0;
	    transform: scale(1.2);
	    display: none;
	  }
	}
	
	.as-you-play .card-list  .card-3{
	  position: absolute;
	  background: url("../assets/spr_redpackage.png")no-repeat -340px -478px;
	  width:392px;
	  height:333px;
	  top:-38px;
	  left:800px;
	}

	 .as-you-play .card-list  .card-3:hover:before{
      content: '';
      position: absolute;
      background: url("./assets/spr_redpackage.png")no-repeat -340px -478px;
      width:392px;
      height:333px;
      top:0px;
      left:0px;
      animation:coruscate .4s ease-in-out;
    }
	
	
```

#### 8.上下移动效果的思路以及优化
 
 一开始直接使用的onscroll函数对滚动事件进行监听
 ![监听代码](http://otdc3q7z7.bkt.clouddn.com/8DC18A0D-58E4-4CE6-9E39-9B714642772E.png)
 方法体中的每个方法都对应页面中每一个模块的出现与消失的控制
 ![方法体示例](http://otdc3q7z7.bkt.clouddn.com/07BBA75D-2D74-4927-A1EA-CAFCB405453B.png)
 
 后来发现这个方法问题比较大，每一次都是调用所有方法是一方面，另一方面，只要在高度之外，每次一次滚动都会removeActive，虽然界面上看没有什么变化，但是运算量一下就上来了，导致界面会有些卡顿感觉
 
 经过一番思考，改成滚动到一定区域的高度时，在调用对应的方法
 ![改动后的onscroll方法体](http://otdc3q7z7.bkt.clouddn.com/8F9B76BB-DB39-4418-A459-9EB7984656A6.png)
 
 感觉应该还有不小的优化空间，后面继续优化这一块
 
 

#### 9.第一页上下滚动效果的优化

  在官网中，第一页到第二页之间触发滚动的时候会自动下滚或者上滚，本以为这一块会比较简单，没想到这里才是最费时间的地方，因为没有用JQ，所以很多方法都要自己实现
  
   - 上下自动滚动的动画已经对body和nav进行样式设置
    * 首先将要滚动的高度除以每次滚动的高度，得出次数
    * 使用setInterval定时器每次滚动对应高度，知道循环到指定次数，清除这个定时器
    * 在滚动时吧body的padding-top设置为142px,nav的定位方式改为fixed
    
    ```javascript
      function scrollTo945(){
		  disabledMouseWheel();
		  setTimeout(mouseWheel,500);
		  document.getElementsByClassName('activity-nav')[0].style.position = 'fixed'
		
		  setTimeout(function(){
		    document.body.style.paddingTop = '142px';
		  },50)
		    var scrollTemp =  getScrollTop();
		    var scrollHeight = scrollDownHeigh - scrollTemp;
		    var len = Math.floor(scrollHeight/step),i=0;
		    var first_length = scrollHeight % step
		    clearInterval(timer)
		    timer = setInterval(function(){
		      if(i>len) return;
		      i==0 ?  window.scrollTo(0,first_length) : window.scrollTo(0,i*step+first_length);
		      i === len && clearTimerDown()
		      i++;
		    },10)
		
		}
    ```
   - 注意点
    *  一开始选用的onscroll方法进行监听，后来发现这个方法和全局控制各个模块的方法相冲突，会引发比较多的BUG，所有后来换用了onmousewheel方法对滚动进行监听
    *  每次触发滚动事件时，需要把onmousewheel事件解绑，否则用户再次触发该事件时，会发生BUG
    *  对于body的padding-top的动画时间设置和页面滚动的动画时间设置需要反复的尝试，找到一个比较平衡的点，这样滚动的时候不会有太大的感觉
