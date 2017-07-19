var fs = require('fs');
exports.get_search_data = function(start, end, keyword) {
  return function(callback) {
    var http = require('http');
    var qs = require('querystring');
    var data = {
      s: keyword,
      start: start,
      end: end,
    };
    var param = qs.stringify(data);
    var http_request = {
      hostname: 'dushu.xiaomi.com',
      port: 80,
      path: '/store/v0/lib/query/onebox?' + param,
    };
    req_obj = http.request(http_request, function(_res){
      var param = ''; 
      _res.setEncoding('utf8');
      _res.on('data', function(chunk){
        param += chunk;         
      });
      _res.on('end', function(){
        callback(null, param);
      });
    });
    req_obj.on('error', function(){
      
    });
    req_obj.end();
  } 
}
