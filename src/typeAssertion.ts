{
    // Type Assertion
    let anything: any;
    anything = 'Next Level';

    (anything as string)

    const kgToGm = (value: string | number | undefined): string | number | undefined => {
        if (typeof value === 'string') {
            return parseFloat(value) * 1000;
        } else if (typeof value === 'number') {
            return value * 1000;
        } else {
            return "Not convertable value!";
        }
    }

    const resultOne = kgToGm(20) as number;
    const resultTwo = kgToGm("20") as string;
    const resultThree = kgToGm(undefined) as undefined;
}