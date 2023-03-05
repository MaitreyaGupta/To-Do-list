const express= require("express")

var path=require("path")

var mongoose=require("mongoose")
var bodyParser=require("body-parser")
mongoose.connect("mongodb://localhost:27017/admin",{useNewUrlParser:true},{useUnifiedTopology:true})

const itemSchema={
  name:String
}

const Item=mongoose.model("Item",itemSchema)
var i1=[]
const app=express(); 
var i;

app.set("view engine","ejs");

app.use(express.static("public"))
 
app.use(bodyParser.urlencoded({extended:true}));

var f;

app.get("/",function(req,res,next){
  const h=Item.find();
  const f=Item.find(function(err){
     if(f.length===0)
    {
      Item.insertMany(d,function(err)
      {
        if(err)
        {
          console.log(err);
        }
        else
        {
          console.log("Succes");
       }

      
      });
     res.redirect("/");
    }
    else{
      res.render("list",{ni:f});
    }
  });
});
  
  
    
       
  //res.render("list",{ni:i1});

app.post("/delete",function(req,res)
{
  const check=req.body.m;
  Item.findByIdAndRemove(check,function(err)
  {
    if(!err)
    {
      console.log("Succesfully deleted");
      res.redirect("/");
    }
  });
});

app.post("/",  function(req,res)
{
 i=req.body.n;
 i1.push(i);
 const item=  new Item({
  name:i
 });
 item.save();
 res.redirect("/");
});

app.listen(3000,function(){
    console.log("pore is now on 2000");
});
