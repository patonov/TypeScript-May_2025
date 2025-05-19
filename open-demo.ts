console.log('hi, TS!')

let str: string = "Muncho";

let decimal_variable: number = 1.333;
let integer_variable: number = 20;
let binary_variable: number = 11100010;

let boolean_variable = 5 > 2;

let nums_array = [11, 22, 44, 55];

let one_symbol = Symbol('Yoga');
let two_symbol = Symbol('Yoga');

console.log(one_symbol === two_symbol); //it would print just false

let firstName : string | undefined;

let skills : string[] = ['JS', 'C#', 'SQL'];

let certificateInfo : [string, number, boolean] = ['The spirit is great', 1001, true];

let num_string_arr : Array<number | string> = ['wine', 'vodka', 'beer', 11]; //(string | number)[]

let point = {x: 0, y: 0};

enum Directions {
    Up,
    Down,
    Left,
    Right
};

function movePoint(point: {x: number, y: number}, direct: Directions){
    if(direct === Directions.Up){
        return {x: point.x, y: point.y + 1};
    } else if (direct === Directions.Down){
        return {x: point.x, y: point.y - 1};
    } else if (direct === Directions.Left){
        return {x: point.x - 1, y: point.y};
    } else if (direct === Directions.Right){
        return {x: point.x + 1, y: point.y};
    }
}

function greetUser(username: string, addGreet?: boolean) : string {
    if (addGreet === true){
        return `Hi, ${username}`;
    }

    return username;
}

console.log(greetUser("Nikolay", true));

function formatData(a: string | number, b: string | number) {
    if(typeof a === 'number' && typeof b === 'string'){
        console.log(a+b);
    } else {
        console.log(`${a} => ${b}`);
    }
}

