const Reader = require("../utils/Reader");
const Student = require("../models/Student");

class StudentController{
    static getAllAboutAllStudents(){
        const dbstudent = Reader.readJsonFile("visualpartners.json");
        return Student.getAllAboutAllStudents(dbstudent);
    }
    static getAllEmailsWithCertification(){
        const dbstudent = Reader.readJsonFile("visualpartners.json");
        return Student.getAllEmailsWithCertification(dbstudent);
    }
    static getAllStudentsWithCreditsGreaterThan500(){
        const dbstudent = Reader.readJsonFile("visualpartners.json");
        return Student.getAllStudentsWithCreditsGreaterThan(dbstudent, 500);
    }
}

module.exports = StudentController;