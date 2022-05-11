const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "Code Challenge API welcome ;)!"});
});

app.listen(port, () => {
    console.log(`Code Challenge API listening in localhost:${port}`);
});