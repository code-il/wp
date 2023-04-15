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
    var sql="insert into customers (name,addres) values('pratH','75kstreet')";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("number:"+result.affectedRows);
    })
});