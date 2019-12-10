function ajax(url,success,error) {
  // 创建一个异步对象
  var xmlhttp = new XMLHttpRequest();
  // 设置请求方式和请求地址
  xmlhttp.open("GET",url,true);
  // 发送请求
  xmlhttp.send();
  // 监听状态的变化
  xmlhttp.onreadystatechange = function (ev2) {
/*
* 0:请求未初始化
* 1：服务器连接已建立
* 2：请求已接收
* 3：请求处理中
* 4：请求已完成，且响应已就绪
* */
  if (xmlhttp.readyState === 4) {
    // 判断是否请求成功
    if (xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status ===304){
      // 处理返回的结果
      success(xmlhttp);
    }else{
      error(xmlhttp);
    }
  }
  }
}
