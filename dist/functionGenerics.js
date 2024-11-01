"use strict";
{
    const arrGeneric = (arr) => [...arr];
    const resG = arrGeneric([1]);
    const resGObj = arrGeneric([{
            name: 'A',
            roll: 2
        }]);
    const arrGenericTuple = (a, b) => [a, b];
    const resGT = arrGenericTuple(1, 2);
    const resGObjT = arrGenericTuple({
        name: 'A',
        roll: 2
    }, 1);
    const addCourse = (student) => {
        const course = 'Next level';
        return Object.assign(Object.assign({}, student), { course });
    };
    const studentOne = addCourse({ name: 'A', roll: 2 });
}
