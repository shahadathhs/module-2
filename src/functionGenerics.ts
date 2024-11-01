{
    const arrGeneric = <T>(arr: T[]): T[] => [...arr];

    const resG = arrGeneric<number>([1]);

    type User = { name: string, roll: number }

    const resGObj = arrGeneric<User>([{
        name: 'A',
        roll: 2
    }]);

    const arrGenericTuple = <T, Q>(a: T, b: Q): [T, Q] => [a, b];

    const resGT = arrGenericTuple<number, number>(1, 2);

    type UserT = { name: string, roll: number }

    const resGObjT = arrGenericTuple<User, number>({
        name: 'A',
        roll: 2
    }, 1);

    const addCourse =  <T>(student: T) => {
        const course = 'Next level'

        return {
            ...student,
            course
        }
    }

    const studentOne = addCourse({ name: 'A', roll: 2})


}