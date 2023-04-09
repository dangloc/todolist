const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const router = require("./routers/TaskRoute")

const cors = require("cors");

const app = express();

const POST = process.env.POST | 5000;

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGOOSE_URI)
.then(() => console.log("connected..."))
.catch(err => console.error);

app.use("/api", router);
app.listen(POST, () => console.log(`listening on: ${POST}`));
