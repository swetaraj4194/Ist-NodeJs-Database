//1st method

const User = require("./models").user;

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll({ raw: true });
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}

//getAllUsers().then((users) => console.log(users));

//2nd method:-

const allData = async () => {
  try {
    const users = await User.findAll();
    console.log(users.map((u) => u.toJSON()));
  } catch (e) {
    console.log(e.message);
  }
};
//allData()


const specificUser = async (userID) => {
  try {
    const user = await User.findByPk(userID);
    //console.log(user);

  } catch (e) {
    console.log(e.message);
  }
};
//specificUser(2)


const createNewUser = async (name, email, password) => {
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });
    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
};

//createNewUser("pooja", "pooja.com", "12345");



const TodoItem = require("./models").todoItem;

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      task: "Clean bedroom",
      important: false,
    });
    const todo2 = await TodoItem.create({
      task: "Learn to code",
      important: true,
    });
    const todo3 = await TodoItem.create({
      task: "Have fun",
      important: true,
    });

    return [todo1, todo2, todo3].map((item) => item.toJSON());
  } catch (e) {
    console.error(e);
  }
}

//createSampleTodoItems().then((todos) => console.log(todos));