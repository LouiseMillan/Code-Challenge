const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "Code Challenge API welcome ;)!"});
});

app.get("/v1/students", (request, response) => {
    const allstudents = StudentController.getAllAboutAllStudents();
    response.json(allstudents);
});

app.get("/v1/students/emails", (request, response) => {
    const allemails = StudentController.getAllEmailsWithCertification();
    response.json(allemails);
});

app.get("/v1/students/credits", (request, response) => {
    const allstudents500 = StudentController.getAllStudentsWithCreditsGreaterThan500();
    response.json(allstudents500);
});

app.listen(port, () => {
    console.log(`Code Challenge API listening in localhost:${port}`);
});