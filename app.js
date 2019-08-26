let express=require('express');
let app=express();
let path2Views=__dirname+"/views/";
let bodyParser=require('body-parser');
app.engine("html", require("ejs").renderFile);
app.set('view engine','html')
let db=[];

app.use(bodyParser.urlencoded({extended:false}));
app.get('/',function(req,res){
    res.sendFile(path2Views+"index.html");
});

app.get('/addCustomerw5t2',function(req,res){
    res.sendFile(path2Views+"newcustomer.html");
});


app.post('/newCustomerRecord',function(req,res){
    console.log(req.body);
    db.push(req.body);

    res.sendFile(path2Views+"index.html");

    
});

app.get('/getAllCustomers',(req,res)=>{
    res.render(path2Views+"showRecord.html",{
        customer:db
    })

})
app.listen(8080);