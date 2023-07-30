const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'bmd57wn6oa69hf76x3q2-mysql.services.clever-cloud.com',
    user:'uyawdictrqmvt9t2',
    password:'wES95riH9GdjTDplF5AV',
    database:'bmd57wn6oa69hf76x3q2',
    port:'3306',
})

connection.connect((error)=>{
    if(error)
    {
        throw error;
    }else
    {
        console.log("Database Connected");
    }
    
})

module.exports={connection};