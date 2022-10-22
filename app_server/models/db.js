const mongoose = require('mongoose');
const dbURI = 
"mongodb+srv://darrendee:bWXngE4@cluster0.64qwy15.mongodb.net/allCarsDB?retryWrites=true&w=majorit";
try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
);
}
 catch (e) {
  console.log("could not connect");
}
require('./accounts');
require('./listings');