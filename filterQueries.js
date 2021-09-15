const User = require("./userModel");

async function main() {
  try {
    //* We query all users in the collection
    const users = await User.find().exec();

    console.log(`List of all users ${users}`);

    //* we add a filter by, for example, all users with admin roles
    const adminUsers = await User.find({ role: "admin" });

    console.log(`List of all admin users: ${adminUsers}`);

    //* We can also filter using operators
    const adultUsers = await User.find({ age: { $gte: 18 } });

    console.log(`List of all adult users: ${adultUsers}`);

    //* We can also search by Id if it is known to us

    const userId = "614169a9abd8f7c2998c86a3";

    const userById = await User.findById(userId);

    console.log(`User found via ID; ${userById._id}`);

    /*
     * PROJECTIONS
     */
    /*
     * We can select only the attributes we need via projection,
     * or even remove the id from the obtained document if needed
     * Projection in mongoose is handled by a string as the second
     * parameter with the attributes we want separated by spaces and
     * attributes to be removed preppended with a '-'
     */
    const listOfUserNames = await User.find({}, "name -_id");

    console.log(`List of user names: ${listOfUserNames}`);

    return "Finished";
  } catch (err) {
    throw err;
  }
}

main()
  .then((res) => {
    console.log(res);
    return;
  })
  .catch((err) => {
    console.log(err);
  });
