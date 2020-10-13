const mongoose = require("mongoose");

mongoose
.connect("mongodb+srv://rohan_sharma:<password>@cluster0-do7mn.mongodb.net/todoo?retryWrites=true&w=majority".replace('<password>', "XO13bRX7MVXOThwH"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(function () {
    console.log("Database connected successfully");
})
.catch(function (err) {
    console.log(err.message);
});
