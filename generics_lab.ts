function getFirstParameter<T>(arr: T[]): T {
    return arr[0];
}

const unit = getFirstParameter<number>([33, 22, 16]);
console.log(unit);