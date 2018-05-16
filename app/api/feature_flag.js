const mysql = require('./mysqlHelper.js');
const NodeCache = require( "node-cache" );
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

var getAll = function(req, res){
    console.log('getAll');
    cache.get("all", function(error, value){
        if(error){
            res.status(500).json(error);
        }
        
        if(value){
            res.json(value);
        }else{
            var sql = "SELECT * FROM Feature";
            mysql.execSQLQuery(sql, function(error, data){
                if(error){
                    res.status(500).json(error);
                }
                cache.set("all", data);
                res.json(data);
            });
        }
    });
};

var getKey = function(req, res){
    console.log('getKey');
    var key = req.params.key;
    cache.get(key, function(error, value){
        if(error){
            res.status(500).json(error);
        }
        
        if(value){
            res.json(value);
        }else{
            var sql = "SELECT * FROM Feature WHERE chave = '" + key + "'";
            mysql.execSQLQuery(sql, function(error, data){
                if(error){
                    res.status(500).json(error);
                }
                cache.set(key, data);
                res.json(data);
            });
        }
    });
};

module.exports = {
    getAll, getKey
};