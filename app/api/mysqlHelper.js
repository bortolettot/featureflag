const mysql = require('mysql');

var execSQLQuery = function(sqlQry, callback){
  console.log(sqlQry);

  const connection = mysql.createConnection({
    host     : process.env.DATABASE_HOST || '127.0.0.1',
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASS,
    port     : 3306,
    database : 'msFeatureFlag'
  });

  connection.query(sqlQry, function(error, results, fields){
    connection.end();
    if(error){ 
      callback(error);
    }
    callback(null, results);
  });
};

module.exports = {
  execSQLQuery
};