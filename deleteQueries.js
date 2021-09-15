const User = require("./userModel");

async function main() {
  try {
    /**
     * * DELETES
     */
    /*
     * We can remove users by query
     */
    await User.deleteMany({ age: { $lte: 18 } });

    // * Or by id too
    const deleteUserId = "614169a9abd8f7c2998c86a2";

    await User.findByIdAndDelete(deleteUserId);

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
