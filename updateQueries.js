const User = require("./userModel");

async function main() {
  try {
    /**
     * *UPDATES
     */
    /*
     * We can update users by obtaining them, modifying them and
     * saving them afterwards
     */

    let updateUser = await User.findOne({ name: "Pedro Paramo" });

    console.log(`Name before update: ${updateUser.name}`);

    updateUser.name = "Paramo Pedro";

    updateUser = await updateUser.save();

    console.log(`Name after update: ${updateUser.name}`);

    /**
     * * It is also posible to do a query update like in MongoDB shell
     * * first by filterQuery...
     */
    await User.updateMany({ age: { $lte: 18 } }, { active: false });

    /**
     * *Then by id
     */

    const updateUserId = "614155bbd8f3803f87e0f4f5";

    await User.findByIdAndUpdate(updateUserId, { phone: "2222678905" });

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
