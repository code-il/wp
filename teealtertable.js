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
    var sql="ALTER TABLE customers add column id int auto_increment primary key";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("table created");
    })
});