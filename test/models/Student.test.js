const Student = require("../../lib/models/Student");

describe("Unit Tests for the Student class", () => {
    const dbstudents = [
        {
            name: "elpepe1",
            email: "elpepe1@mail.com",
            haveCertification: true,
            credits: 300
        },{
            name: "elpepe2",
            email: "elpepe2@mail.com",
            haveCertification: false,
            credits: 510
        },{
            name: "elpepe3",
            email: "elpepe3@mail.com",
            haveCertification: true,
            credits: 800
        },
    ];

    test("Method getAllAboutAllStudents work", () => {
        const allstudents = Student.getAllAboutAllStudents(dbstudents);
        expect(allstudents).toStrictEqual(dbstudents);
    });

    test("Method getAllEmailsWithCertification work", () => {
        const allemails = Student.getAllEmailsWithCertification(dbstudents);
        expect(allemails).toStrictEqual(["elpepe1@mail.com","elpepe3@mail.com"]);
    });

    test("Method getAllEmailsWithCertification work", () => {
        const allstdscredit = Student.getAllStudentsWithCreditsGreaterThan(dbstudents, 500);
        expect(allstdscredit).toStrictEqual([
            {
                name: "elpepe2",
                email: "elpepe2@mail.com",
                haveCertification: false,
                credits: 510
            },{
                name: "elpepe3",
                email: "elpepe3@mail.com",
                haveCertification: true,
                credits: 800
            },
        ]);
    });
});