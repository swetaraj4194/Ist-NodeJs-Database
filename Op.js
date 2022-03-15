const User = require("./models").user;
const { Op } = require("sequelize");

async function getSpecificUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
   const specificUser = await User.findOne({ where: { name: "Sweta" } });
    return specificUser;
  } catch (e) {
    console.log(e);
  }
}
//getSpecificUsers().then((users) => console.log(users));

async function innerHeight(){
    const tallUsers = await User.findAll({
      // WHERE height >= 175
      where: {
        height: {
          [Op.gte]: 175, // gte stands for 'greater than or equal'
        },
      },
    });
    return tallUsers
}
//innerHeight().then((users) => console.log(users));

async function count(){
try {
  const result = await User.findAndCountAll({
    where: {
      name: {
        [Op.like]: "sweta",
      },
    },
    

    offset: 10,
    limit: 2,
    
  });
return result
  console.log(result.count);
  console.log(result.rows);
} catch (e) {
  console.error(e);
}

}
count().then((users)=>console.log(users));





