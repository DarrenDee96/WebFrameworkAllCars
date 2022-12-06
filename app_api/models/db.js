const mongoose = require('mongoose');
const dbURI ="mongodb+srv://darrendee:bWXngE4@cluster0.64qwy15.mongodb.net/allCarsDB?retryWrites=true&w=majorit";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose successfully connected")
);
}
catch (e) {
  console.log("Mongoose could not connect");
}


const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error 
${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

require('./accounts');



