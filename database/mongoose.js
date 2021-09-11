const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb')
        .then(()=>{console.log("Db Connected Suceesfully!"

        )})
        .catch((error)=>{
            console.log("Error occured while DB connection",error)
        });

 module.exports = mongoose;           

