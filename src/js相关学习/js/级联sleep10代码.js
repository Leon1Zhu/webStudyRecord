/**
 * Created by zhuliang on 2017/12/4.
 */

var LazyMan= function (name){
  document.write(name)


    function doSports(val){
    document.write('I am '+val);
    console.log(this)
    return this
  }
 sleep = function sleep(d) {
    var t = Date.now();

    while(Date.now() - t <= d){console.log("小于")};
    console.log(d)
    console.log("返回that")
    console.log(Date.now() - t)
    return this;
  }
  doWork = function(val){
    document.write('I am'+val);
    return this;
  }
  return ;
}
