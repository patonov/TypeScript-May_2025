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

function convertArrays(inputArr: string[]) : [string, number] {
    const text: string = inputArr.join('');
    
    return [
        text,
        text.length
    ];
} 

function summarizePerson(
    id: number,
    firstName: string, 
    lastName: string, 
    age: number, 
    middleName?: string, 
    hobbies?: string[],
    workInfo?: [string, number]
) :[number,  string, number, string, string] {
    const name = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const hobbiesStr = hobbies ? hobbies.join(', ') : '-';
    const workStr = workInfo  ? `${workInfo[0]} -> ${workInfo[1]}` : '-';
    
        
    return [
        id,
        name,
        age,
        hobbiesStr,
        workStr
    ];
}

function reverseDayOfWeek(day: string) : void {
    enum Days { "Monday" = 1, "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };
    
    console.log(Days[day as keyof typeof Days] || "error");
}

function unknownResponse(arg: unknown) : string {
    if ('value' in (arg as any) && typeof (arg as any).value === 'string '){
        return (arg as any).value;
    }
    return '-';
}









