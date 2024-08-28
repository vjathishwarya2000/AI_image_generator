const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.listen(4000, () => {
    console.log("server started");
});

app.post("/generateImage", (req, res) => {
    res.send({data: "Testing"});
})
