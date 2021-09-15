const User = require("./userModel");

async function main() {
  try {
    /**
     * * AGGREGATION PIPELINE
     */
    /*
     * We can create an aggregation Pipeline in Mongoose
     * with the aggregate method in the model and pass
     * an array with the stages
     */

    const matchStage = {
      $match: {
        active: true,
      },
    };

    const sortStage = {
      $sort: {
        age: 1,
      },
    };

    const groupStage = {
      $group: {
        _id: "$role",
        users: {
          $push: "$$ROOT",
        },
      },
    };

    const userList = await User.aggregate([matchStage, sortStage, groupStage]);

    console.dir(userList, { depth: null });

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
