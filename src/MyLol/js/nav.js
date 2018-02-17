/**
 * Created by zhuliang on 2018/2/8.
 */
var navDom = function(data){
    this.packageDom  = function () {
      var fragment = document.createDocumentFragment();
      for(var i=0,len=data.length;i<len;i++){
        var dataItem = data[i];
        var listDom = document.createElement('li');
        listDom.className = dataItem.isComming ? 'activity-item' : 'activity-act-item';
         this.packageContent(listDom,dataItem)
        fragment.appendChild(listDom);
      }
      document.getElementsByClassName('activity-list')[0].appendChild(fragment);
    }



    this.packageContent = function(dom,item){
      var contentDom =  document.createElement('span');
      contentDom.innerHTML = item.date
      contentDom.className =  (item.date === '敬请期待') && 'on comming'
      dom.appendChild(contentDom);

      contentDom = document.createElement('i');
      contentDom.className = 'halving-line';
      dom.appendChild(contentDom)

      contentDom = document.createElement('p');
      contentDom.innerHTML = item.activityName
      dom.appendChild(contentDom)

      contentDom = document.createElement('em');
      contentDom.innerHTML = item.activityDes
      dom.appendChild(contentDom)


    }

    ISNULL(data) ? console.error('data is empty') : this.packageDom();

}
