/**
 * Created by zhuliang on 2018/2/8.
 */
var EventUtil = {
  ISNULL : function(val){
    if(val===null || val === undefined || val === ''){
      return true;
    }else{
      return false;
    }
  },
  getEvent: function(event){
    return event || window.event;
  },
  getTarget: function(e){
    return e.target || e.srcElement;
  },
   addHader : function(el,type,hander){
      if(el.addEventListener){
         el.addEventListener(type,hander,false)
      }else if(el.attachEvent){
        el.attachEvent(type,hander);
      }else{
        el['on'+type] = hander;
      }
    },
  removeHander : function(el,type,hander){
   if(el.removeEventListener){
     el.removeEventListener(type,hander);
   }else if(el.detachEvent){
     el.detachEvent(type,hander);
   }else{
     el['on'+type] = null;
   }
  },

 stopDefault : function (event){
    event = this.getEvent(event);
    if(event.preventDefault){
      event.preventDefault();
    }else{
      event.returnValue = false;
    }
  },
  stopPropagation : function(e){
    e = this.getEvent(e);
    if(e.stopPropagation){
      e.stopPropagation();
    }else{
      e.cancelBubble = true;
    }
  }
}
