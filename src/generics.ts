{
    type GenericArray<param> = Array<param>

    // const rollNumbers: number[] = [1, 2, 3, 4]
    const rollNumbers: Array<number> = [1, 2, 3, 4]

    // const mentors: string[] = ['A', 'B', 'C', 'D', 'E', 'F']
    const mentors: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F']

    // const boolArr: boolean[] = [true, false]
    // const boolArr: Array<boolean> = [true, false]
    const boolArr: GenericArray<boolean> = [true, false]
    
    
    const users: GenericArray<{ name: string, age: number }> = [
        {
            name: 'A',
            age: 5,
        },
        {
            name: 'B',
            age: 5,
        }
    ]

    // generic tuple
    type GenericTuple<X, Y> = [X, Y]

    const man: GenericTuple<string, string> = ['Mr. X', 'Ms. X']
}