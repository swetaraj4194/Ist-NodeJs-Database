const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;

//createSampleTodoItems().then((todos) => console.log(todos));

const todoListWithUser = async () => {
  try {
    // .findAll => [{}, {}, {}]
    const todoList = await TodoList.findAll({ include: User });
    console.log(todoList.map((u) => u.toJSON()));
  } catch (e) {
    console.log(e.message);
  }
};
//todoListWithUser();

const todoItemWithList = async () => {
  try {
    // .findAll => [{}, {}, {}]
    const todoItem = await TodoItem.findAll({ include: TodoList});
    console.log(todoItem.map((u) => u.toJSON()));
  } catch (e) {
    console.log(e.message);
  }
};

 //todoItemWithList()

 const getThemAll = async () => {
   try {
     // .findAll => [{}, {}, {}]
     const user = await User.findAll({
       include: { model: TodoList, include: [TodoItem] },
     });
     console.log(user.map((u) => u.toJSON()));
   } catch (e) {
     console.log(e.message);
   }
 };

 //getThemAll();


 async function getUsers() {
   const allUsers = await TodoList.findAll({
     include: { model: User, attributes: ["name"] },
   });
   return allUsers.map((user) => user.toJSON());
 }

 //getUsers().then((users) => console.log(users));



 async function usersTodo() {
   const allUsers = await User.findAll({
     include: { model: TodoList, attributes: ["name"] },
   });
   return allUsers.map((user) => user.toJSON());
 }

 usersTodo().then((users) => console.log(users));
