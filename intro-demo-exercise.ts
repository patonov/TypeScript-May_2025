function evenSumChecker(a: number, b: number, c: number) : boolean{
    let sum : number = a + b + c;
    if(sum % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(evenSumChecker(1, 2, 3));

function perintDayOfWeek(num: number) : void {
    enum Days { "Monday" = 1, "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };
    console.log(Days[num] || "error");
}

perintDayOfWeek(1);
perintDayOfWeek(8);

function formatPerson(personData:[string, number]):string {
    return `Hi, I am ${personData[0]} and am ${personData[1]} years old.`;
}

