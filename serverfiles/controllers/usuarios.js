var dbManager = require('./database');
var ObjectId = require('mongodb').ObjectId; 

exports.getUserInfo = function(id, callback){
    dbManager.find("users", {_id: new ObjectId(id)}, function(data){
        if(data.length != 0){
            var info = {
                id: data[0]["_id"],
                nombre: data[0]["nombre"],
                aPaterno: data[0]["aPaterno"],
                aMaterno: data[0]["aMaterno"]
            };
            
            callback(info);
        }else{
            callback(null);
        }

    }); 
}