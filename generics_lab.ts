function getFirstParameter<T>(arr: T[]): T {
    return arr[0];
}

const unit = getFirstParameter<number>([33, 22, 16]);
console.log(unit);

function makeTuple<T, U>(el1: T, el2: U): [T, U] {
    return [el1, el2];
}

const tupleMade = makeTuple<string, number>("pencho", 1);
console.log(tupleMade);