const express = require("express");
const userRouter = require("./router/users");
//Start an express server
//Write 4 endpoints: Createn(post), Read(get), Update(put), Delete(delete)

const app = express();
const PORT = 4000;
app.use(express.json()) //parse the body

//welcome route
app.get("/",(request,response,next)=>{
    try{
        response.send("welcome to my API")
    }
    catch(e){
        console.log(e.message)
        next(e)
    }
})
 app.use("/users",userRouter)

app.listen(PORT,()=>console.log(`listning on ${PORT}`))