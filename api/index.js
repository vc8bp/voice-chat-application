require('dotenv').config();
const cors = require('cors')
const express = require('express');
const connectToMOngo = require('./Db');
const port = process.env.PORT || 5000
const app = express();
app.use(cors({
    credentials: true, //this need to be true is you are using cooskies
    origin: ['http://localhost:3000']
}))
app.use(express.json());
connectToMOngo()

app.use("/api", require("./routes"))
app.get("/", (req,res) => [
    res.send("hello world")
])



app.listen(port, () => console.log(`server is running on PORt : ${port}`))