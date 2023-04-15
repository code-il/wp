var mycon=require('mysql');
var con=mycon.createConnection({
    host:"localhost",
    user:"root",
    password:"8007"
});
con.connect(function(err){
    if (err) throw err;
    console.log("connected")
    con.query("CREATE DATABASE teemydb",function(err,result){
        if(err) throw err;
        console.log("created");
    })
})