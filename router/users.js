const { Router, response } = require("express");
const Users = require("../models").user;
const TodoList = require("../models").todoList;

const router = new Router();


// //conditional mw

// const idValidation=(req,res,next)=>{
//     if(!Number.isInteger(parseInt(req.params.id))){
//     res.status(400).json({message:"enter a valid id"})
// } else{
//     next()
// }

//send a list of users
router.get("/", async (request, response, next) => {
  try {
    const users = await Users.findAll();

    if (!users) {
      response.status(404).send("NO USERS");
    }
    response.send(users);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//sending a list of user with sepecific id
router.get("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;

    const userId = await Users.findByPk(id, { include: TodoList });
    if (!userId) {
      response.status(404).send("no users");
    } else {
      response.send(userId);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//create a user
//send a list of users
//test => http :4000/users name=Karla email=karla@karla.com password=1234 phone=5678

router.post("/", async (request, response) => {
  try {
    const { name, email, password, phone } = request.body;

    const checkEmail = await Users.findOne({ where: { email: email } });
    if (checkEmail) {
      response.status(401).send("Email already exists");
    }
    const user = await Users.create({ name, email, password, phone });
    response.send(user);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//update a user
//test => http PUT :4000/users/1 name=Boo

router.put("/:id", async (request, response, next) => {
  try {
    const { name, password } = request.body;
    const { id } = request.params;

    const user = await Users.findByPk(id);
    const updatedUser = await user.update({ name, password });
    response.send(updatedUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//delete a user
//test => http DELETE :4000/users/1

router.delete("/:id",async(request,response,next)=>{
    try{
        const{id}=request.params
        const user=await Users.findByPk(id)
        const destroyedUser=await user.destroy()
        response.send(destroyedUser)
    }catch(e){
        console.log(e.message)
        next(e)
    }
})


module.exports = router;




