"use strict";
{
    const addCourse = (student) => {
        const course = 'Next level';
        return Object.assign(Object.assign({}, student), { course });
    };
    const studentOne = addCourse({ id: 1, name: 'A', roll: 2 });
    const person = 'car';
    const personOne = 'bike';
    const getKeyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'X',
        age: 26,
        address: 'X',
    };
    const resultTwo = getKeyValue(user, 'name');
}
