const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true }).then( () => {
    console.log("Connected to mongoDB, welcome 👩🏻‍💻");
}).catch( () => {
    console.log("Oh no... error connecting to mongoDB. So sorry mate 🍁")
});
