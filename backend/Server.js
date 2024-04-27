const express= require("express")
const mongoogse = require("mongoose")
const cors=require("cors")
const dburl = "mongodb://localhost:27017/sdpproject32"

mongoogse.connect(dburl).then(() => {
    console.log("Connected To DB Successfully")    
}).catch((err) => {
    console.log(err.message)
});

const app = express()
app.use(express.json())
app.use(cors())

const  adminrouter = require("./routes/adminroutes")
const customerrouter = require("./routes/customerroutes")
 const recommendrouter = require('./routes/recommendroutes');

 app.use("", recommendrouter);

app.use("",adminrouter)
app.use("",customerrouter) 


const port =2000
app.listen(port,()=>
{
    console.log(`Server is Running at Port ${port}`)
})