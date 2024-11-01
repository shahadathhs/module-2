"use strict";
{
    // Type Assertion
    let anything;
    anything = 'Next Level';
    anything;
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            return parseFloat(value) * 1000;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
        else {
            return "Not convertable value!";
        }
    };
    const resultOne = kgToGm(20);
    const resultTwo = kgToGm("20");
    const resultThree = kgToGm(undefined);
}
