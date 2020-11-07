const express = require("express"),
      app = express(),
      cors = require("cors"),
      mongoose = require("mongoose"),
      bodyParser = require("body-parser");
      require("dotenv/config");


// middlewares
app.use(cors());
app.use(bodyParser.json());


// import base route
app.use("/api", require("./routes/base"));

// start server
app.listen(process.env.PORT, (error) => {
    if(!error){
        console.log("server listening to " + process.env.PORT);
    }
})


// conntect to mongodb
const dbConfig = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(process.env.DB_CONNECTION, dbConfig, error => {
    if(!error){
        console.log("Database connected");
    }else{
        console.log("Database connection failed");
    }
})