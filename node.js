var MongoClient = require('mongodb').MongoClient;
var DB_URL = 'mongodb://localhost:27017/school';

var insertData = function(db, callback) {
  var t_collection = db.collection('teacher'); 
  var s_collection = db.collection('student');
  var data = [{sname: 'test1', sage: 26},{sname: 'test2', sage: 28}];
  t_collection.insert(data, function(err, result){
    if(err) {
      console.log('Error:' + err);
      return ;
    }
    callback(result);
  });
}

MongoClient.connect(DB_URL, function(err, db){
  console.log('Connection success');
  insertData(db, function(result){
    console.log(result);
    db.close();
  });
});
