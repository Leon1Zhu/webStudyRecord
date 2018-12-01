/**
 * Created by zhuliang on 2018/8/11.
 */

var n, k, s, m=0, i;
var arr = [], from = [], to = [];
var index = 0;
while(line = readline()){
  var lines = line.split(" ")
  for(var j = 0;j < lines.length; j++){
    if (index === 0 ) {
      n = lines[0];
      k = lines[1];
    }else {
      arr = lines;
    }
  }
  index ++;
}

while( k!=0 ){

  var max_id=0, min_id=0;

  for(i=1;i<n;++i){
    if( arr[i] > arr[max_id] ){
      max_id = i;
    }
    if( arr[i] < arr[min_id] ){
      min_id = i;
    }
  }

  s = arr[max_id] - arr[min_id];
  if( s == 0 ){
    break;
  }
  arr[max_id] --;
  arr[min_id] ++;
  s -= 2;
  from[m] = max_id+1;
  to[m] = min_id+1;
  k--;
  m++;
}

print(s , m );
for( i=0 ; i<m ; ++i ){
  print(from[i], to[i]);
}

