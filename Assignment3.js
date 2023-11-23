var Student = /** @class */ (function () {
    function Student(rollNo, studName, marksInEng, marksInMaths, marksInScience) {
        this.RollNo = rollNo;
        this.StudName = studName;
        this.MarksInEng = marksInEng;
        this.MarksInMaths = marksInMaths;
        this.MarksInScience = marksInScience;
    }
    Student.prototype.calculateTotalMarks = function () {
        return this.MarksInEng + this.MarksInMaths + this.MarksInScience;
    };
    Student.prototype.calculatePercentage = function () {
        var totalMarks = this.calculateTotalMarks();
        return (totalMarks / 3);
    };
    Student.prototype.displayResult = function () {
        var totalMarks = this.calculateTotalMarks();
        var percentage = this.calculatePercentage();
        console.log("Student Name: ".concat(this.StudName));
        console.log("Roll No: ".concat(this.RollNo));
        console.log("Marks in English: ".concat(this.MarksInEng));
        console.log("Marks in Maths: ".concat(this.MarksInMaths));
        console.log("Marks in Science: ".concat(this.MarksInScience));
        console.log("Total Marks: ".concat(totalMarks));
        console.log("Percentage: ".concat(percentage, "%"));
    };
    return Student;
}());
var student1 = new Student(1, "Sathwik", 85, 90, 78);
student1.displayResult();
