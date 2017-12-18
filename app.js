/**
 * Created by zhuliang on 2017/11/18.
 * serviceWorker的启动配置文件
 */
//检测浏览器是否支持serviceWorker
if(navigator.serviceWorker){
      navigator.serviceWorker.register('./service-worker.js',{scope : './'})
        .then( function(reg){
          console.log(reg)
        })/*.catch(fu nction(error){
          console.log(error)
      })*/
}else{
  alert("Service Worker is not support")
}
