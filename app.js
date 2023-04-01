// alert("||======Find Which Number is Greater OR Equal Number=====||");

// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// if(num1 > num2)
// {
//     console.log(num1  + "  is greater than " + num2 );
// }
// else if(num1 < num2)
// {
//     console.log(num2  + "  is greater than " + num1 );

// }
// else{
//     console.log(num1  + "  is Equal to " + num2 );
// }
//  console.log("Thank You for using this app!!!");

// alert("||=====Eligibility For Casting Vote====||");

// var age = prompt ("Enter Your Age");
// if(age >= 18)
// {
//     console.log("Eligible");
// }
// else
// {
//     console.log("Not Eligible");
// }

//=====Simple Report Card=====

alert("||=====Simple Report Crad!=====||");
var Math, Physics, Computer, Islamiat, PakistanStudies;
var TotalMarks = 500;
var ObtainMarks, Percentage;

var StudentName = prompt("Student Name");
var Rollno = prompt("Roll no:");
var Math = prompt("Enter Math Marks");
var Physics = prompt("Enter Physics Marks");
var Computer = prompt("Enter Computer Marks");
var Islamiat = prompt("Enter Islamiat Marks");
var PakistanStudies = prompt("Enter Pak.Studies Marks");

if (
	Math >= 33 &&
	Physics >= 33 &&
	Computer >= 33 &&
	Islamiat >= 33 &&
	PakistanStudies >= 33
) {
	console.log(`Name: ${StudentName}`);
	console.log("Roll no: " + Rollno);
	ObtainMarks =
		parseInt(Math) +
		parseInt(Physics) +
		parseInt(Computer) +
		parseInt(Islamiat) +
		parseInt(PakistanStudies);
	console.log("Obtain Marks are " + ObtainMarks);
	console.log("Student is Pass");
	Percentage = (ObtainMarks / TotalMarks) * 100;
	console.log(`Percentage: ${Percentage}`);
	console.log("Congratulatinos!");
} else {
	console.log("Student is Fail!");
}
