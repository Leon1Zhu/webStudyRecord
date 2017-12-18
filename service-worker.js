/**
 * Created by zhuliang on 2017/11/18.
 */
self.addEventListener("install",function(e){
  //waitUntil表示知道里面的异步方法执行完成，才会进行下一步
  e.waitUntil(
    caches.open('app-v1').then(function(cache){
      console.log('open cache')
      return cache.addAll([
        './app.js',
        './main.css',
        './service-worker.js'
      ]);
    })
  )
})

//fetch可以请求拦截和响应
self.addEventListener("fetch", function(event){
  //改变response返回的数组
  event.respondWith(
    //改变请求返回的资源，如果serviceWorker中有，就直接返回，否则就启用fetch进行请求
    caches.match(event.request).then(function(res){
      if(res){
        return res;
      }else{
        //通过fetch方法向网络发起请求
       /* fetch(url).then(function(){
          if(res){
             //对于新请求的资源存储搭配我们的cachestorage中
          }else{
             //用户提示
          }
        })*/

      }
      return fetch(event.request)
    })
  )
})
