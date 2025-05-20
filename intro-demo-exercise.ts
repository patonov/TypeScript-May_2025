function evenSumChecker(a: number, b: number, c: number) : boolean{
    let sum : number = a + b + c;
    if(sum % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(evenSumChecker(1, 2, 3));