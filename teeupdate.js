var mycon=require('mysql');
var con=mycon.createConnection({
    host:"localhost",
    user:"root",
    password:"8007",
    database:"teemydb"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql="update customers set addres='45k' where id=1";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("table updated");
    })
});