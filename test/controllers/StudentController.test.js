const StudentController = require("../../lib/controllers/StudentController");

describe("Unit Tests for the StudentController class", () => {
    
    test("Method getAllAboutAllStudents work", () => {
        const allstudents = StudentController.getAllAboutAllStudents();
        expect( 
            allstudents.every( itemobj => 
                typeof( itemobj.name ) === "string" &&
                typeof( itemobj.email ) === "string" &&
                typeof( itemobj.haveCertification ) === "boolean" &&
                typeof( itemobj.credits ) === "number" 
            )
        ).toBe(true);
    });

    test("Method getAllEmailsWithCertification work", () => {
        const allemails = StudentController.getAllEmailsWithCertification();
        expect( 
            allemails.every( item => 
                typeof( item ) === "string"
            )
        ).toBe(true);
    });

    test("Method getAllStudentsWithCreditsGreaterThan500 work", () => {
        const allstdscredit = StudentController.getAllStudentsWithCreditsGreaterThan500();
        expect( 
            allstdscredit.every( itemobj => 
                typeof( itemobj.name ) === "string" &&
                typeof( itemobj.email ) === "string" &&
                typeof( itemobj.haveCertification ) === "boolean" &&
                typeof( itemobj.credits ) === "number" && itemobj.credits > 500
            )
        ).toBe(true);
    });

});