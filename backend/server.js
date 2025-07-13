const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const contactRoutes = require("./routes/contact");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(function(){
    console.log("connected to MONGODB");
})
.catch(function(err){
    console.log("failed to connect:", err);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

