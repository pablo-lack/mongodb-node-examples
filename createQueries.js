const User = require("./userModel");

async function main() {
  try {
    const userList = [
      {
        name: "Pedro Paramo",
        role: "user",
        age: "45",
        phone: "2222345678",
      },
      {
        name: "Juan Rulfo",
        role: "user",
        age: "30",
        phone: "2356789023",
      },
      {
        name: "Alvaro Obregon",
        role: "admin",
        age: "60",
        phone: "2435789056",
      },
      {
        name: "Carmen Serdan",
        role: "admin",
        age: "325",
        phone: "4356457890",
      },
      {
        name: "Marie Curie",
        role: "user",
        age: "15",
        phone: "2435762356",
      },
      {
        name: "Elon Musk",
        role: "user",
        age: "16",
        phone: "2456890765",
      },
      {
        name: "Andrey Kudievsky",
        role: "admin",
        age: "35",
        phone: "3546789023",
      },
    ];

    userList.map(async (user) => {
      const newUser = new User(user);
      await newUser.save();
    });

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
