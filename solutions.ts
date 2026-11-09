function multiplyValue(value: number, multiplier?: number): number{
    return value * (multiplier === undefined? 2 : multiplier);
}

multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);



