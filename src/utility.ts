{
    // Pick, Omit
    type Person = {
        name: string,
        age: number
        email?: string
        contactNo: string
    }

    type Name = Pick<Person, 'name'>
    type NameAge = Pick<Person, 'name' | 'age'>

    type ContactInfo = Omit<Person, 'name' | 'age'>

    // Required
    type PersonalRequired = Required<Person>

    // Partial
    type PersonalPartial = Partial<Person>

    // ReadOnly
    type PersonReadOnly = Readonly<Person>

    const person: PersonReadOnly = {
        name: 'A',
        age: 5,
        email: 'a@example.com',
        contactNo: 'a@example.com',
    }

    // person.name = 'X'

    // Record
    // type MyObj = {
    //     a: string,
    //     b: string
    // }
    type MyObj = Record<string, string>

    const obj: MyObj = {
        a: 'A',
        b: 'B',
        c: 'C'
    }

    const emptyObj: Record<string, unknown> = {}
}