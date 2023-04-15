var fs=require('fs');
fs.appendFile('newtext.txt',"hello there!",function(err){
    if(err) throw err;
    console.log("created");
});