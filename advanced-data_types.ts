let passFailInfo: "pass" | "fail";
passFailInfo = "pass";
console.log(passFailInfo);

let numericGrade : 2 | 3 | 4 | 5 | 6;
numericGrade = 4;
//numericGrade = 8;

type id = number;

type Person = {
    personalId: id;
    firstName: string;
    lastName: string;
    age: number;
}

let penchoPerson : Person = {
    personalId: 1,
    firstName: "Pencho",
    lastName: "Muncho",
    age: 19,
};

type Student = {
    school: string;
    gpa: number;
}

type FullSttudentProfile = Person & Student;