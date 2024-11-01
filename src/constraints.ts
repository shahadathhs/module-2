{
    const addCourse = <T extends { id: number, name: string }>(student: T) => {
        const course = 'Next level'

        return {
            ...student,
            course
        }
    }

    const studentOne = addCourse<{
        id: number
        name: string
        roll: number
    }>({id: 1, name: 'A', roll: 2})


    // constraint using key of
    type Vehicle = {
        bike: string,
        car: string,
        ship: string,
    }

    type Owner = 'bike' | 'car' | 'ship'

    type OwnerTwo = keyof Vehicle

    const person: Owner = 'car'

    const personOne: OwnerTwo = 'bike'

    const getKeyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'X',
        age: 26,
        address: 'X',
    }

    const resultTwo = getKeyValue(user, 'name')
}