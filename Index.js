const express = require("express");
const userRouter = require("./router/users");
//Start an express server
//Write 4 endpoints: Createn(post), Read(get), Update(put), Delete(delete)

const app = express();
const PORT = 4000;

//middlewares:-

app.use(express.json()); //parse the body

//normal mw
const myMiddleWare = (request, response, next) => {
  console.log("middleware was triggerd");
  next()
};

//random mw
const randomMiddleware = (request, response, next) => {
  const randomNumber = Math.random() * 10;
  console.log(randomNumber);

  if (randomNumber <= 5) {
    console.log("welcome to my middleware");
    next();
  } else {
    response.status(401).end();
  }
};



//welcome route
app.get("/", randomMiddleware,(request, response, next) => {
  try {
    response.send("welcome to my API");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
app.use("/users", myMiddleWare, userRouter);

app.listen(PORT, () => console.log(`listning on ${PORT}`));

