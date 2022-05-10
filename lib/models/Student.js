class Student{
    static getAllAboutAllStudents(students){
        return students;
    }
    static getAllEmailsWithCertification(students){
        return students.filter(item => item.haveCertification).map(item => item.email);
    }
    static getAllStudentsWithCreditsGreaterThan(students, credit){
        return students.filter(item => item.credits > credit);
    }
}

module.exports = Student;